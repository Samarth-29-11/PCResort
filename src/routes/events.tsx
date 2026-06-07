import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site-chrome";
import wedding from "@/assets/wedding.webp.asset.json";
import lawn from "@/assets/lawn.webp.asset.json";
import heroPic from "@/assets/pic_145159.jpg.asset.json";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Weddings & Events — Peacock's Crest Resort" },
      { name: "description", content: "A destination wedding venue near Satara — sweeping lawns, grand stages and timeless settings." },
      { property: "og:title", content: "Weddings & Events · Peacock's Crest" },
      { property: "og:description", content: "Destination weddings, family functions and celebrations at Peacock's Crest." },
      { property: "og:image", content: wedding.url },
    ],
  }),
  component: Events,
});

function Events() {
  return (
    <PageShell>
      <PageHero eyebrow="Celebrate in Style" title="Weddings & Celebrations" subtitle="A canvas for once-in-a-lifetime moments." image="/events-hero.png" />
      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <img src="/card-wedding.jpg" alt="Destination wedding" className="w-full aspect-[4/3] object-cover" />
          </div>
          <div className="lg:col-span-5">
            <div className="eyebrow"><span className="gold-line mr-3" />Destination Weddings</div>
            <h2 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#2B2B2B]">
              Where the beauty of nature meets the charm of love.
            </h2>
            <p className="mt-6 font-['Montserrat'] text-lg leading-relaxed font-normal text-muted-foreground">
              From mehendi mornings on the lawns to grand sunset ceremonies, our open spaces
              and elegant pavilions are designed to hold every emotion of your celebration.
              Our team works alongside you to craft a wedding that feels effortlessly yours.
            </p>
            <Link to="/contact" className="mt-8 inline-block px-8 py-3.5 border border-gold font-['Montserrat'] text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold hover:text-primary transition-colors">
              Plan With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-luxe">
          <div className="text-center">
            <div className="eyebrow">Occasions We Host</div>
            <h2 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-tight text-[#2B2B2B]">From intimate to iconic</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { t: "Weddings", d: "Sweeping lawns for grand ceremonies, sangeet nights and reception evenings." },
              { t: "Family Functions", d: "Birthdays, anniversaries and reunions hosted with warmth and personal care." },
              { t: "Corporate Retreats", d: "Off-sites, team gatherings and conferences in a calm, inspiring setting." },
            ].map((x) => (
              <div key={x.t} className="bg-background p-10 border border-border">
                <div className="font-['Playfair_Display'] text-3xl font-medium">{x.t}</div>
                <div className="mt-4 gold-line" />
                <p className="mt-5 font-['Montserrat'] text-muted-foreground leading-relaxed font-normal">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <img src="/resort-grounds.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative container-luxe text-center text-[#F8F5F0]">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-tight max-w-3xl mx-auto">
            Let us help you imagine the day you've always dreamed of.
          </h2>
          <a href="tel:+919673185571" className="mt-10 inline-block px-9 py-4 bg-gold text-primary font-['Montserrat'] font-medium tracking-wide uppercase text-xs hover:bg-gold-soft transition-colors">
            Speak to Our Team
          </a>
        </div>
      </section>
    </PageShell>
  );
}
