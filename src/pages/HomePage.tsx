import { useEffect } from 'react';

import Header from '@/components/Header.tsx';
import Hero from '@/components/Hero.tsx';
import Pricing from '@/components/Pricing.tsx';
import PainPoints from '@/components/PainPoints.tsx';
import HowItWorks from '@/components/HowItWorks.tsx';
import Features from '@/components/Features.tsx';
import Testimonials from '@/components/Testimonials.tsx';
import FAQ from '@/components/FAQ.tsx';
import FinalCTA from '@/components/FinalCTA.tsx';
import Contact from '@/components/Contact.tsx';
import Footer from '@/components/Footer.tsx';
import { AuroraBackground } from '@/components/ui/aurora-background.tsx';
import FlowingGradientBackground from '@/components/ui/FlowingGradientBackground.tsx';

function HomePage() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
  }, []);

  return (
    <div className="overflow-x-hidden bg-brand-bg">
      <FlowingGradientBackground />
      <AuroraBackground transparentBase={true}>
        <div className="relative z-10">
          <Header />
          
          <main>
            <Hero />
            <PainPoints />
            <HowItWorks />
            <Features />
            <Pricing />
            <Testimonials />
            <FAQ />
            <FinalCTA />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </AuroraBackground>
    </div>
  );
}

export default HomePage;
