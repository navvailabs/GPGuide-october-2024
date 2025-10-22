import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FlowingGradientBackground from '@/components/ui/FlowingGradientBackground';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { ReactNode, useEffect } from 'react';

const InfoPageLayout = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const root = window.document.documentElement;
        if (!root.classList.contains('dark')) {
          root.classList.add('dark');
        }
        root.classList.remove('light');
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="overflow-x-hidden">
      <FlowingGradientBackground />
      <AuroraBackground transparentBase={true}>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </AuroraBackground>
    </div>
  );
};

export default InfoPageLayout;
