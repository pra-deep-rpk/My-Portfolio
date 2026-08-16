import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'UI/UX Engineering',
    description:
      'Designing intuitive interfaces and translating user experience concepts into production-ready applications.',
  },
  {
    number: '02',
    name: 'Frontend Engineering',
    description:
      'Building scalable and maintainable applications using React and Angular with modern component-based architectures.',
  },
  {
    number: '03',
    name: 'Full-Stack Development',
    description:
      'Developing end-to-end applications using frontend technologies, Node.js, APIs, MySQL, ORM and structured data architectures.',
  },
  {
    number: '04',
    name: 'Generative AI',
    description:
      'Designing LLM-powered applications that combine retrieval, reasoning, orchestration and intelligent workflows.',
  },
  {
    number: '05',
    name: 'AI Agents',
    description:
      'Building multi-agent systems capable of coordinating specialized agents and interacting with external tools.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="expertise"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          What I Build
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="pt-2 sm:pt-3 md:pt-4 flex flex-col gap-2 sm:gap-3">
                <h3
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
