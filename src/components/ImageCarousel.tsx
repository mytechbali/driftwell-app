import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80",
    title: "Bali, Indonesia",
    subtitle: "Tropical paradise awaits",
  },
  {
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920&q=80",
    title: "Amalfi Coast, Italy",
    subtitle: "Mediterranean dreams",
  },
  {
    url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80",
    title: "Swiss Alps",
    subtitle: "Mountain serenity",
  },
  {
    url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920&q=80",
    title: "Kyoto, Japan",
    subtitle: "Ancient beauty",
  },
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
          {slides.map((slide, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full relative">
              <div className="relative h-[50vh] md:h-[60vh]">
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
                  <h3 className="text-2xl md:text-4xl font-bold mb-1">{slide.title}</h3>
                  <p className="text-sm md:text-base opacity-80 font-sans">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
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
