import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const slideKeys = [
  { titleKey: "carousel.bali.title", subtitleKey: "carousel.bali.subtitle", url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80", link: "#" },
  { titleKey: "carousel.amalfi.title", subtitleKey: "carousel.amalfi.subtitle", url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920&q=80", link: "#" },
  { titleKey: "carousel.swiss.title", subtitleKey: "carousel.swiss.subtitle", url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80", link: "#" },
  { titleKey: "carousel.kyoto.title", subtitleKey: "carousel.kyoto.subtitle", url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920&q=80", link: "#" },
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useLanguage();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slideKeys.map((slide, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full relative">
              <div className="relative h-screen">
                <img
                  src={slide.url}
                  alt={t(slide.titleKey)}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-16 left-8 md:bottom-24 md:left-16 lg:left-24 text-white max-w-xl">
                  <p className="text-sm uppercase tracking-[0.25em] opacity-70 font-sans mb-3">
                    {t("carousel.tag")}
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {t(slide.titleKey)}
                  </h2>
                  <p className="text-base md:text-lg opacity-80 font-sans font-light mb-6 leading-relaxed">
                    {t(slide.subtitleKey)}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-white/40 text-white bg-white/10 hover:bg-white/20 hover:border-white/60 backdrop-blur-sm px-6 py-5 text-sm font-medium gap-2 transition-all duration-300"
                  >
                    <a href={slide.link}>
                      {t("carousel.explore")} <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slideKeys.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              selectedIndex === i ? "w-8 bg-white" : "w-2 bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
