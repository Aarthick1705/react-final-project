
export const CATEGORIES = ["Beach", "Hills", "Culture", "City"];

export const destinations = [
  {
    id: 1,
    name: "Goa",
    country: "India",
    category: "Beach",
    price: 14500,
    days: 4,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&h=500&q=85",
    description:
      "Sunset beaches, Portuguese lanes and seafood shacks along the Arabian Sea.",
    highlights: [
      "Baga & Palolem beaches",
      "Old Goa churches",
      "Dudhsagar waterfalls",
    ],
  },
  {
    id: 2,
    name: "Munnar",
    country: "India",
    category: "Hills",
    price: 12800,
    days: 3,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&h=500&q=85",
    description:
      "Rolling tea estates and misty valleys in the Western Ghats of Kerala.",
    highlights: [
      "Tea museum visit",
      "Eravikulam National Park",
      "Top Station viewpoint",
    ],
  },
  {
    id: 3,
    name: "Jaipur",
    country: "India",
    category: "Culture",
    price: 11200,
    days: 3,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&h=500&q=85",
    description:
      "The Pink City: forts, palaces and bustling bazaars full of crafts.",
    highlights: [
      "Amber Fort",
      "City Palace",
      "Hawa Mahal at sunrise",
    ],
  },
  {
    id: 4,
    name: "Bali",
    country: "Indonesia",
    category: "Beach",
    price: 48500,
    days: 6,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&h=500&q=85",
    description:
      "Rice terraces, surf breaks and temples that sit right on the cliffs.",
    highlights: [
      "Ubud rice terraces",
      "Uluwatu temple",
      "Nusa Penida day trip",
    ],
  },
  {
    id: 5,
    name: "Santorini",
    country: "Greece",
    category: "Beach",
    price: 92000,
    days: 5,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&h=500&q=85",
    description:
      "White-washed villages above a volcanic caldera and the bluest water.",
    highlights: [
      "Oia sunset",
      "Caldera boat tour",
      "Red Beach",
    ],
  },
  {
    id: 6,
    name: "Paris",
    country: "France",
    category: "City",
    price: 110000,
    days: 6,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&h=500&q=85",
    description:
      "Museums, river walks and café culture in the capital of France.",
    highlights: [
      "Louvre Museum",
      "Seine river cruise",
      "Montmartre",
    ],
  },
  {
    id: 7,
    name: "Kyoto",
    country: "Japan",
    category: "Culture",
    price: 98000,
    days: 5,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&h=500&q=85",
    description:
      "Wooden temples, tea houses and cherry blossoms through the seasons.",
    highlights: [
      "Fushimi Inari gates",
      "Arashiyama bamboo grove",
      "Gion district",
    ],
  },
  {
    id: 8,
    name: "Maldives",
    country: "Maldives",
    category: "Beach",
    price: 86000,
    days: 4,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&h=500&q=85",
    description:
      "Overwater villas, coral reefs and calm lagoons made for slow days.",
    highlights: [
      "Snorkelling at the reef",
      "Sandbank picnic",
      "Sunset dolphin cruise",
    ],
  },
];

export const formatPrice = (n) =>
  "₹" + n.toLocaleString("en-IN");
