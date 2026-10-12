import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import DestinationCard from "../components/DestinationCard";
import { CATEGORIES, destinations } from "../data/destinations";

export default function Destinations() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const category = params.get("category") || "All";
  const sort = params.get("sort") || "rating";
  const inputRef = useRef(null);

  useEffect(() => { document.title = "Destinations · Trailmark"; }, []);

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    value && value !== "All" ? next.set(key, value) : next.delete(key);
    setParams(next);
  };

  const results = destinations
    .filter((d) => (category === "All" || d.category === category))
    .filter((d) => `${d.name} ${d.country}`.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => (sort === "price" ? a.price - b.price : b.rating - a.rating));

  return (
    <>
      <PageHeader title="Destinations" subtitle="Filter by style, search by name or sort by price." />
      <section className="container section">
        <div className="filters">
          <input ref={inputRef} value={q} onChange={(e) => update("q", e.target.value)} placeholder="Search destinations" aria-label="Search destinations" />
          <div className="chips">
            {["All", ...CATEGORIES].map((c) => (
              <button key={c} className={`chip ${category === c ? "active" : ""}`} onClick={() => update("category", c)}>{c}</button>
            ))}
          </div>
          <select value={sort} onChange={(e) => update("sort", e.target.value)} aria-label="Sort by">
            <option value="rating">Top rated</option>
            <option value="price">Lowest price</option>
          </select>
        </div>

        {results.length === 0 ? (
          <div className="empty">
            <h3>No trips match your filters</h3>
            <p className="muted">Clear the search or choose another category.</p>
            <button className="btn" onClick={() => { setParams({}); inputRef.current?.focus(); }}>Clear filters</button>
          </div>
        ) : (
          <div className="grid-cards">
            {results.map((d) => <DestinationCard key={d.id} destination={d} />)}
          </div>
        )}
      </section>
    </>
  );
}
