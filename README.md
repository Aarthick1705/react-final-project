# Trailmark – Travel Booking SPA (React + Vite)

## Run
```
npm install
npm run dev
```
Open http://localhost:5173

## Concept map
| Concept | Where |
|---|---|
| Components / Props | `components/*` (DestinationCard, Rating, ServiceList, BookingForm) |
| useState | Navbar menu, Profile, BookingForm |
| useEffect | useFetch, document titles, localStorage sync |
| useRef | Home search, Destinations clear-focus, Contact error focus |
| useContext + useReducer | `context/BookingContext.jsx`, Contact form |
| Redux Toolkit | `redux/*` (wishlist) |
| Custom hooks | `hooks/useFetch.js`, `hooks/useLocalStorage.js` |
| Routing / Nested | `App.jsx`, `pages/Services.jsx` (+ `pages/services/*`) |
| useParams / useSearchParams | DestinationDetails / Destinations |
| CRUD | `pages/Bookings.jsx` |
| Form validation | BookingForm, Contact, Profile |
| API integration | Home + DestinationDetails reviews (jsonplaceholder) |
