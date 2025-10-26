import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from '@/components/Header.tsx';
import Hero from '@/components/Hero.tsx';
import Pricing from '@/components/Pricing.tsx';
import PainPoints from '@/components/PainPoints.tsx';
import Showcase from '@/components/Showcase.tsx';
import TemplateFeatures from '@/components/TemplateFeatures.tsx';
import VideoDemo from '@/components/VideoDemo.tsx';
import HowItWorks from '@/components/HowItWorks.tsx';
import Testimonials from '@/components/Testimonials.tsx';
import Features from '@/components/Features.tsx';
import Trust from '@/components/Trust.tsx';
import Value from '@/components/Value.tsx';
import FAQ from '@/components/FAQ.tsx';
import FinalCTA from '@/components/FinalCTA.tsx';
import Contact from '@/components/Contact.tsx';
import Footer from '@/components/Footer.tsx';
import StickyHeaderCTA from '@/components/StickyHeaderCTA.tsx';
import { AuroraBackground } from '@/components/ui/aurora-background.tsx';
import FlowingGradientBackground from '@/components/ui/FlowingGradientBackground.tsx';

function HomePage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the hero section (approx 700px)
      if (window.scrollY > 700) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <AnimatePresence>
            {showStickyCTA && <StickyHeaderCTA />}
          </AnimatePresence>
          
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
