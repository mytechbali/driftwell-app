import { Share2, Wifi, Brain, MapPin, Shield, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const tipData = [
  { icon: Share2, titleKey: "safety.share.title", descKey: "safety.share.desc", size: "large" as const },
  { icon: Wifi, titleKey: "safety.connected.title", descKey: "safety.connected.desc", size: "small" as const },
  { icon: Brain, titleKey: "safety.instincts.title", descKey: "safety.instincts.desc", size: "small" as const },
  { icon: MapPin, titleKey: "safety.surroundings.title", descKey: "safety.surroundings.desc", size: "small" as const },
  { icon: Shield, titleKey: "safety.valuables.title", descKey: "safety.valuables.desc", size: "small" as const },
  { icon: Users, titleKey: "safety.connect.title", descKey: "safety.connect.desc", size: "large" as const },
];

const SafetyTips = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3 font-sans">
            {t("safety.tag")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t("safety.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {tipData.map((tip, i) => {
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
                    {t(tip.titleKey)}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed font-sans ${isLarge ? "text-sm" : "text-xs"}`}>
                    {t(tip.descKey)}
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
