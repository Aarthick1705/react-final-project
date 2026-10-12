import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearWishlist } from "../redux/wishlistSlice";
import { destinations } from "../data/destinations";
import PageHeader from "../components/PageHeader";
import DestinationCard from "../components/DestinationCard";

export default function Wishlist() {
  const ids = useSelector((s) => s.wishlist.ids);
  const dispatch = useDispatch();
  const saved = destinations.filter((d) => ids.includes(d.id));

  return (
    <>
      <PageHeader title="Your wishlist" subtitle="Places you've saved for later." />
      <section className="container section">
        {saved.length === 0 ? (
          <div className="empty">
            <h3>Nothing saved yet</h3>
            <p className="muted">Tap the heart on any destination to keep it here.</p>
            <Link className="btn" to="/destinations">Find destinations</Link>
          </div>
        ) : (
          <>
            <button className="btn btn-ghost btn-small" onClick={() => dispatch(clearWishlist())}>Clear wishlist</button>
            <div className="grid-cards top-gap">
              {saved.map((d) => <DestinationCard key={d.id} destination={d} />)}
            </div>
          </>
        )}
      </section>
    </>
  );
}
