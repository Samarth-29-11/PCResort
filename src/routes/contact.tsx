import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site-chrome";
import gateway from "@/assets/gateway.webp.asset.json";
import heroPic from "@/assets/pic_145532.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Peacock's Crest Resort" },
      { name: "description", content: "Reach Peacock's Crest Resort. Call, WhatsApp or send an enquiry." },
      { property: "og:title", content: "Contact · Peacock's Crest" },
      { property: "og:description", content: "Reach us by phone, WhatsApp or enquiry form." },
      { property: "og:image", content: gateway.url },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero eyebrow="Get In Touch" title="Contact Us" subtitle="Begin your journey to the crest." image="/resort-grounds.jpg" />

      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="eyebrow"><span className="gold-line mr-3" />Enquire</div>
            <h2 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#2B2B2B]">Send us a note.</h2>
            <p className="mt-4 font-['Montserrat'] text-muted-foreground font-normal">
              Share a few details and our team will respond within a few hours.
            </p>

            {sent ? (
              <div className="mt-10 border border-gold/40 bg-secondary p-8">
                <div className="font-['Playfair_Display'] text-2xl font-medium">Thank you.</div>
                <p className="mt-3 font-['Montserrat'] text-muted-foreground font-normal">Your enquiry has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-10 grid sm:grid-cols-2 gap-6"
              >
                {[
                  { n: "name", l: "Full Name", t: "text" },
                  { n: "email", l: "Email", t: "email" },
                  { n: "phone", l: "Phone", t: "tel" },
                  { n: "date", l: "Preferred Date", t: "date" },
                ].map((f) => (
                  <label key={f.n} className="block">
                    <span className="font-['Montserrat'] text-[10px] tracking-[0.35em] uppercase font-medium text-muted-foreground">{f.l}</span>
                    <input required type={f.t} name={f.n} maxLength={120} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-['Montserrat'] text-foreground font-normal" />
                  </label>
                ))}
                <label className="block sm:col-span-2">
                  <span className="font-['Montserrat'] text-[10px] tracking-[0.35em] uppercase font-medium text-muted-foreground">Message</span>
                  <textarea required name="message" maxLength={1000} rows={4} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-['Montserrat'] text-foreground font-normal resize-none" />
                </label>
                <button type="submit" className="sm:col-span-2 justify-self-start mt-4 px-9 py-4 bg-primary text-primary-foreground font-['Montserrat'] font-medium tracking-wide uppercase text-xs hover:bg-forest-deep transition-colors">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <aside className="lg:col-span-5 space-y-10">
            <div>
              <div className="eyebrow">Visit</div>
              <p className="mt-4 font-['Playfair_Display'] text-2xl font-medium leading-snug">
                Near Kanher Dam,<br />Satara–Mahabaleshwar Road,<br />Satara, Maharashtra
              </p>
            </div>
            <div>
              <div className="eyebrow">Reservations</div>
              <a href="tel:+919673185571" className="mt-4 block font-['Playfair_Display'] text-3xl font-medium text-gold">+91 96 7318 5571</a>
              <a href="https://wa.me/919673185571" className="mt-3 inline-flex items-center gap-2 px-6 py-3 border border-gold font-['Montserrat'] text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold hover:text-primary transition-colors">
                WhatsApp Us
              </a>
            </div>
            <div>
              <div className="eyebrow">Hours</div>
              <p className="mt-4 font-['Montserrat'] text-muted-foreground font-normal">Reception open 24 × 7</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe">
          <div className="aspect-[16/7] overflow-hidden border border-border">
            <iframe
              title="Peacock's Crest Resort Map"
              src="https://www.google.com/maps?q=Kanher+Dam,+Satara,+Maharashtra&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
