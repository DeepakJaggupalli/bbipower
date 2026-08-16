import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="glass-nav navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src="/images/logo.jpg" alt="BBI Power" className="logo-img" />
          <span className="text-gradient">BBI Power</span>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/project">Project Details</Link>
          <Link to="/clearances">Clearances</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
