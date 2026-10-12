import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/wishlistSlice";
import { formatPrice } from "../data/destinations";
import Rating from "./Rating";

export default function DestinationCard({ destination: d }) {
  const dispatch = useDispatch();
  const saved = useSelector((s) => s.wishlist.ids.includes(d.id));

  return (
    <article className="card dest-card">
      <div className="card-media">
        <img src={d.image} alt={`${d.name}, ${d.country}`} loading="lazy" />
        <button
          className={`heart ${saved ? "on" : ""}`}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${d.name} from wishlist` : `Save ${d.name} to wishlist`}
          onClick={() => dispatch(toggleWishlist(d.id))}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>
      <div className="card-body">
        <div className="row-between">
          <h3>{d.name}</h3>
          <Rating value={d.rating} />
        </div>
        <p className="muted">{d.country} · {d.days} days · {d.category}</p>
        <p>{d.description}</p>
        <div className="row-between">
          <strong>{formatPrice(d.price)} <small className="muted">/ person</small></strong>
          <Link className="btn btn-small" to={`/destinations/${d.id}`}>View trip</Link>
        </div>
      </div>
    </article>
  );
}
