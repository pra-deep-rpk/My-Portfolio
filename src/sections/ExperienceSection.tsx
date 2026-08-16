import FadeIn from '../components/FadeIn';

interface Job {
  role: string;
  company: string;
  type?: string;
  dates: string;
  duration: string;
  location: string;
  mode?: string;
  description?: string;
  skills?: string;
}

const JOBS: Job[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Simelabs — Digital, AI/ML, Automation, Robotics, Gen AI',
    type: 'Full-time',
    dates: 'Aug 2025 – Present',
    duration: '1 yr 1 mo',
    location: 'Coimbatore, Tamil Nadu, India',
    mode: 'Hybrid',
    skills: 'Angular · Node.js · +13 skills',
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Axheleon',
    dates: 'Sep 2024 – Aug 2025',
    duration: '1 yr',
    location: 'Coimbatore, Tamil Nadu, India',
    mode: 'On-site',
    skills: 'Adobe XD · Angular · +17 skills',
  },
  {
    role: 'UX Designer',
    company: 'Servion Global Solutions',
    type: 'Full-time',
    dates: 'May 2022 – Jul 2024',
    duration: '2 yrs 3 mos',
    location: 'Chennai, Tamil Nadu, India',
    description:
      'Responsible for the design and implementation of all the experiences a user has when interacting with a digital tool.',
    skills: 'Angular · Angular Material · +8 skills',
  },
  {
    role: 'Senior UI/UX Designer',
    company: 'Apptomate',
    type: 'Full-time',
    dates: 'Apr 2021 – Apr 2022',
    duration: '1 yr 1 mo',
    location: 'Chennai, Tamil Nadu, India',
    skills: 'Angular · Angular Material · +12 skills',
  },
  {
    role: 'Web Designer Developer',
    company: 'CapQ Global Services',
    type: 'Full-time',
    dates: 'Aug 2019 – Mar 2021',
    duration: '1 yr 8 mos',
    location: 'India',
    skills: 'JavaScript',
  },
  {
    role: 'UI/UX Designer',
    company: 'Trendsetterz Versatile Solutions',
    type: 'Full-time',
    dates: 'Jul 2018 – May 2019',
    duration: '11 mos',
    location: 'Tiruchirappalli, Tamil Nadu, India',
    mode: 'On-site',
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.6rem, 10vw, 130px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <div className="text-center mb-16 sm:mb-20 md:mb-24 mt-4 sm:mt-6">
          <p
            className="uppercase tracking-widest text-xs sm:text-sm"
            style={{ color: '#D7E2EA', opacity: 0.6 }}
          >
            8 Years of Engineering Experience
          </p>
          <p
            className="uppercase tracking-widest text-[0.65rem] sm:text-xs mt-2"
            style={{ color: '#D7E2EA', opacity: 0.4 }}
          >
            UI/UX &rarr; Frontend &rarr; Full Stack &rarr; AI Engineering
          </p>
        </div>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {JOBS.map((job, i) => (
          <FadeIn key={job.company} delay={i * 0.08}>
            <div
              className="py-6 sm:py-7 md:py-8"
              style={{
                borderTop: i === 0 ? '1px solid rgba(215, 226, 234, 0.15)' : undefined,
                borderBottom: '1px solid rgba(215, 226, 234, 0.15)',
              }}
            >
              <p
                className="font-light uppercase tracking-widest text-xs sm:text-sm"
                style={{ color: '#D7E2EA', opacity: 0.6 }}
              >
                {job.role}
                {job.type ? ` · ${job.type}` : ''}
              </p>
              <h3
                className="font-medium uppercase mt-2"
                style={{ color: '#D7E2EA', fontSize: 'clamp(1.15rem, 2.6vw, 2rem)' }}
              >
                {job.company}
              </h3>
              <p
                className="font-light mt-2"
                style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(0.75rem, 1.3vw, 1rem)' }}
              >
                {job.dates} &middot; {job.duration}
                <br />
                {job.location}
                {job.mode ? ` · ${job.mode}` : ''}
              </p>
              {job.description && (
                <p
                  className="font-light leading-relaxed max-w-2xl mt-3"
                  style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
                >
                  {job.description}
                </p>
              )}
              {job.skills && (
                <p
                  className="uppercase tracking-widest mt-3 text-[0.6rem] sm:text-[0.7rem]"
                  style={{ color: '#D7E2EA', opacity: 0.4 }}
                >
                  {job.skills}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
