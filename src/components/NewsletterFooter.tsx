import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: ["Destinations", "Travel Guides", "Featured Trips", "Safety Tips"],
  },
  {
    title: "Community",
    links: ["Forum", "Stories", "Meetups", "Partners"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
];

const NewsletterFooter = () => {
  const [email, setEmail] = useState("");

  return (
    <footer>
      {/* Newsletter */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Adventure
          </h2>
          <p className="mb-8 opacity-80 font-sans">
            Get weekly solo travel tips, destination guides, and exclusive deals straight to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-sans"
            />
            <Button
              variant="secondary"
              className="shrink-0 gap-2 font-sans font-semibold"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer links */}
      <div className="bg-card border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <a href="/" className="text-lg font-bold tracking-tight block mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Solo<span className="text-primary">Wander</span>
              </a>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Empowering solo travelers to explore the world with confidence.
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
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-sans">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground font-sans">
            © 2026 SoloWander. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;
