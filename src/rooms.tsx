import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site-chrome";
import room from "@/assets/room.webp.asset.json";
import lakeside from "@/assets/lakeside.webp.asset.json";
import gateway from "@/assets/gateway.webp.asset.json";
import heroPic from "@/assets/pic_145032.jpg.asset.json";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Cottages — Peacock's Crest Resort" },
      { name: "description", content: "Elegant rooms and lakeside cottages designed for rest, privacy and natural beauty." },
      { property: "og:title", content: "Rooms & Cottages · Peacock's Crest" },
      { property: "og:description", content: "Elegant rooms and lakeside cottages at Peacock's Crest Resort." },
      { property: "og:image", content: room.url },
    ],
  }),
  component: Rooms,
});

const rooms = [
  {
    name: "Deluxe Garden Room",
    desc: "A spacious room opening to lush greens, dressed in warm tones and modern comforts — the perfect retreat after a day of exploration.",
    img: "/card-rooms.jpg",
    tag: "From a quiet morning view",
  },
  {
    name: "Lakeside Cottage",
    desc: "Wake to the sound of water. Our signature cottages sit beside the dam, blending rustic charm with private balconies and serene horizons.",
    img: "/resort-grounds.jpg",
    tag: "Signature stay",
  },
  {
    name: "Heritage Suite",
    desc: "Earth-toned interiors, handcrafted finishes and generous spaces designed for families and longer stays at the heart of the resort.",
    img: "/our-story-hero.jpg",
    tag: "For families & friends",
  },
];

function Rooms() {
  return (
    <PageShell>
      <PageHero eyebrow="Stay Amidst Nature" title="Rooms & Cottages" subtitle="Restful interiors. Open horizons." image="/card-rooms.jpg" />
      <section className="py-24">
        <div className="container-luxe space-y-24">
          {rooms.map((r, i) => (
            <article key={r.name} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={r.img} alt={r.name} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]" />
              </div>
              <div className="lg:px-8">
                <div className="eyebrow">{r.tag}</div>
                <h2 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#2B2B2B]">{r.name}</h2>
                <div className="mt-6 gold-line" />
                <p className="mt-6 font-['Montserrat'] text-lg leading-relaxed font-normal text-muted-foreground">{r.desc}</p>
                <ul className="mt-8 grid grid-cols-2 gap-3 font-['Montserrat'] text-sm text-foreground/80 font-normal">
                  {["King bed", "Garden view", "Private bath", "Wi-Fi", "Daily housekeeping", "24×7 service"].map((x) => (
                    <li key={x} className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full" />{x}</li>
                  ))}
                </ul>
                <a href="tel:+919673185571" className="mt-10 inline-block px-8 py-3.5 border border-gold font-['Montserrat'] text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold hover:text-primary transition-colors">
                  Reserve
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
