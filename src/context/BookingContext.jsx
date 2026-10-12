import { createContext, useContext, useEffect, useReducer } from "react";

const BookingContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "ADD":    return [{ ...action.payload, id: Date.now() }, ...state];                    // Create
    case "UPDATE": return state.map((b) => (b.id === action.payload.id ? action.payload : b));  // Update
    case "DELETE": return state.filter((b) => b.id !== action.id);                              // Delete
    case "CLEAR":  return [];
    default:       return state;
  }
}

const init = () => {
  try { return JSON.parse(localStorage.getItem("bookings")) || []; } catch { return []; }
};

export function BookingProvider({ children }) {
  const [bookings, dispatch] = useReducer(reducer, [], init);
  useEffect(() => { localStorage.setItem("bookings", JSON.stringify(bookings)); }, [bookings]);
  return <BookingContext.Provider value={{ bookings, dispatch }}>{children}</BookingContext.Provider>;
}

export const useBookings = () => useContext(BookingContext);
