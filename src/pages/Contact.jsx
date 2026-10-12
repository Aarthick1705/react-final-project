import { useReducer, useRef } from "react";
import PageHeader from "../components/PageHeader";

const initial = { values: { name: "", email: "", topic: "Booking help", message: "" }, errors: {}, sent: false };

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE": return { ...state, sent: false, values: { ...state.values, [action.field]: action.value } };
    case "ERRORS": return { ...state, errors: action.errors, sent: false };
    case "SENT":   return { ...initial, sent: true };
    default:       return state;
  }
}

export default function Contact() {
  const [state, dispatch] = useReducer(reducer, initial);
  const refs = { name: useRef(), email: useRef(), message: useRef() };
  const { values, errors, sent } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = {};
    if (!values.name.trim()) found.name = "Tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) found.email = "Enter a valid email address.";
    if (values.message.trim().length < 10) found.message = "Write at least 10 characters.";
    dispatch({ type: "ERRORS", errors: found });
    const firstBad = Object.keys(found)[0];
    if (firstBad) return refs[firstBad].current.focus();
    dispatch({ type: "SENT" });
  };

  const bind = (field) => ({
    name: field, value: values[field], ref: refs[field],
    onChange: (e) => dispatch({ type: "CHANGE", field, value: e.target.value }),
  });

  return (
    <>
      <PageHeader title="Contact us" subtitle="We reply within one working day." />
      <section className="container section split">
        <form className="form card pad" onSubmit={handleSubmit} noValidate>
          {sent && <p className="success" role="status">Thanks, your message has been sent.</p>}
          <label>Name <input {...bind("name")} />{errors.name && <span className="error">{errors.name}</span>}</label>
          <label>Email <input type="email" {...bind("email")} />{errors.email && <span className="error">{errors.email}</span>}</label>
          <label>Topic
            <select name="topic" value={values.topic} onChange={(e) => dispatch({ type: "CHANGE", field: "topic", value: e.target.value })}>
              <option>Booking help</option><option>Refunds</option><option>Group travel</option><option>Feedback</option>
            </select>
          </label>
          <label>Message <textarea rows="5" {...bind("message")} />{errors.message && <span className="error">{errors.message}</span>}</label>
          <button className="btn" type="submit">Send message</button>
        </form>
        <div>
          <h2>Reach us directly</h2>
          <p><strong>Phone</strong><br />+91 9876789623 (9am to 7pm, Mon to Sat)</p>
          <p><strong>Email</strong><br />Aarthicktravel@gmail.com</p>
          <p><strong>Office</strong><br />12 Race Course Road, Coimbatore, Tamil Nadu</p>
        </div>
      </section>
    </>
  );
}
