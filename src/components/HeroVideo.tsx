import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroVideo = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] opacity-80 font-sans">
          Solo Travel Platform
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl max-w-4xl">
          The World is Yours to Wander
        </h1>
        <p className="mb-10 max-w-xl text-lg opacity-80 font-sans font-light">
          Discover hidden gems, connect with fellow travelers, and create unforgettable memories on your own terms.
        </p>
        <Button
          size="lg"
          className="rounded-full px-8 py-6 text-base font-semibold gap-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Start Your Journey
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroVideo;
