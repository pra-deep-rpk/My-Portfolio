import FadeIn from '../components/FadeIn';

export default function PersonalStatementSection() {
  return (
    <section
      className="relative flex flex-col items-center text-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-36"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 7vw, 100px)' }}
        >
          I Don&rsquo;t Just Build Interfaces.
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 7vw, 100px)' }}
        >
          I Build Systems.
        </h2>
      </FadeIn>

      <FadeIn delay={0.25} y={20}>
        <div
          className="font-light leading-relaxed max-w-xl mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4"
          style={{ color: '#D7E2EA', opacity: 0.75, fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)' }}
        >
          <p>My engineering journey started with understanding how users interact with software.</p>
          <p>It evolved into understanding how software is built.</p>
          <p>Now, I&rsquo;m exploring how software can reason, retrieve, collaborate and act.</p>
          <p style={{ opacity: 0.6 }}>
            That evolution — from design &rarr; development &rarr; intelligence — defines the kind of
            engineer I am becoming.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
