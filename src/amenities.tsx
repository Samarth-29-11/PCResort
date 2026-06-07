import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site-chrome";
import pool from "@/assets/pool.webp.asset.json";
import heroPic from "@/assets/pic_145310.jpg.asset.json";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Peacock's Crest Resort" },
      { name: "description", content: "Pool, scenic lawns, parking, Wi-Fi and thoughtful comforts at Peacock's Crest." },
      { property: "og:title", content: "Amenities · Peacock's Crest" },
      { property: "og:description", content: "Pool, lawns, parking, Wi-Fi and thoughtful comforts." },
      { property: "og:image", content: pool.url },
    ],
  }),
  component: Amenities,
});

const amenities = [
  { t: "Swimming Pool", d: "An open-air pool framed by gardens — for lazy afternoons and joyful evenings." },
  { t: "Scenic Views", d: "Sahyadri hills, palms and the calm waters of Kanher Dam, all in one frame." },
  { t: "Open Spaces", d: "Acres of manicured lawns, walking paths and shaded retreats throughout the resort." },
  { t: "Recreation", d: "Outdoor games, lakeside walks and quiet corners crafted for unwinding." },
  { t: "High-Speed Wi-Fi", d: "Stay connected across the property whenever you need to." },
  { t: "Ample Parking", d: "Secure, spacious parking for guests and event attendees." },
  { t: "Comfortable Stay", d: "Plush bedding, daily housekeeping and round-the-clock service." },
  { t: "Hospitality", d: "A team that treats every guest as a dear visitor in our home." },
];

function Amenities() {
  return (
    <PageShell>
      <PageHero eyebrow="Discover the Experience" title="Resort Amenities" subtitle="Designed for rest, play and connection." image="/card-scenic.jpg" />
      <section className="py-24">
        <div className="container-luxe">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {amenities.map((a, i) => (
              <div key={a.t} className="bg-background p-10 hover:bg-secondary transition-colors group">
                <div className="font-['Playfair_Display'] text-5xl font-medium text-gold/40 group-hover:text-gold transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-6 font-['Playfair_Display'] text-2xl font-medium">{a.t}</div>
                <div className="mt-3 gold-line" />
                <p className="mt-4 font-['Montserrat'] text-sm text-muted-foreground leading-relaxed font-normal">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
