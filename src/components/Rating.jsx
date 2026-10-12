// Reusable presentational component (props)
export default function Rating({ value }) {
  return <span className="rating" aria-label={`Rated ${value} out of 5`}>★ {value.toFixed(1)}</span>;
}
