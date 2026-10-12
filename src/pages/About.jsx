  
import PageHeader from "../components/PageHeader";

const aboutImg =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85";

const team = [
  { name: "Meera Subramanian", role: "Founder, trip design" },
  { name: "Karthik Rajan", role: "Head of partnerships" },
  { name: "Divya Natarajan", role: "Customer care lead" },
];

const stats = [
  ["120+", "destinations"],
  ["48k", "trips booked"],
  ["4.8", "average rating"],
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="A small team in Coimbatore building simpler ways to travel."
      />

      <section className="container section split">
        <img
          className="rounded"
          src={aboutImg}
          alt="Beautiful mountain landscape for travel"
          loading="lazy"
        />

        <div>
          <h2>Why we started</h2>

          <p>
            Booking a holiday used to mean ten tabs, three spreadsheets
            and a lot of waiting for confirmations. We built Trailmark
            so you can compare, save and book in one flow.
          </p>

          <p>
            Every package is priced up front and checked by people who
            know the place. If a plan changes, you can edit or cancel
            it from your bookings page.
          </p>

          <ul className="stat-row">
            {stats.map(([n, l]) => (
              <li key={l}>
                <strong>{n}</strong>
                <span className="muted">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <h2>The team</h2>

          <div className="grid-3">
            {team.map((t) => (
              <div key={t.name} className="card pad">
                <div className="avatar">{t.name[0]}</div>
                <h3>{t.name}</h3>
                <p className="muted">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
