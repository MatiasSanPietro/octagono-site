export default function Footer() {
  return (
    <footer className="bg-[color:var(--bg-deep)] border-t border-white/5">
      <div className="mx-auto max-w-6xl h-[64px] px-4 flex items-center justify-between text-sm text-[color:var(--text-muted)]">
        <span>
          © {new Date().getFullYear()}{' '}
          <span className="text-[color:var(--text-strong)]] font-medium">Octágono Lab</span>
        </span>

        <a
          className="flex items-center gap-1 text-[color:var(--text)] hover:text-[var(--color-brand-500)] transition-colors"
          href="https://www.linkedin.com/company/octagono-lab/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-4 h-4"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175A1.145 1.145 0 0 1 0 14.854V1.146zM4.943 12.306V6.169H2.542v6.137h2.401zM3.743 5.188c.837 0 1.357-.554 1.357-1.247-.015-.708-.52-1.248-1.342-1.248-.822 0-1.357.54-1.357 1.248 0 .693.52 1.247 1.327 1.247h.015zM13.458 12.306V8.74c0-1.9-1.016-2.782-2.372-2.782-1.094 0-1.585.602-1.859 1.027v-0.875H6.842c.03.58 0 6.196 0 6.196h2.385v-3.462c0-.185.013-.37.068-.501.15-.37.491-.756 1.064-.756.75 0 1.051.57 1.051 1.406v3.313h2.048z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
