import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ShortIntroSection from './sections/ShortIntroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ServicesSection from './sections/ServicesSection';
import AIEngineeringSection from './sections/AIEngineeringSection';
import MarqueeSection from './sections/MarqueeSection';
import ProjectsSection from './sections/ProjectsSection';
import JourneySection from './sections/JourneySection';
import PersonalStatementSection from './sections/PersonalStatementSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  return (
    <div style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
      </div>
      <ShortIntroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <AIEngineeringSection />
      <MarqueeSection />
      <ProjectsSection />
      <JourneySection />
      <PersonalStatementSection />
      <ContactSection />
      <FooterSection />
      <ScrollToTopButton />
    </div>
  );
}
