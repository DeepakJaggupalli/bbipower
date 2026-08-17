import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="glass-nav navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          <img src="/images/logo.jpg" alt="BBI Power" className="logo-img" />
          <span className="text-gradient">BBI Power</span>
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#project">Project</a>
          <a href="#clearances">Clearances</a>
          <a href="#gallery">Media Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
