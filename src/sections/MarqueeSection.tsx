import { useEffect, useRef } from 'react';

// Case-study covers from Behance — see docs/ASSETS.md.
const MARQUEE_IMAGES = [
  '/images/marquee/plateron.jpg',
  '/images/marquee/reporting-tool.jpg',
  '/images/marquee/insurance-website.jpg',
  '/images/marquee/kotak-prime.jpg',
  '/images/marquee/melofy.jpg',
  '/images/marquee/song-mastery.jpg',
];

const ROW_1 = MARQUEE_IMAGES.slice(0, 3);
const ROW_2 = MARQUEE_IMAGES.slice(3);

function MarqueeRow({
  images,
  rowRef,
}: {
  images: string[];
  rowRef: React.RefObject<HTMLDivElement>;
}) {
  // Tripled for seamless scrolling coverage in both directions
  const tripled = [...images, ...images, ...images];
  return (
    <div className="w-full flex justify-center">
      <div ref={rowRef} className="flex gap-3" style={{ willChange: 'transform' }}>
        {tripled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section || !row1Ref.current || !row2Ref.current) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      // Row 1 moves right on scroll, row 2 moves left
      row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-10 flex flex-col gap-3"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14"
        style={{ fontSize: 'clamp(2rem, 6.5vw, 84px)' }}
      >
        Technical Stack
      </h2>
      <MarqueeRow images={ROW_1} rowRef={row1Ref} />
      <MarqueeRow images={ROW_2} rowRef={row2Ref} />
    </section>
  );
}
