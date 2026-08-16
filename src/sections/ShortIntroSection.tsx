import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const INTRO_PARAGRAPHS = [
  'I started my career with UI/UX design, where I developed a strong foundation in creating intuitive digital experiences. Over the years, I evolved into web application development and full-stack engineering, working extensively with React, Node.js, Angular, MySQL, ORM-based architectures, and modern web technologies.',
  'Today, I’m expanding that engineering foundation into Generative AI, building practical systems that combine software engineering with intelligent AI workflows.',
];

export default function ShortIntroSection() {
  return (
    <section
      className="relative flex flex-col items-center gap-10 sm:gap-12 px-5 sm:px-8 md:px-10 py-20 sm:py-24"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2rem, 6.5vw, 84px)' }}
        >
          From Interfaces to Intelligence.
        </h2>
      </FadeIn>

      <div className="flex flex-col items-center gap-5 sm:gap-6">
        {INTRO_PARAGRAPHS.map((paragraph, i) => (
          <AnimatedText
            key={i}
            text={paragraph}
            className="font-medium text-center leading-relaxed max-w-[620px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        ))}
      </div>
    </section>
  );
}
