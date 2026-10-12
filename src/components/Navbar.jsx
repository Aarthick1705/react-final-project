import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useBookings } from "../context/BookingContext";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/destinations", label: "Destinations" },
  { to: "/services", label: "Services" },
  { to: "/bookings", label: "My bookings" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const wishCount = useSelector((s) => s.wishlist.ids.length);
  const { bookings } = useBookings();
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>Aarthick travel booking</Link>

        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={close}>
              {l.label}
              {l.to === "/bookings" && bookings.length > 0 && <span className="badge">{bookings.length}</span>}
            </NavLink>
          ))}
          <NavLink to="/wishlist" onClick={close}>
            Wishlist{wishCount > 0 && <span className="badge">{wishCount}</span>}
          </NavLink>
          <NavLink to="/profile" className="btn btn-small" onClick={close}>Profile</NavLink>
        </nav>
      </div>
    </header>
  );
}
