import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';
import SectionGradientBackground from './ui/SectionGradientBackground';

const featuresData = [
  {
    title: 'Triple checks are done for you.',
    description: 'GPGuide keeps an eye out 24/7 to help you generate RACGP-compliant drafts for Care Plans, MHCPs, and clinical forms in minutes, not hours. Save time on documentation and focus more on your patients.',
    linkText: 'Explore templates',
    linkHref: '/#testimonials',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=2230&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageSide: 'right' as 'left' | 'right',
  },
  {
    title: 'Leave the busywork to us.',
    description: 'Keep everyone focused on the big picture. Let GPGuide automate the rest—specialized tools for DEXA scans, Centrelink forms, and Workers Comp assist streamline complex clinical and administrative tasks.',
    linkText: 'Discover tools',
    linkHref: '/gp-care-plan-generator',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageSide: 'left' as 'left' | 'right',
  },
];

const WebAppFeatures = () => {
    
    const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            e.preventDefault();
            const targetId = href.substring(2);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-brand-bg text-brand-text">
      <SectionGradientBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-24 md:space-y-32">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-12 md:gap-24 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className={`md:order-${feature.imageSide === 'left' ? 1 : 2}`}>
                <motion.div 
                  className="bg-gray-100 dark:bg-black/20 shadow-clay-light dark:shadow-clay-dark rounded-2xl aspect-video overflow-hidden"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <img src={feature.imageUrl} alt={feature.title} className="w-full h-full object-cover" />
                </motion.div>
              </div>
              <div className={`md:order-${feature.imageSide === 'left' ? 2 : 1} text-center md:text-left`}>
                <GradientHeading as="h2" className="text-3xl md:text-4xl font-bold">
                  {feature.title}
                </GradientHeading>
                <Description className="mt-4 text-lg max-w-lg mx-auto md:mx-0">
                  {feature.description}
                </Description>
                <Link
                  to={feature.linkHref}
                  onClick={(e) => handleScrollLink(e, feature.linkHref)}
                  className="mt-6 inline-flex items-center font-semibold text-brand-accent hover:text-amber-700 transition-colors group"
                >
                  {feature.linkText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebAppFeatures;
