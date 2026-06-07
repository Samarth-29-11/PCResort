import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { PageShell } from "@/components/site-chrome";
import gateway from "@/assets/gateway.webp.asset.json";
import room from "@/assets/room.webp.asset.json";
import dining from "@/assets/dining.webp.asset.json";
import wedding from "@/assets/wedding.webp.asset.json";
import lakeside from "@/assets/lakeside.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Peacock's Crest Resort, Satara — A Gateway to Peace" },
      { name: "description", content: "Welcome to Peacock's Crest Resort. A peaceful luxury getaway near Kanher Dam, Satara." },
      { property: "og:title", content: "Peacock's Crest Resort, Satara" },
      { property: "og:description", content: "A peaceful luxury getaway near Kanher Dam, Satara." },
      { property: "og:image", content: gateway.url },
    ],
  }),
  component: Home,
});

const features = [
  { label: "Rooms & Cottages", to: "/rooms", img: "/card-rooms.jpg" },
  { label: "Restaurant & Dining", to: "/dining", img: "/card-dining.jpg" },
  { label: "Weddings & Events", to: "/events", img: "/card-wedding.jpg" },
  { label: "Scenic Views", to: "/gallery", img: "/card-scenic.jpg" },
] as const;

function Home() {
  const vRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (vRef.current) {
      vRef.current.playbackRate = 0.45;
    }
  }, []);

  return (
    <PageShell>
      {/* ─── CINEMATIC HERO ─── */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        {/* Background video — full-screen cinematic */}
        <video
          ref={vRef}
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster={gateway.url}
          className="absolute inset-0 w-full h-full object-cover object-center animate-fade-in"
          style={{ willChange: "transform" }}
        />

        {/* Dark overlay for text readability (30-40%) */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero content */}
        <div className="relative h-full container-luxe flex flex-col items-center justify-center text-center">
          {/* Main heading — cinematic Playfair Display */}
          <h1
            className="mt-0 font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] max-w-5xl text-[#F8F5F0] animate-rise-slow"
            style={{ animationDelay: "0.15s" }}
          >
            Welcome to
            <br />
            <span className="text-gold whitespace-normal md:whitespace-nowrap">Peacock's Crest Resort</span>
            <span className="text-white">, Satara</span>
          </h1>

          {/* Subtitle — Montserrat body text */}
          <p
            className="mt-10 max-w-2xl font-['Montserrat'] text-base md:text-lg font-normal leading-relaxed text-[#F8F5F0]/80 animate-rise-slow"
            style={{ animationDelay: "0.3s" }}
          >
            Experience a peaceful getaway near Kanher Dam with comfortable stays,
            delightful dining, beautiful celebrations and scenic natural surroundings.
          </p>

          {/* CTA buttons — Montserrat uppercase */}
          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 animate-rise-slow"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="tel:+919673185571"
              className="px-10 py-4 bg-gold text-primary font-['Montserrat'] font-medium tracking-wide uppercase text-xs hover:bg-gold-soft transition-colors"
            >
              Book Your Stay
            </a>
            <Link
              to="/contact"
              className="px-10 py-4 border border-[#F8F5F0]/50 text-[#F8F5F0] font-['Montserrat'] font-medium tracking-wide uppercase text-xs hover:bg-[#F8F5F0] hover:text-primary transition-colors"
            >
              Enquire
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 animate-scroll-pulse flex flex-col items-center gap-2">
            <div className="w-px h-8 bg-[#F8F5F0]/30" />
            <span className="font-['Montserrat'] text-[10px] tracking-[0.4em] uppercase text-[#F8F5F0]/50">
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* ─── INTRO SECTION ─── */}
      <section className="py-28">
        <div className="container-luxe grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="eyebrow"><span className="gold-line mr-3" />Est. Satara</div>
            <h2 className="mt-6 font-['Playfair_Display'] text-4xl md:text-5xl font-medium leading-tight tracking-tight text-[#2B2B2B]">
              Where stillness becomes the rarest luxury.
            </h2>
          </div>
          <div className="md:col-span-7 md:pl-10 md:border-l border-border">
            <p className="font-['Montserrat'] text-lg leading-relaxed font-normal text-muted-foreground">
              Tucked beside the calm waters of Kanher Dam, Peacock's Crest is an intimate retreat where
              quiet mornings, lush lawns and warm Maharashtrian hospitality come together. Stay a night,
              celebrate a milestone, or simply dine under an open sky.
            </p>
            <Link to="/about" className="mt-8 inline-block font-['Montserrat'] text-xs tracking-[0.3em] uppercase font-medium text-gold border-b border-gold/40 pb-1 hover:text-foreground transition-colors">
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section className="pb-32">
        <div className="container-luxe">
          <div className="text-center mb-16">
            <div className="eyebrow">The Experience</div>
            <h2 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-tight text-[#2B2B2B]">
              A retreat with many chapters
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Link key={f.to} to={f.to} className="group relative aspect-[3/4] overflow-hidden">
                <img src={f.img} alt={f.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <div className="font-['Playfair_Display'] text-2xl font-medium">{f.label}</div>
                  <div className="mt-2 font-['Montserrat'] text-[10px] tracking-[0.3em] uppercase font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">Discover →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section className="relative py-32 overflow-hidden">
        <img src={lakeside.url} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative container-luxe text-center text-primary-foreground">
          <div className="eyebrow text-gold">Reserve</div>
          <h2 className="mt-5 font-['Playfair_Display'] text-4xl md:text-6xl font-medium tracking-tight max-w-3xl mx-auto leading-tight text-[#F8F5F0]">
            Your gateway to peace awaits.
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919673185571" className="px-9 py-4 bg-gold text-primary font-['Montserrat'] font-medium tracking-wide uppercase text-xs hover:bg-gold-soft transition-colors">
              Call +91 96 7318 5571
            </a>
            <a href="https://wa.me/919673185571" className="px-9 py-4 border border-primary-foreground/60 font-['Montserrat'] font-medium tracking-wide uppercase text-xs text-[#F8F5F0] hover:bg-[#F8F5F0] hover:text-primary transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
