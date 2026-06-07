import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
import logo from "@/assets/logo.jpg.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/dining", label: "Dining" },
  { to: "/events", label: "Events" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const threshold = 15;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Dynamic background when scrolled
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // If mobile menu is open, do not hide header
      if (open) {
        setVisible(true);
        return;
      }
      
      // Near top of page, keep header visible
      if (currentScrollY < 50) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      
      const diff = currentScrollY - lastScrollY.current;
      
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // Scrolling down -> hide
          setVisible(false);
        } else {
          // Scrolling up -> show
          setVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
        visible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isScrolled 
          ? "bg-primary/95 backdrop-blur-md border-b border-white/5 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="relative container-luxe flex items-center justify-between h-20 text-primary-foreground">
        <Link to="/" className="flex items-center gap-3">
          <video
            src="/logo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40"
          />
          <div className="leading-tight">
            <div className="font-['Playfair_Display'] text-lg font-medium tracking-wide">Peacock's Crest</div>
            <div className="font-['Montserrat'] text-[10px] tracking-[0.32em] text-white uppercase font-medium">Resort · Satara</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-['Montserrat'] text-xs tracking-[0.22em] uppercase font-medium text-primary-foreground/85 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+919673185571"
          className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 font-['Montserrat'] text-xs tracking-[0.22em] uppercase font-medium border border-gold text-primary-foreground hover:bg-gold hover:text-primary transition-colors"
        >
          Book Now
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-px bg-primary-foreground" />
            <span className="block w-6 h-px bg-primary-foreground" />
            <span className="block w-4 h-px bg-primary-foreground ml-auto" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden relative border-t border-gold/20 bg-primary/95 backdrop-blur-md">
          <nav className="container-luxe py-6 flex flex-col gap-5 text-primary-foreground">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-['Montserrat'] text-xs tracking-[0.22em] uppercase font-medium"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+919673185571" className="mt-2 inline-flex justify-center px-5 py-3 font-['Montserrat'] text-xs tracking-[0.22em] uppercase font-medium border border-gold text-primary-foreground">
              Book Now · +91 96 7318 5571
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="container-luxe py-20 grid md:grid-cols-3 gap-12">
        <div>
          <div className="font-['Playfair_Display'] text-2xl font-medium">Peacock's Crest</div>
          <div className="font-['Montserrat'] text-[10px] tracking-[0.32em] text-gold uppercase font-medium mt-1">Resort · Satara</div>
          <p className="mt-6 font-['Montserrat'] text-sm text-primary-foreground/70 leading-relaxed max-w-xs font-normal">
            A serene escape near Kanher Dam, where nature, comfort and timeless hospitality meet.
          </p>
        </div>
        <div>
          <div className="eyebrow text-gold">Visit</div>
          <p className="mt-4 font-['Montserrat'] text-sm text-primary-foreground/80 leading-relaxed font-normal">
            Near Kanher Dam,<br />Satara–Mahabaleshwar Road,<br />Satara, Maharashtra
          </p>
        </div>
        <div>
          <div className="eyebrow text-gold">Reservations</div>
          <a href="tel:+919673185571" className="mt-4 block font-['Playfair_Display'] text-xl font-medium">+91 96 7318 5571</a>
          <a href="https://wa.me/919673185571" className="mt-3 inline-block font-['Montserrat'] text-xs tracking-[0.22em] uppercase font-medium text-gold hover:underline">WhatsApp Us →</a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-luxe py-6 font-['Montserrat'] text-[11px] tracking-[0.2em] uppercase text-primary-foreground/50 flex flex-col md:flex-row justify-between gap-3 font-medium">
          <span>© {new Date().getFullYear()} Peacock's Crest Resort</span>
          <span>Crafted with care · Satara, India</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  position = "object-center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  position?: string;
}) {
  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
      <img src={image} alt="" className={`absolute inset-0 w-full h-full object-cover ${position} animate-ken-burns`} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative h-full container-luxe flex flex-col items-center justify-center text-center text-[#F8F5F0] animate-rise px-4">
        {eyebrow && (
          <span className="font-['Montserrat'] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold text-[#F8F5F0]/90 mb-4 block">
            {eyebrow}
          </span>
        )}
        <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.15] text-[#F8F5F0] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-['Montserrat'] text-sm md:text-base font-normal text-[#F8F5F0]/80 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-6 w-12 h-px bg-white/60" />
      </div>
    </section>
  );
}
