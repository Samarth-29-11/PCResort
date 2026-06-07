import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site-chrome";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Peacock's Crest Resort" },
      { name: "description", content: "Step inside Peacock's Crest — rooms, dining, events and scenic views." },
      { property: "og:title", content: "Gallery · Peacock's Crest" },
      { property: "og:description", content: "Rooms, dining, events and scenic views." },
      { property: "og:image", content: "/gallery/gallery-1.jpg" },
    ],
  }),
  component: Gallery,
});

type Item = { src: string; alt: string };

const items: Item[] = [
  { src: "/gallery/gallery-1.jpg", alt: "Lakeside Cottage" },
  { src: "/gallery/gallery-2.jpg", alt: "Gateway to Peace" },
  { src: "/gallery/gallery-3.jpg", alt: "Traditional Statue" },
  { src: "/gallery/gallery-4.jpg", alt: "Cottage House" },
  { src: "/gallery/gallery-5.jpg", alt: "Stress Release Swing" },
  { src: "/gallery/gallery-6.jpg", alt: "Misty Mountain Peak" },
  { src: "/gallery/gallery-7.jpg", alt: "Lap of Nature" },
  { src: "/gallery/gallery-8.jpg", alt: "Ducks on the Lawn" },
];

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard controls for the lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % items.length : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % items.length : null));
  };

  return (
    <PageShell>
      <PageHero eyebrow="Visual Journey" title="Gallery" subtitle="Glimpses of Peacock's Crest." image="/gallery/gallery-1.jpg" />
      
      <section className="py-24 bg-background">
        <div className="container-luxe">
          {/* Multi-column masonry layout ensures images render fully at their natural aspect ratios with no crop */}
          <div className="columns-1 sm:columns-2 gap-6 space-y-6">
            {items.map((it, i) => (
              <div
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="break-inside-avoid relative overflow-hidden group cursor-pointer border border-border/40 bg-secondary/10"
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                {/* Elegant overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-gold/30 transition-all duration-500" />
                
                {/* Micro-interaction zoom indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-primary/70 backdrop-blur-sm p-2.5 rounded-full border border-gold/30">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0d0d]/95 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Navigation */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/5 transition-all p-3 rounded-full border border-white/10 z-50"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center">
            <img
              src={items[lightboxIndex].src}
              alt={items[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain select-none animate-fade-in"
              style={{ animationDuration: "350ms" }}
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Index Counter & Caption */}
            <div className="mt-4 text-center font-['Montserrat'] text-xs tracking-widest text-[#F8F5F0]/70 select-none">
              <span>{lightboxIndex + 1}</span> / <span>{items.length}</span>
            </div>
          </div>

          {/* Right Navigation */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/5 transition-all p-3 rounded-full border border-white/10 z-50"
            onClick={handleNext}
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </PageShell>
  );
}
