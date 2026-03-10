import { Clock, DollarSign } from "lucide-react";

const trips = [
  {
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80",
    destination: "Santorini, Greece",
    duration: "7 days",
    price: "$1,200",
    description: "Explore whitewashed villages, stunning sunsets, and ancient ruins on this iconic island getaway.",
  },
  {
    image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80",
    destination: "Chiang Mai, Thailand",
    duration: "10 days",
    price: "$650",
    description: "Temples, night markets, and lush jungle treks make this a solo traveler's dream destination.",
  },
  {
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80",
    destination: "Medellín, Colombia",
    duration: "8 days",
    price: "$800",
    description: "A city transformed — vibrant street art, warm locals, and perfect spring-like weather year-round.",
  },
  {
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",
    destination: "Tokyo, Japan",
    duration: "12 days",
    price: "$1,800",
    description: "From neon-lit streets to serene temples, Tokyo offers an unforgettable solo adventure.",
  },
  {
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80",
    destination: "Paris, France",
    duration: "6 days",
    price: "$1,500",
    description: "Wander cobblestone streets, visit world-class museums, and savor café culture alone.",
  },
  {
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80",
    destination: "Marrakech, Morocco",
    duration: "5 days",
    price: "$500",
    description: "Get lost in the medina, bargain at souks, and stay in a beautiful traditional riad.",
  },
];

const FeaturedTrips = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3 font-sans">
            Curated Experiences
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Featured Solo Trips
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-sans">
                  {trip.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-card-foreground">{trip.destination}</h3>
                <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3 font-sans">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {trip.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {trip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
