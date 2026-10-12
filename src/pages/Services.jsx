import { NavLink, Outlet } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function Services() {
  return (
    <>
      <PageHeader title="Services" subtitle="Book individual pieces of your trip or take a ready-made package." />
      <section className="container section">
        <nav className="subnav" aria-label="Services">
          <NavLink to="flights">Flights</NavLink>
          <NavLink to="hotels">Hotels</NavLink>
          <NavLink to="packages">Packages</NavLink>
        </nav>
        <Outlet />
      </section>
    </>
  );
}
