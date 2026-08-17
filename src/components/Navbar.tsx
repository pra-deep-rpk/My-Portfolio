import FadeIn from './FadeIn';
import MobileNav from './MobileNav';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <FadeIn
      as="nav"
      delay={0}
      y={-20}
      scrollTriggered={false}
      className="sticky top-0 z-30 backdrop-blur-md"
      style={{ backgroundColor: 'rgba(12, 12, 12, 0.55)' }}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4 md:py-5">
        <div className="hidden md:flex justify-between items-center w-full">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              style={{ color: '#D7E2EA' }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <MobileNav links={NAV_LINKS} className="flex md:hidden" />
      </div>
    </FadeIn>
  );
}
