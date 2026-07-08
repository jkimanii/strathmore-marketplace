import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import './Layout.css';

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
