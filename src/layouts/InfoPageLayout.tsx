import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FlowingGradientBackground from '@/components/ui/FlowingGradientBackground';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const InfoPageLayout = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Use a timeout to ensure the element is available after the page has rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [location]);

  return (
    <div className="overflow-x-hidden bg-brand-bg">
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
