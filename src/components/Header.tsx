import { useState, useEffect } from "react";
import { Globe, Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "FR", label: "Français" },
  { code: "DE", label: "Deutsch" },
];

const navItems = [
  {
    label: "Destinations",
    children: [
      { label: "Asia", href: "#" },
      { label: "Europe", href: "#" },
      { label: "Americas", href: "#" },
    ],
  },
  {
    label: "Travel Guides",
    children: [
      { label: "Budget Travel", href: "#" },
      { label: "Luxury Travel", href: "#" },
      { label: "Safety Tips", href: "#" },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "Forum", href: "#" },
      { label: "Stories", href: "#" },
      { label: "Meetups", href: "#" },
    ],
  },
];

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("EN");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Utility bar */}
      <div className="border-b border-border/30">
        <div className="container mx-auto flex items-center justify-end gap-3 px-6 py-1.5 text-sm">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 text-xs h-7">
                <Globe className="h-3.5 w-3.5" />
                {lang}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((l) => (
                <DropdownMenuItem key={l.code} onClick={() => setLang(l.code)}>
                  {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleTheme}>
            {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex items-center justify-center px-6 py-3 relative">
        <a href="/" className="absolute left-6 text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Solo<span className="text-primary">Wander</span>
        </a>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-sm font-medium">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.children.map((child) => (
                  <DropdownMenuItem key={child.label}>
                    {child.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <Button variant="ghost" size="icon" className="md:hidden absolute right-6" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/30 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <div key={item.label}>
              <p className="text-sm font-semibold text-muted-foreground mb-1">{item.label}</p>
              {item.children.map((child) => (
                <a key={child.label} href={child.href} className="block py-1.5 text-sm hover:text-primary transition-colors">
                  {child.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
