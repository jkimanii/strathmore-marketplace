// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        🛍️ StrathMarket
      </Link>

      <div className="navbar-search">
        {/* This input becomes functional in Milestone 7 */}
        <input
          type="search"
          placeholder="Search listings..."
          className="search-input"
          disabled
        />
      </div>

      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Browse
        </NavLink>
        <NavLink
          to="/post"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          + Post Item
        </NavLink>
        <button className="nav-btn-login">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;