import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="brand">Aarthick travel booking</p>
          <p className="muted">Plan, book and manage your trips in one place.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/destinations">Destinations</Link>
          <Link to="/services/packages">Packages</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
      <p className="container copyright">© {new Date().getFullYear()} Aarthick Travels. All rights reserved.</p>
    </footer>
  );
}
