import { motion } from 'framer-motion';
import { Zap, ShieldCheck, FileText, DollarSign, CheckCircle } from 'lucide-react';
import { Description } from './ui/Description';
import { GradientHeading } from '@/components/ui/GradientHeading';

const Hero = () => {
    const features = [
        { icon: Zap, text: "Save 5+ Hours Weekly" },
        { icon: ShieldCheck, text: "No Patient Data Stored" },
        { icon: FileText, text: "Professional Templates" },
        { icon: DollarSign, text: "Boost Practice Revenue" }
    ];

    const handleSignUpClick = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <section className="relative w-full font-body text-brand-text-muted overflow-hidden">
            <motion.div
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-24 sm:py-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <span className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-green-700 rounded-full bg-green-500/20 ring-1 ring-inset ring-green-400/30">
                        <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></span>
                        Used by 500+ Australian GPs
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-tight mb-4 text-brand-text"
                >
                    HIGH YIELD GP
                    <br />
                    <GradientHeading
                        as="span"
                        className="font-display"
                        gradient="linear-gradient(to right, #F59E0B, #B45309)"
                    >
                        RESOURCE GUIDE
                    </GradientHeading>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg text-brand-text-muted mb-6">
                    For GPs, GP Registrars, Aspiring GPs
                </motion.p>
                
                <motion.div variants={itemVariants} className="max-w-2xl">
                    <Description className="text-lg">
                        Generate professional-quality drafts for Care Plans, Mental Health
                        Care Plans, and clinical forms — designed as learning templates
                        to support best-practice documentation.
                    </Description>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 mt-12 mb-12 text-brand-text"
                >
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <feature.icon className="w-5 h-5 text-brand-accent flex-shrink-0" />
                            <span>{feature.text}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <motion.button
                        onClick={handleSignUpClick}
                        className="bg-brand-text text-brand-bg font-semibold py-4 px-10 rounded-full shadow-lg border-2 border-brand-accent/50 hover:border-brand-accent transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        Start Generating a Care Plan
                    </motion.button>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-2 text-brand-text-muted text-sm mt-8">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>GPGuide helps Australian GPs work smarter, faster, and stay fully compliant.</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
