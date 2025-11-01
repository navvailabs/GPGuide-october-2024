import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';
import SectionGradientBackground from './ui/SectionGradientBackground';
import { cn } from '@/lib/utils';

const featuresData = [
  {
    title: 'Triple checks are done for you.',
    description: 'GPGuide keeps an eye out 24/7 to help you generate RACGP-compliant drafts for Care Plans, MHCPs, and clinical forms in minutes, not hours. Save time on documentation and focus more on your patients.',
    linkText: 'Explore templates',
    linkHref: '/#testimonials',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=2230&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Leave the busywork to us.',
    description: 'Keep everyone focused on the big picture. Let GPGuide automate the rest—specialized tools for DEXA scans, Centrelink forms, and Workers Comp assist streamline complex clinical and administrative tasks.',
    linkText: 'Discover tools',
    linkHref: '/gp-care-plan-generator',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Chronic Disease Management Plan',
    description: 'Generate comprehensive chronic disease management documentation designed to support MBS items. Our templates reference current RACGP guidelines and provide evidence-based clinical recommendations, all fully customizable for individual patients.',
    linkText: 'Generate a Care Plan',
    linkHref: '/gp-care-plan-generator',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://i.ibb.co/JhhQSJM/edited-screenshot-3.png',
  },
  {
    title: 'Mental Health Treatment Plan',
    description: 'Streamline your mental health documentation with structured templates. Based on contemporary guidelines, they include built-in clinical assessment prompts and support for review and follow-up planning.',
    linkText: 'Generate a MHCP',
    linkHref: '/gp-care-plan-generator',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x450/F3F4F6/1E1B18?text=Mental+Health+Plan',
  },
  {
    title: 'Workers Compensation Form Assist',
    description: 'Quickly generate key statements for Certificates of Capacity. Input injury details, work capacity, and treatment plans to create a concise, professional summary for WorkCover forms, saving you valuable time.',
    linkText: 'Assist with Workers Comp',
    linkHref: '/gp-care-plan-generator',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x450/F3F4F6/1E1B18?text=Workers+Comp',
  },
  {
    title: 'Centrelink Form Assist',
    description: 'Effortlessly generate statements for the Centrelink Medical Certificate (SU415). Detail clinical information, functional impact, and treatment plans to produce a clear, effective summary for DSP applications.',
    linkText: 'Assist with Centrelink Form',
    linkHref: '/gp-care-plan-generator',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x450/F3F4F6/1E1B18?text=Centrelink+Form',
  }
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
          {featuresData.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
                <motion.div
                  key={index}
                  className="grid md:grid-cols-2 gap-12 md:gap-24 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <div className={cn({
                    'md:order-2': isEven, // For even index (0, 2, 4), image is on the right
                    'md:order-1': !isEven, // For odd index (1, 3, 5), image is on the left
                  })}>
                    <motion.div 
                      className="bg-gray-100 dark:bg-black/20 shadow-clay-light dark:shadow-clay-dark rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <img src={feature.imageUrl} alt={feature.title} className="w-full h-auto" />
                    </motion.div>
                  </div>
                  <div className={cn('text-center md:text-left', {
                    'md:order-1': isEven, // For even index, text is on the left
                    'md:order-2': !isEven, // For odd index, text is on the right
                  })}>
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
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default WebAppFeatures;
