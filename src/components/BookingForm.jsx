import { useEffect, useRef, useState } from "react";
import { destinations } from "../data/destinations";

const empty = { name: "", email: "", destinationId: "", date: "", travellers: 1 };

const validate = (v) => {
  const e = {};
  if (v.name.trim().length < 3) e.name = "Enter your full name (at least 3 characters).";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (!v.destinationId) e.destinationId = "Choose a destination.";
  if (!v.date) e.date = "Pick a travel date.";
  else if (new Date(v.date) < new Date(new Date().toDateString())) e.date = "Travel date cannot be in the past.";
  if (!(Number(v.travellers) >= 1 && Number(v.travellers) <= 10)) e.travellers = "Travellers must be between 1 and 10.";
  return e;
};

// Controlled form with validation. Reused for create (Details page) and edit (Bookings page).
export default function BookingForm({ initial, lockedDestination, onSubmit, onCancel, submitLabel = "Confirm booking" }) {
  const [values, setValues] = useState({ ...empty, ...initial, destinationId: lockedDestination ?? initial?.destinationId ?? "" });
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);

  useEffect(() => { nameRef.current?.focus(); }, [initial]);
  useEffect(() => {
    setValues({ ...empty, ...initial, destinationId: lockedDestination ?? initial?.destinationId ?? "" });
    setErrors({});
  }, [initial, lockedDestination]);

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    onSubmit({ ...values, destinationId: Number(values.destinationId), travellers: Number(values.travellers) });
    if (!initial) setValues({ ...empty, destinationId: lockedDestination ?? "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label>Full name
        <input ref={nameRef} name="name" value={values.name} onChange={handleChange} placeholder="Aarthick" />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <label>Email
        <input name="email" type="email" value={values.email} onChange={handleChange} placeholder="Aarthicktravel@example.com" />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      {!lockedDestination && (
        <label>Destination
          <select name="destinationId" value={values.destinationId} onChange={handleChange}>
            <option value="">Select a destination</option>
            {destinations.map((d) => <option key={d.id} value={d.id}>{d.name}, {d.country}</option>)}
          </select>
          {errors.destinationId && <span className="error">{errors.destinationId}</span>}
        </label>
      )}
      <div className="grid-2">
        <label>Travel date
          <input name="date" type="date" value={values.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </label>
        <label>Travellers
          <input name="travellers" type="number" min="1" max="10" value={values.travellers} onChange={handleChange} />
          {errors.travellers && <span className="error">{errors.travellers}</span>}
        </label>
      </div>
      <div className="form-actions">
        <button className="btn" type="submit">{submitLabel}</button>
        {onCancel && <button className="btn btn-ghost" type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}
