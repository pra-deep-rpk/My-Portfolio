import FadeIn from '../components/FadeIn';

const STEPS = [
  {
    number: '01',
    name: 'UI/UX Design',
    description: 'Started by understanding how people interact with digital products.',
  },
  {
    number: '02',
    name: 'Web Development',
    description: 'Moved into building responsive and interactive web applications.',
  },
  {
    number: '03',
    name: 'Frontend Engineering',
    description: 'Specialized in React and Angular-based application development.',
  },
  {
    number: '04',
    name: 'Full-Stack Engineering',
    description: 'Expanded into Node.js, APIs, MySQL and ORM-based backend development.',
  },
  {
    number: '05',
    name: 'Generative AI',
    description: 'Started exploring LLM-powered applications and intelligent workflows.',
  },
  {
    number: '06',
    name: 'AI Engineering',
    description: 'Now building RAG systems, LLM orchestration pipelines and agentic AI architectures.',
  },
];

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.6rem, 10vw, 130px)' }}
        >
          8 Years.
          <br />
          One Continuous Evolution.
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-8 sm:gap-y-10">
        {STEPS.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.08}>
            <div
              className="flex items-start gap-5 sm:gap-6 py-5 sm:py-6"
              style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
            >
              <span
                className="hero-heading font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(2rem, 5vw, 56px)' }}
              >
                {step.number}
              </span>
              <div className="pt-1 flex flex-col gap-1.5">
                <h3
                  className="font-medium uppercase"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
                >
                  {step.name}
                </h3>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
