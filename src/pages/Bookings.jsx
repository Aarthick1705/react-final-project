import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import BookingForm from "../components/BookingForm";
import { useBookings } from "../context/BookingContext";
import { destinations, formatPrice } from "../data/destinations";

export default function Bookings() {
  const { bookings, dispatch } = useBookings();
  const [editing, setEditing] = useState(null);

  const nameOf = (b) => {
    const d = destinations.find((x) => x.id === b.destinationId);
    return d ? `${d.name}, ${d.country}` : b.label || "Custom booking";
  };
  const totalOf = (b) => {
    const d = destinations.find((x) => x.id === b.destinationId);
    return d ? formatPrice(d.price * b.travellers) : "—";
  };

  const save = (values) => {
    if (editing) {
      dispatch({ type: "UPDATE", payload: { ...editing, ...values } });
      setEditing(null);
    } else {
      dispatch({ type: "ADD", payload: values });
    }
  };

  return (
    <>
      <PageHeader title="My bookings" subtitle="Create, edit or cancel your trips." />
      <section className="container section bookings-layout">
        <div className="card pad">
          <h3>{editing ? "Edit booking" : "New booking"}</h3>
          <BookingForm
            initial={editing}
            onSubmit={save}
            onCancel={editing ? () => setEditing(null) : undefined}
            submitLabel={editing ? "Save changes" : "Add booking"}
          />
        </div>

        <div>
          <div className="row-between">
            <h3>Upcoming trips ({bookings.length})</h3>
            {bookings.length > 0 && (
              <button className="btn btn-ghost btn-small" onClick={() => window.confirm("Cancel all bookings?") && dispatch({ type: "CLEAR" })}>
                Cancel all
              </button>
            )}
          </div>

          {bookings.length === 0 ? (
            <div className="empty">
              <h3>No bookings yet</h3>
              <p className="muted">Fill in the form or browse destinations to plan your first trip.</p>
              <Link className="btn" to="/destinations">Browse destinations</Link>
            </div>
          ) : (
            <ul className="booking-list">
              {bookings.map((b) => (
                <li key={b.id} className="card pad booking-item">
                  <div>
                    <h4>{nameOf(b)}</h4>
                    <p className="muted">{b.name} · {b.email}</p>
                    <p className="muted">{b.date} · {b.travellers} traveller{b.travellers > 1 ? "s" : ""} · Total {totalOf(b)}</p>
                  </div>
                  <div className="item-actions">
                    <button className="btn btn-small" onClick={() => setEditing(b)}>Edit</button>
                    <button className="btn btn-ghost btn-small" onClick={() => dispatch({ type: "DELETE", id: b.id })}>Cancel</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
