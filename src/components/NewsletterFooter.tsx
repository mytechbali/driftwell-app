import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Instagram, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const NewsletterFooter = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t("footer.explore"),
      links: [
        { label: t("footer.destinations"), href: "#" },
        { label: t("footer.travelGuides"), href: "#" },
        { label: t("footer.featuredTrips"), href: "#" },
        { label: t("footer.safetyTips"), href: "#" },
      ],
    },
    {
      title: t("footer.community"),
      links: [
        { label: t("footer.forum"), href: "#" },
        { label: t("footer.stories"), href: "#" },
        { label: t("footer.meetups"), href: "#" },
        { label: t("footer.partners"), href: "#" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.about"), href: "#" },
        { label: t("footer.careers"), href: "#" },
        { label: t("footer.press"), href: "#" },
        { label: t("footer.contact"), href: "#" },
      ],
    },
  ];

  return (
    <footer>
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("newsletter.title")}
          </h2>
          <p className="mb-8 opacity-80 font-sans">
            {t("newsletter.subtitle")}
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-sans"
            />
            <Button
              variant="secondary"
              className="shrink-0 gap-2 font-sans font-semibold"
            >
              {t("newsletter.subscribe")}
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-card border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <a href="/" className="text-lg font-bold tracking-tight block mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Solo<span className="text-primary">Wander</span>
              </a>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {t("footer.tagline")}
              </p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold text-sm mb-3 text-foreground">{group.title}</h4>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-sans">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground font-sans">
            {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;
