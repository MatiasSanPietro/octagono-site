import { Outlet } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
