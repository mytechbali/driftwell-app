import { Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const tripData = [
  { destKey: "trips.santorini", descKey: "trips.santorini.desc", image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80", duration: 7, price: "$1,200" },
  { destKey: "trips.chiangmai", descKey: "trips.chiangmai.desc", image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80", duration: 10, price: "$650" },
  { destKey: "trips.medellin", descKey: "trips.medellin.desc", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80", duration: 8, price: "$800" },
  { destKey: "trips.tokyo", descKey: "trips.tokyo.desc", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80", duration: 12, price: "$1,800" },
  { destKey: "trips.paris", descKey: "trips.paris.desc", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80", duration: 6, price: "$1,500" },
  { destKey: "trips.marrakech", descKey: "trips.marrakech.desc", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80", duration: 5, price: "$500" },
];

const FeaturedTrips = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3 font-sans">
            {t("trips.tag")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t("trips.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tripData.map((trip, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={trip.image}
                  alt={t(trip.destKey)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-sans">
                  {trip.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-card-foreground">{t(trip.destKey)}</h3>
                <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3 font-sans">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {trip.duration} {t("trips.days")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {t(trip.descKey)}
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
