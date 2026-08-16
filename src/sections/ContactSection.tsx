import { Github, Linkedin, ExternalLink } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const EMAIL = 'pradeeprpk6633@gmail.com';
const GITHUB_URL = 'https://github.com/pra-deep-rpk/My-Portfolio.git';
const LINKEDIN_URL = 'https://www.linkedin.com/in/pradeep-kumar-514850109';
const BEHANCE_URL = 'https://www.behance.net/pradeepkumar234';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center text-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8.5vw, 120px)' }}
        >
          Have an Idea Worth Building?
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="font-light uppercase tracking-wide leading-snug max-w-md sm:max-w-lg mt-8 sm:mt-10"
          style={{ color: '#D7E2EA', opacity: 0.8, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
        >
          Whether it&rsquo;s a product, an AI system, or simply an interesting technical problem,
          I&rsquo;m always interested in exploring what can be built next.
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <p
          className="hero-heading font-black uppercase tracking-tight mt-10 sm:mt-12"
          style={{ fontSize: 'clamp(1.1rem, 3vw, 2rem)' }}
        >
          Let&rsquo;s Build Something Intelligent.
        </p>
      </FadeIn>

      <FadeIn delay={0.4} y={20} className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
        <ContactButton label="Email Me" href={`mailto:${EMAIL}`} />
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200"
        >
          <Github size={18} />
          GitHub
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a
          href={BEHANCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200"
        >
          <ExternalLink size={18} />
          Behance
        </a>
      </FadeIn>
    </section>
  );
}
