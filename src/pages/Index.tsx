import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import ImageCarousel from "@/components/ImageCarousel";
import FeaturedTrips from "@/components/FeaturedTrips";
import SafetyTips from "@/components/SafetyTips";
import NewsletterFooter from "@/components/NewsletterFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroVideo />
        <ImageCarousel />
        <FeaturedTrips />
        <SafetyTips />
      </main>
      <NewsletterFooter />
    </div>
  );
};

export default Index;
