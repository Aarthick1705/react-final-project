import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/wishlistSlice";
import { useBookings } from "../context/BookingContext";
import useFetch from "../hooks/useFetch";
import { destinations, formatPrice } from "../data/destinations";
import BookingForm from "../components/BookingForm";
import Rating from "../components/Rating";

export default function DestinationDetails() {
  const { id } = useParams();
  const d = destinations.find((x) => x.id === Number(id));
  const dispatch = useDispatch();
  const { dispatch: bookingDispatch } = useBookings();
  const saved = useSelector((s) => s.wishlist.ids.includes(Number(id)));
  const [confirmed, setConfirmed] = useState(false);
  const { data: reviews, loading } = useFetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}&_limit=3`);

  useEffect(() => {
    document.title = d ? `${d.name} · Trailmark` : "Not found · Trailmark";
    setConfirmed(false);
  }, [d, id]);

  if (!d) {
    return (
      <div className="container section empty">
        <h2>We couldn't find that destination</h2>
        <Link className="btn" to="/destinations">Browse destinations</Link>
      </div>
    );
  }

  const book = (values) => {
    bookingDispatch({ type: "ADD", payload: values });
    setConfirmed(true);
  };

  return (
    <div className="container section">
      <Link to="/destinations" className="back">← All destinations</Link>
      <div className="details">
        <div>
          <img className="rounded details-img" src={d.image} alt={`${d.name}, ${d.country}`} />
          <div className="row-between top-gap">
            <h1>{d.name}, {d.country}</h1>
            <Rating value={d.rating} />
          </div>
          <p className="muted">{d.days} days · {d.category} · from {formatPrice(d.price)} per person</p>
          <p>{d.description}</p>
          <h3>Trip highlights</h3>
          <ul className="ticks">{d.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          <button className="btn btn-ghost" onClick={() => dispatch(toggleWishlist(d.id))}>
            {saved ? "♥ Saved to wishlist" : "♡ Save to wishlist"}
          </button>

          <h3 className="top-gap">Traveller reviews</h3>
          {loading ? <p className="muted">Loading reviews…</p> : (
            reviews?.map((r) => (
              <div key={r.id} className="card pad review">
                <p>{r.body.split("\n")[0]}.</p>
                <small className="muted">{r.email}</small>
              </div>
            ))
          )}
        </div>

        <aside className="card pad book-panel">
          <h3>Book this trip</h3>
          {confirmed ? (
            <div>
              <p>Booking confirmed. You can edit or cancel it any time.</p>
              <Link className="btn" to="/bookings">View my bookings</Link>
            </div>
          ) : (
            <BookingForm lockedDestination={d.id} onSubmit={book} />
          )}
        </aside>
      </div>
    </div>
  );
}
