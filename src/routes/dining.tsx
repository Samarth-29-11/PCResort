import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site-chrome";
import dining from "@/assets/dining.webp.asset.json";
import lunch from "@/assets/lunch.mp4.asset.json";
import heroPic from "@/assets/pic_145122.jpg.asset.json";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Restaurant & Dining — Peacock's Crest Resort" },
      { name: "description", content: "Open-air fine dining at Peacock's Crest. Seasonal flavours under the stars." },
      { property: "og:title", content: "Dining · Peacock's Crest" },
      { property: "og:description", content: "Open-air fine dining under the stars at Peacock's Crest." },
      { property: "og:image", content: dining.url },
    ],
  }),
  component: Dining,
});

function Dining() {
  return (
    <PageShell>
      <PageHero eyebrow="Lakeside Culinary" title="Restaurant & Dining" subtitle="Local flavors. Lakeside tables." image="/card-dining.jpg" />
      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow"><span className="gold-line mr-3" />The Table</div>
            <h2 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#2B2B2B]">
              An open-air ode to seasonal flavour.
            </h2>
            <p className="mt-6 font-['Montserrat'] text-lg leading-relaxed font-normal text-muted-foreground">
              Long tables dressed in linen, soft lanterns swaying between palms, and the
              aroma of slow-cooked classics drifting through the night air. Our kitchens
              celebrate Maharashtrian heritage alongside continental favourites — crafted
              with produce picked at its prime.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                { t: "Breakfast", d: "07:30 – 10:30" },
                { t: "Lunch", d: "12:30 – 15:00" },
                { t: "High Tea", d: "16:00 – 18:00" },
                { t: "Dinner", d: "19:30 – 22:30" },
              ].map((s) => (
                <div key={s.t} className="border-t border-border pt-4">
                  <div className="font-['Playfair_Display'] text-2xl font-medium">{s.t}</div>
                  <div className="font-['Montserrat'] text-xs tracking-[0.35em] uppercase font-medium text-gold mt-1">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <video
              src="/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/card-dining.jpg"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-luxe text-center">
          <div className="eyebrow">Signature Experiences</div>
          <h2 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-tight text-[#2B2B2B]">Crafted moments at the table</h2>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              { t: "Garden Brunch", d: "Slow Sundays of fresh juices, local breads and seasonal mains, served on the lawns." },
              { t: "Lakeside Dinner", d: "Private candle-lit settings by the water — for anniversaries, proposals and quiet celebrations." },
              { t: "Family Feasts", d: "Long-table thalis and grills for gatherings, hosted under starlight and palm shade." },
            ].map((x) => (
              <div key={x.t} className="text-left">
                <div className="font-['Playfair_Display'] text-2xl font-medium">{x.t}</div>
                <div className="mt-3 gold-line" />
                <p className="mt-4 font-['Montserrat'] text-muted-foreground leading-relaxed font-normal">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
