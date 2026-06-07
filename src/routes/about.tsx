import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site-chrome";
import gateway from "@/assets/gateway.webp.asset.json";
import lawn from "@/assets/lawn.webp.asset.json";
import heroPic from "@/assets/pic_144944.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Peacock's Crest Resort" },
      { name: "description", content: "The story of Peacock's Crest Resort — a serene escape near Kanher Dam." },
      { property: "og:title", content: "About · Peacock's Crest Resort" },
      { property: "og:description", content: "A serene escape near Kanher Dam." },
      { property: "og:image", content: gateway.url },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <PageHero eyebrow="Peacock's Crest Resort" title="Our Story" subtitle="A quiet pursuit of beauty in the Satara hills." image="/our-story-hero.jpg" />
      <section className="py-28">
        <div className="container-luxe grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <img src="/resort-grounds.jpg" alt="Resort grounds" className="w-full aspect-[3/4] object-cover" />
          </div>
          <div className="lg:col-span-7 space-y-8 font-['Montserrat'] text-lg leading-relaxed font-normal text-foreground/85">
            <div className="eyebrow"><span className="gold-line mr-3" />Welcome</div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-tight text-[#2B2B2B] leading-[1.15]">
              Where the noise of the city softens into birdsong.
            </h2>
            <p>
              Peacock's Crest Resort began with a simple wish — to offer a place where families,
              couples and travellers could step away from the rush of everyday life and rediscover
              the calm of nature. Set near the gentle waters of Kanher Dam on the
              Satara–Mahabaleshwar road, our grounds are framed by lush palms, open lawns and
              the soft hills of the Sahyadris.
            </p>
            <p>
              From sunlit mornings by the pool to candle-lit dinners under the open sky, every
              detail at Peacock's Crest is shaped around comfort, warmth and a touch of
              quiet luxury. Our rooms and cottages invite rest, our kitchens celebrate seasonal
              flavours, and our event lawns have become a beloved canvas for unforgettable weddings.
            </p>
            <p>
              Whether you arrive for a weekend retreat, a romantic escape or a grand celebration,
              we welcome you as we would welcome a dear guest into our home —
              with grace, attention and a smile that lingers long after you leave.
            </p>
            <div className="pt-6 border-t border-border grid grid-cols-3 gap-6">
              {[
                { n: "12+", l: "Acres of greens" },
                { n: "100%", l: "Lakeside calm" },
                { n: "5★", l: "Hospitality" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-['Playfair_Display'] text-4xl font-medium text-gold">{s.n}</div>
                  <div className="mt-2 font-['Montserrat'] text-[10px] tracking-[0.35em] uppercase font-medium text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
