import { useState, useRef, useEffect, useCallback } from 'react';

const images = [
  'https://picsum.photos/id/1018/1600/900',
  'https://picsum.photos/id/1039/1600/900',
  'https://picsum.photos/id/11/2500/1667',
];

const AUTOPLAY_MS = 3000;
const TRANSITION_MS = 600;
const HOTSPOT_W = '22%';

export default function Slider() {
  const [idx, setIdx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const clampIndex = (n) => (n + images.length) % images.length;

  const go = useCallback((dir) => {
    setIdx((p) => clampIndex(p + dir));
  }, []);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [idx, go]);

  const onDown = (clientX) => {
    setDragging(true);
    setDragStartX(clientX);
    setOffsetX(0);
    clearInterval(timerRef.current);
  };

  const onMove = (clientX) => {
    if (!dragging) return;
    setOffsetX(clientX - dragStartX);
  };

  const onUp = () => {
    if (!dragging) return;
    const threshold = (containerRef.current?.clientWidth || 1) * 0.15;
    if (offsetX > threshold) go(-1);
    else if (offsetX < -threshold) go(1);
    setDragging(false);
    setOffsetX(0);
  };

  const handleMouseDown = (e) => onDown(e.clientX);
  const handleMouseMove = (e) => onMove(e.clientX);
  const handleTouchStart = (e) => onDown(e.touches[0].clientX);
  const handleTouchMove = (e) => onMove(e.touches[0].clientX);
  const handleEnd = () => onUp();

  const trackStyle = {
    transform: `translateX(calc(${-idx * 100}% + ${offsetX}px))`,
    transition: dragging ? 'none' : `transform ${TRANSITION_MS}ms ease-in-out`,
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden select-none touch-pan-y"
      style={{ height: 'calc(100vh - 72px - 64px)' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleEnd}
      onMouseUp={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      <div className="flex h-full w-full" style={trackStyle}>
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-full relative">
            <img
              src={src}
              alt={`slide-${i}`}
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" />
          </div>
        ))}
      </div>

      <button
        aria-label="Anterior"
        onClick={() => go(-1)}
        className="absolute inset-y-0 left-0"
        style={{ width: HOTSPOT_W }}
      />
      <button
        aria-label="Siguiente"
        onClick={() => go(1)}
        className="absolute inset-y-0 right-0"
        style={{ width: HOTSPOT_W }}
      />
    </section>
  );
}
