import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
