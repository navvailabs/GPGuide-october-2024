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
import { AuroraBackground } from '@/components/ui/aurora-background.tsx';
import FlowingGradientBackground from '@/components/ui/FlowingGradientBackground.tsx';

function HomePage() {
  return (
    <div className="bg-brand-bg">
      <FlowingGradientBackground />
      <AuroraBackground transparentBase={true}>
        <div className="relative z-10">
          <Header />
          
          <main>
            <Hero />
            <PainPoints />
            <Showcase />
            <TemplateFeatures />
            <VideoDemo />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <Features />
            <Trust />
            <Value />
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
