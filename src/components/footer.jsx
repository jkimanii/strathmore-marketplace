import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">
          <img src="/logo.png" alt="Logo" />
          <span>
            <span className="logo-strath">Strath</span>Shop
          </span>
        </p>
        <p className="footer-tagline">
          A student marketplace for Strathmore University and nearby campuses.
        </p>
        <nav className="footer-links">
          <Link to="/">Browse</Link>
          <Link to="/post">Sell</Link>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <p className="footer-disclaimer">
          This platform is a student project and is not officially affiliated
          with Strathmore University.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
