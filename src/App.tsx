import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const scrollToContact = (customMessage?: string) => {
    if (customMessage) {
      setPrefilledMessage(customMessage);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top 3-Zone Navigation */}
      <Navbar onHireMeClick={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Cinematic Background & Timeline */}
        <Hero
          onViewWorkClick={scrollToPortfolio}
          onHireMeClick={() => scrollToContact()}
        />

        {/* 2. About Me with Interactive Before/After Color Grading Slider */}
        <AboutMe />

        {/* 3. My Services with Cost & Turnaround Calculator */}
        <Services
          onSelectServiceForHire={(serviceName) =>
            scrollToContact(`I am interested in hiring you for: ${serviceName}. Let's discuss details and turnaround!`)
          }
        />

        {/* 4. My Portfolio with Category Filters and Cinema Lightbox Modal */}
        <Portfolio
          onOrderProject={(projectTitle) =>
            scrollToContact(`I loved your work on "${projectTitle}" and would like a similar edit for my channel/brand.`)
          }
        />

        {/* 5. My Editing Skills: CapCut, Premiere Pro, Photoshop, Lightroom, Alight Motion */}
        <Skills />

        {/* 6. Why Choose Me: 5 Pillars, Workflow & International Testimonials */}
        <WhyChooseMe onWorkTogetherClick={() => scrollToContact()} />

        {/* 7. Contact Me: Socials, Direct Email, and "Let's Work Together" Form */}
        <Contact prefilledMessage={prefilledMessage} />
      </main>

      {/* 8. Footer: Brand Name PRINCE EDITS & Slogan "BORN TO CREATE A HISTORY." */}
      <Footer />
    </div>
  );
}
