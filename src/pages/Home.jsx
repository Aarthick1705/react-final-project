
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

const heroImg =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80";

const perks = [
  {
    title: "Free cancellation",
    text: "Change your plans up to 48 hours before departure at no cost.",
  },
  {
    title: "Local guides",
    text: "Every itinerary is checked by guides who live in the destination.",
  },
  {
    title: "One price",
    text: "Flights, stay and transfers are quoted together, with no surprise fees.",
  },
];

export default function Home() {
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const {
    data: reviews,
    loading,
    error,
  } = useFetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=3"
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchRef.current.value.trim();

    navigate(
      q
        ? `/destinations?q=${encodeURIComponent(q)}`
        : "/destinations"
    );
  };

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${heroImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container hero-content">
          <h1>Pick a place. We'll handle the rest.</h1>

          <p className="lead">
            Compare trips, save favourites and manage every booking
            from one account.
          </p>

          <form className="hero-search" onSubmit={handleSearch}>
            <input
              ref={searchRef}
              placeholder="Try Goa, Bali or Kyoto"
              aria-label="Search destinations"
            />
            <button className="btn" type="submit">
              Search trips
            </button>
          </form>
        </div>
      </section>

      <section className="section container">
        <div className="row-between">
          <h2>Popular this season</h2>
          <Link to="/destinations">See all destinations</Link>
        </div>

        <div className="grid-cards">
          {destinations.slice(0, 4).map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </div>
      </section>

      <section className="section tint">
        <div className="container grid-3">
          {perks.map((p) => (
            <div key={p.title}>
              <h3>{p.title}</h3>
              <p className="muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2>What travellers say</h2>

        {loading && <p className="muted">Loading reviews...</p>}
        {error && <p className="error">{error}</p>}

        <div className="grid-3">
          {reviews?.map((r) => (
            <blockquote key={r.id} className="card quote">
              <p>{r.body.split("\n")[0]}.</p>
              <footer className="muted">{r.email}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
