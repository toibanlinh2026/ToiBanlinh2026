import bgDesktop from '../../back.png';
import bgMobile from '../../back2.png';
import { Navbar } from '../components/Navbar';
import { HeroContent } from '../components/HeroContent';
import { Countdown } from '../components/Countdown';
import { AboutSection } from '../components/AboutSection';
import { RulesSection } from '../components/RulesSection';
import { TimelineSection } from '../components/TimelineSection';
import { PartnerSection } from '../components/PartnerSection';
import { OrganizersSection } from '../components/OrganizersSection';
import { QASection } from '../components/QASection';
import { Footer } from '../components/Footer';

export const LandingPage = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full min-h-screen relative overflow-hidden flex flex-col">
        {/* Mobile Background */}
        <div 
          className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('${bgMobile}')` }}
        />
        {/* Desktop Background */}
        <div 
          className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('${bgDesktop}')` }}
        />

        <div className="relative z-10 flex flex-col flex-grow max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 lg:pt-48 pb-16 justify-center w-full">
          <main className="max-w-2xl">
            <HeroContent />
            <div className="mt-12">
              <Countdown />
            </div>
          </main>
        </div>
      </section>
      
      <AboutSection />
      <RulesSection />
      <TimelineSection />
      <PartnerSection />
      <OrganizersSection />
      <QASection />
      <Footer />
    </div>
  );
};
