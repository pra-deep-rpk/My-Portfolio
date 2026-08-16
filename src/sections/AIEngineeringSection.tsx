import FadeIn from '../components/FadeIn';

const AI_ITEMS = [
  {
    number: '01',
    name: 'Hybrid RAG',
    description:
      'Building retrieval systems that combine multiple retrieval strategies to improve the relevance and reliability of information provided to LLMs.',
    image: '/images/ai/ragpro.jpg',
    caption: 'RAGPro — intelligent answers from your data, in real time',
  },
  {
    number: '02',
    name: 'LLM Orchestration',
    description:
      'Designing workflows that coordinate LLM calls, context, tools and application logic to create structured AI pipelines.',
    image: '/images/ai/melofy.jpg',
    caption: 'Melofy — prompt-to-song AI generation workflow',
  },
  {
    number: '03',
    name: 'Research Recommendation System',
    description:
      'Exploring intelligent systems that retrieve, analyze and synthesize information to generate meaningful research recommendations.',
    image: '/images/ai/song-mastery.jpg',
    caption: 'Song Mastery — discovery & recommendation platform',
  },
  {
    number: '04',
    name: 'Agentic AI',
    description:
      'Building multi-agent architectures where specialized AI agents collaborate to solve complex tasks.',
    image: '/images/ai/avantor.jpg',
    caption: 'Avantor VWR — conversational AI assistant',
  },
];

export default function AIEngineeringSection() {
  return (
    <section
      id="ai-engineering"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.6rem, 10vw, 130px)' }}
        >
          AI Engineering
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p
          className="uppercase tracking-widest text-xs sm:text-sm text-center mt-4 mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#D7E2EA', opacity: 0.6 }}
        >
          Exploring the Next Layer of Software Engineering
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {AI_ITEMS.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1}>
            <div
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(215, 226, 234, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(215, 226, 234, 0.15)' : undefined,
              }}
            >
              <div className="flex items-start gap-6 sm:gap-10 md:gap-14">
                <span
                  className="hero-heading font-black leading-none flex-shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {item.number}
                </span>
                <div className="pt-2 sm:pt-3 md:pt-4 flex flex-col gap-2 sm:gap-3">
                  <h3
                    className="font-medium uppercase"
                    style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl"
                    style={{
                      color: '#D7E2EA',
                      opacity: 0.6,
                      fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              {item.image && (
                <div className="flex-shrink-0 w-full md:w-64 lg:w-72 pl-[4.5rem] md:pl-0">
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-2xl"
                  />
                  <p
                    className="uppercase tracking-widest text-[0.6rem] mt-2"
                    style={{ color: '#D7E2EA', opacity: 0.4 }}
                  >
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
