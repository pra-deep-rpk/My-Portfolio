import type { CSSProperties } from 'react';
import SkillOrbit from '../components/SkillOrbit';
import ContactButton from '../components/ContactButton';
import ProjectButton from '../components/ProjectButton';

const PORTRAIT_URL = '/images/hero/portrait.png';

// CSS custom properties consumed by the `.hero-reveal` keyframe (see index.css).
const revealStyle = (delay: number, y: number): CSSProperties =>
  ({ '--reveal-delay': `${delay}s`, '--reveal-y': `${y}px` }) as CSSProperties;

export default function HeroSection() {
  return (
    <section
      className="relative flex-1 flex flex-col"
      style={{ overflowX: 'clip', backgroundColor: '#0C0C0C' }}
    >
      {/* Hero heading */}
      <div className="overflow-hidden">
        <div className="hero-reveal" style={revealStyle(0.15, 40)}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10.91vw] sm:text-[11.69vw] md:text-[12.47vw] lg:text-[13.64vw] mt-14 sm:mt-16 md:mt-20">
            Hi, i&apos;m Pradeep
          </h1>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto relative z-20 flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <div className="hero-reveal" style={revealStyle(0.35, 20)}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[240px] md:max-w-[300px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Senior Software Engineer building scalable digital experiences and intelligent AI systems.
          </p>
        </div>
        <div
          className="hero-reveal flex flex-col items-end gap-3 sm:gap-4"
          style={revealStyle(0.5, 20)}
        >
          <ContactButton label="Let&rsquo;s Connect" href="#contact" />
          <ProjectButton label="Explore My Work" href="#projects" />
        </div>
      </div>

      {/* Hero portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[40%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[340px] sm:w-[380px] md:w-[520px] lg:w-[720px] xl:w-[820px]">
        <div className="hero-reveal" style={revealStyle(0.6, 30)}>
          <SkillOrbit>
            <img
              src={PORTRAIT_URL}
              alt="Portrait of Pradeep"
              className="w-full h-auto select-none pointer-events-none grayscale"
              draggable={false}
            />
          </SkillOrbit>
        </div>
      </div>

      {/* Bottom gradient for depth */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
        style={{
          height: '38%',
          background:
            'linear-gradient(to bottom, rgba(12,12,12,0) 0%, rgba(12,12,12,0.75) 65%, #0C0C0C 100%)',
        }}
      />
    </section>
  );
}
