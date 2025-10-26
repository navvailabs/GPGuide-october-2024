import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import SectionGradientBackground from './ui/SectionGradientBackground';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const FinalCTA = () => {
    return (
        <section className="relative overflow-hidden py-20 sm:py-24 text-brand-text">
            <SectionGradientBackground />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <GradientHeading className="text-3xl md:text-5xl font-bold text-center" gradient="linear-gradient(to right, #D97706, #FBBF24)">Ready to Reclaim Your Time?</GradientHeading>
                    <Description className="mt-4 text-lg max-w-3xl mx-auto">
                        Join 500+ Australian GPs who've already transformed their practice efficiency. Every day without GPGuide is another day lost to unnecessary admin work.
                    </Description>
                </motion.div>

                <motion.div
                    className="mt-10 flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <button className="bg-brand-accent text-brand-bg font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                        START ESSENTIAL PLAN - $7.99/week
                    </button>
                    <button className="text-brand-text border-2 border-brand-text font-bold py-4 px-8 rounded-full text-lg hover:bg-brand-text hover:text-brand-bg transform transition-all duration-300">
                        CHOOSE PROFESSIONAL PLAN - $14.99/week
                    </button>
                </motion.div>

                <motion.div
                    className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-brand-text-muted max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-center justify-center"><CheckCircle className="h-4 w-4 mr-2 text-success-green"/>Start saving in minutes</div>
                    <div className="flex items-center justify-center"><CheckCircle className="h-4 w-4 mr-2 text-success-green"/>Cancel anytime</div>
                    <div className="flex items-center justify-center"><CheckCircle className="h-4 w-4 mr-2 text-success-green"/>Australian-based support</div>
                    <div className="flex items-center justify-center"><ShieldCheck className="h-4 w-4 mr-2 text-success-green"/>No patient data stored</div>
                </motion.div>

                <motion.div
                    className="mt-12 text-brand-accent font-semibold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    "Don't let another week pass spending hours on documentation that could take minutes."
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
