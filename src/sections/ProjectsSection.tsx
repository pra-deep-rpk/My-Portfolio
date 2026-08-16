import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ProjectButton from '../components/ProjectButton';

interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string;
  href: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Plateron — Restaurant Dashboard',
    category: 'Case Study · Web App UI/UX',
    description:
      'A restaurant management dashboard unifying orders, menus, revenue and customer analytics into one simple, real-time view.',
    tags: 'UI/UX · Dashboard Design · Web App · Restaurant Tech',
    href: 'https://www.behance.net/gallery/143933313/Plateron-Restaurant-Dashboard/modules/813133073',
    image: '/images/projects/plateron.jpg',
  },
  {
    number: '02',
    name: 'Hapyyworkin',
    category: 'Case Study · UI/UX',
    description: 'A digital product case study — full details on Behance.',
    tags: 'UI/UX · Product Design',
    href: 'https://www.behance.net/gallery/142923031/Hapyyworkin',
    image: '/images/projects/happyworkin.jpg',
  },
  {
    number: '03',
    name: 'Reporting Tool',
    category: 'Case Study · Web App UI/UX',
    description:
      'A contact center analytics dashboard turning call data into real-time insight — call volume trends, agent performance and call distribution reporting.',
    tags: 'UI/UX · Analytics Dashboard · Data Visualization · Enterprise',
    href: 'https://www.behance.net/gallery/200417231/Reporting-Tool',
    image: '/images/projects/reporting-tool.jpg',
  },
  {
    number: '04',
    name: 'Insurance Website',
    category: 'Case Study · Web Platform UI/UX',
    description:
      'A digital insurance platform for car, bike, travel and health plans — quote generation, renewals and claims made simple end-to-end.',
    tags: 'UI/UX · Insurance Tech · Web Platform · Conversion Design',
    href: 'https://www.behance.net/gallery/200418105/Insurance-Website/modules/1136150287',
    image: '/images/projects/insurance-website.jpg',
  },
];

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 h-[85vh]">
      <motion.div
          className="relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
          style={{
            scale,
            top: `${index * 28}px`,
            transformOrigin: 'top center',
            backgroundColor: '#0C0C0C',
          }}
        >
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 px-2 sm:px-4 pb-5 sm:pb-6 md:pb-8">
            <div className="flex items-start gap-4 sm:gap-6 md:gap-10">
              <span
                className="hero-heading font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>
              <div className="pt-1 sm:pt-2 md:pt-3 flex flex-col gap-1.5 sm:gap-2">
                <p
                  className="uppercase tracking-widest text-[0.65rem] sm:text-xs"
                  style={{ color: '#D7E2EA', opacity: 0.6 }}
                >
                  {project.category}
                </p>
                <h3
                  className="font-medium uppercase"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-xl"
                  style={{
                    color: '#D7E2EA',
                    opacity: 0.6,
                    fontSize: 'clamp(0.8rem, 1.3vw, 1.05rem)',
                  }}
                >
                  {project.description}
                </p>
                <p
                  className="uppercase tracking-widest text-[0.6rem] sm:text-[0.7rem]"
                  style={{ color: '#D7E2EA', opacity: 0.4 }}
                >
                  {project.tags}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 px-1 pb-1">
              <ProjectButton href={project.href} label="View Case Study" />
            </div>
          </div>

          {/* Visual — real case study cover */}
          <img
            src={project.image}
            alt={`${project.name} case study cover`}
            loading="lazy"
            className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: 'clamp(160px, 20vw, 280px)' }}
          />
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Selected Work
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative max-w-7xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
