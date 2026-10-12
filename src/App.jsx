import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Services from "./pages/Services";
import Flights from "./pages/services/Flights";
import Hotels from "./pages/services/Hotels";
import Packages from "./pages/services/Packages";
import Bookings from "./pages/Bookings";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />

          {/* Nested routing */}
          <Route path="/services" element={<Services />}>
            <Route index element={<Navigate to="flights" replace />} />
            <Route path="flights" element={<Flights />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="packages" element={<Packages />} />
          </Route>

          <Route path="/bookings" element={<Bookings />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
