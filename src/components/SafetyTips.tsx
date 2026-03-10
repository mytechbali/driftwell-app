import { Share2, Wifi, Brain, MapPin, Shield, Users } from "lucide-react";

const tips = [
  {
    icon: Share2,
    title: "Share Your Itinerary",
    description: "Always let someone know where you're going. Share your plans with a trusted friend or family member.",
    size: "large" as const,
  },
  {
    icon: Wifi,
    title: "Stay Connected",
    description: "Get a local SIM or eSIM. Reliable internet means reliable safety.",
    size: "small" as const,
  },
  {
    icon: Brain,
    title: "Trust Your Instincts",
    description: "If something feels off, leave. Your gut is your best travel companion.",
    size: "small" as const,
  },
  {
    icon: MapPin,
    title: "Know Your Surroundings",
    description: "Research neighborhoods before booking. Stay aware of local customs and areas to avoid.",
    size: "small" as const,
  },
  {
    icon: Shield,
    title: "Secure Your Valuables",
    description: "Use hotel safes, money belts, and keep digital copies of all important documents.",
    size: "small" as const,
  },
  {
    icon: Users,
    title: "Connect with Others",
    description: "Join group tours, stay in social hostels, and use travel apps to meet fellow solo travelers safely.",
    size: "large" as const,
  },
];

const SafetyTips = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3 font-sans">
            Travel Smart
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Safety Tips for Solo Travelers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {tips.map((tip, i) => {
            const Icon = tip.icon;
            const isLarge = tip.size === "large";
            return (
              <div
                key={i}
                className={`rounded-2xl bg-card border border-border p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-primary/30 group ${
                  isLarge ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-xl bg-accent p-2.5 transition-colors duration-300 group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-accent-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className={`font-bold text-card-foreground mb-2 ${isLarge ? "text-xl" : "text-base"}`}>
                    {tip.title}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed font-sans ${isLarge ? "text-sm" : "text-xs"}`}>
                    {tip.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
