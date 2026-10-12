import { useBookings } from "../context/BookingContext";
import { formatPrice } from "../data/destinations";
import { useState } from "react";

// Reusable list for Flights / Hotels / Packages (props + list rendering)
export default function ServiceList({ heading, intro, items, unit }) {
  const { bookings, dispatch } = useBookings();
  const [added, setAdded] = useState(null);

  const quickBook = (item) => {
    dispatch({
      type: "ADD",
      payload: { name: "Quick booking", email: "guest@trailmark.in", destinationId: "", label: item.title,
                 date: new Date(Date.now() + 14 * 864e5).toISOString().slice(0, 10), travellers: 1 },
    });
    setAdded(item.id);
  };

  return (
    <div>
      <h2>{heading}</h2>
      <p className="muted">{intro}</p>
      <ul className="service-list">
        {items.map((item) => (
          <li key={item.id} className="card service-item">
            <div>
              <h3>{item.title}</h3>
              <p className="muted">{item.meta}</p>
            </div>
            <div className="service-action">
              <strong>{formatPrice(item.price)}<small className="muted"> {unit}</small></strong>
              <button className="btn btn-small" onClick={() => quickBook(item)} disabled={added === item.id}>
                {added === item.id ? "Added to bookings" : "Book now"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      {bookings.length === 0 && <p className="muted">Nothing booked yet. Pick an option above to get started.</p>}
    </div>
  );
}
