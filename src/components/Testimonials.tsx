import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimate, animate } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionGradientBackground from './ui/SectionGradientBackground';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
}

function Counter({ from, to, duration = 2 }: CounterProps) {
  const [scope, animateScope] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animateScope(scope.current, { opacity: 1 });
      animate(from, to, {
        duration,
        onUpdate(value) {
          if (scope.current) {
            scope.current.textContent = value.toFixed(0);
          }
        },
      });
    }
  }, [isInView, from, to, duration, animateScope, scope]);

  return <span ref={scope} style={{ opacity: 0 }} />;
}

const Testimonials = () => {
    const testimonials = [
        {
            quote: "GPGuide changed my career trajectory. I was considering leaving general practice due to documentation burden. Now I finish notes during lunch breaks and actually enjoy patient care again. My family gets me home by 6 PM instead of 9 PM. This is life-changing.",
            name: "Dr. Michael Chen",
            practice: "Westmead Family Practice",
            details: "8 years experience • 25 patients/day average",
            stats: "Time saved: 8 hours weekly • $320+ weekly value",
            image: "https://img-wrapper.vercel.app/image?url=https://xsgames.co/randomusers/avatar.php?g=male&i=1",
            badge: "Practice Verified"
        },
        {
            quote: "As a registrar rotating through different practices, GPGuide was my lifeline. Different practices, different systems, but consistent quality documentation every time. It's like having a senior GP mentor in your pocket guiding every care plan.",
            name: "Dr. Lisa Park",
            practice: "GP Registrar, Brisbane",
            details: "Final year registrar • 4 practice rotations",
            stats: "Confidence boost: 'From anxious to confident'",
            image: "https://img-wrapper.vercel.app/image?url=https://xsgames.co/randomusers/avatar.php?g=female&i=2",
            badge: "Registrar"
        },
        {
            quote: "GPGuide standardized documentation across our 8 GPs. Our audit scores improved 40% and we're capturing $2,000+ more monthly in previously missed billing opportunities. The ROI is incredible.",
            name: "Dr. Sarah Thompson",
            practice: "Practice Principal, Melbourne",
            details: "15 years experience • 8-doctor practice",
            stats: "Practice revenue increase: $24,000+ annually",
            image: "https://img-wrapper.vercel.app/image?url=https://xsgames.co/randomusers/avatar.php?g=female&i=3",
            badge: "Practice Owner"
        }
    ];

    return (
        <section id="testimonials" className="relative overflow-hidden py-20 sm:py-24 bg-brand-bg">
            <SectionGradientBackground />
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <GradientHeading className="text-mobile-h2 md:text-desktop-h2 font-bold text-center">Real GPs, Real Results, Real Time Savings</GradientHeading>
                    <Description className="mt-4 text-lg">
                        Join 500+ Australian GPs who've transformed their practice efficiency.
                    </Description>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            className="bg-gray-100 shadow-clay-light rounded-2xl p-8 flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <Quote className="w-10 h-10 text-brand-accent/70 mb-4" />
                            <p className="text-brand-text-muted mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center space-x-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-brand-accent" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-brand-text">{testimonial.name}</h4>
                                    <p className="text-sm text-brand-text-muted">{testimonial.practice}</p>
                                    <p className="text-xs text-brand-text-muted/80 mt-1">{testimonial.details}</p>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-brand-border/50 text-sm">
                                <div className="bg-brand-accent/5 text-brand-accent font-semibold p-3 rounded-lg text-center">
                                    {testimonial.stats}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-brand-text bg-gray-100 shadow-clay-light p-8 rounded-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <div>
                        <p className="text-5xl font-bold text-brand-accent"><Counter from={0} to={547} /></p>
                        <p className="mt-2 text-brand-text-muted">GPs Active This Week</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold text-brand-accent"><Counter from={0} to={1247} /></p>
                        <p className="mt-2 text-brand-text-muted">Templates Generated Today</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold text-brand-accent"><Counter from={0} to={6} />.2</p>
                        <p className="mt-2 text-brand-text-muted">Average Weekly Hours Saved</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
