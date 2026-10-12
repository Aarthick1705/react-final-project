import { useState } from "react";
import { useSelector } from "react-redux";
import PageHeader from "../components/PageHeader";
import useLocalStorage from "../hooks/useLocalStorage";
import { useBookings } from "../context/BookingContext";

const defaultProfile = { name: "Guest traveller", email: "", phone: "", city: "" };

export default function Profile() {
  const [profile, setProfile] = useLocalStorage("profile", defaultProfile);
  const [draft, setDraft] = useState(profile);
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);
  const { bookings } = useBookings();
  const wishCount = useSelector((s) => s.wishlist.ids.length);

  const handleChange = (e) => { setDraft({ ...draft, [e.target.name]: e.target.value }); setSaved(false); };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = {};
    if (draft.name.trim().length < 3) found.name = "Name must be at least 3 characters.";
    if (draft.email && !/^\S+@\S+\.\S+$/.test(draft.email)) found.email = "Enter a valid email address.";
    if (draft.phone && !/^[6-9]\d{9}$/.test(draft.phone)) found.phone = "Enter a 10-digit Indian mobile number.";
    setErrors(found);
    if (Object.keys(found).length === 0) { setProfile(draft); setSaved(true); }
  };

  return (
    <>
      <PageHeader title="Your profile" subtitle="Keep your details ready for faster booking." />
      <section className="container section split">
        <div className="card pad">
          <div className="avatar big">{profile.name[0]?.toUpperCase()}</div>
          <h3>{profile.name}</h3>
          <p className="muted">{profile.email || "No email added"}</p>
          <ul className="stat-row">
            <li><strong>{bookings.length}</strong><span className="muted">bookings</span></li>
            <li><strong>{wishCount}</strong><span className="muted">saved</span></li>
          </ul>
        </div>

        <form className="form card pad" onSubmit={handleSubmit} noValidate>
          <h3>Edit details</h3>
          {saved && <p className="success" role="status">Profile updated.</p>}
          <label>Full name <input name="name" value={draft.name} onChange={handleChange} />{errors.name && <span className="error">{errors.name}</span>}</label>
          <label>Email <input name="email" type="email" value={draft.email} onChange={handleChange} />{errors.email && <span className="error">{errors.email}</span>}</label>
          <label>Mobile <input name="phone" value={draft.phone} onChange={handleChange} inputMode="numeric" />{errors.phone && <span className="error">{errors.phone}</span>}</label>
          <label>Home city <input name="city" value={draft.city} onChange={handleChange} /></label>
          <button className="btn" type="submit">Save profile</button>
        </form>
      </section>
    </>
  );
}
