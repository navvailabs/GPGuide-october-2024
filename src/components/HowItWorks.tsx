import { motion } from 'framer-motion';
import { FileText, Zap, FileCheck2, Download, Clock, CheckCircle, Sparkles } from 'lucide-react';
import SectionGradientBackground from './ui/SectionGradientBackground';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const steps = [
    {
        num: '01',
        icon: FileText,
        title: "Enter Clinical Details",
        description: "Input symptoms and conditions. No patient identifiers required."
    },
    {
        num: '02',
        icon: Zap,
        title: "Generate Template Instantly",
        description: "AI creates a comprehensive, evidence-based plan in seconds."
    },
    {
        num: '03',
        icon: FileCheck2,
        title: "Review & Customise",
        description: "Apply your clinical judgment with built-in quality prompts."
    },
    {
        num: '04',
        icon: Download,
        title: "Copy or Export",
        description: "One-click export to all major EMR systems."
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
};

const HowItWorks = () => {
    return (
        <section className="relative overflow-hidden py-20 sm:py-24 bg-brand-bg">
            <SectionGradientBackground />
            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants} style={{ willChange: 'transform, opacity' }}>
                    <GradientHeading className="text-mobile-h2 md:text-desktop-h2 font-bold text-center">From Consultation to Care Plan in Minutes</GradientHeading>
                    <Description className="mt-4 text-lg">
                        Professional care plan automation for modern GPs — fast, accurate, guideline-aligned.
                    </Description>
                </motion.div>

                <motion.div className="relative mb-20" variants={itemVariants} style={{ willChange: 'transform, opacity' }}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step) => (
                            <motion.div
                                key={step.title}
                                className="relative bg-gray-100 shadow-clay-light rounded-2xl p-6 text-center flex flex-col items-center"
                                whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
                            >
                                <span className="absolute top-4 left-4 text-2xl font-bold text-brand-accent">{step.num}</span>
                                <div className="relative mb-4">
                                    <div className="absolute -inset-2 bg-brand-accent/20 rounded-full blur-md animate-pulse"></div>
                                    <div className="relative w-16 h-16 bg-brand-accent/10 border border-brand-accent/20 rounded-full flex items-center justify-center">
                                        <step.icon className="w-8 h-8 text-brand-accent" />
                                    </div>
                                </div>
                                <h3 className="mt-2 text-xl font-bold text-brand-text">{step.title}</h3>
                                <p className="mt-2 text-brand-text-muted text-sm flex-grow">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto bg-gray-100 shadow-clay-light rounded-2xl p-8"
                    variants={itemVariants}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Traditional Method */}
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Clock className="w-8 h-8 text-brand-text-muted" />
                                <h4 className="text-2xl font-bold text-brand-text">Traditional Method</h4>
                            </div>
                            <p className="text-5xl font-bold text-brand-text-muted">20+ <span className="text-2xl font-medium align-baseline">mins</span></p>
                            <p className="mt-2 text-brand-text-muted">Manual research, writing, and formatting.</p>
                        </div>

                        {/* GPGuide Method */}
                        <div className="text-center md:border-l border-brand-border md:pl-8">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Sparkles className="w-8 h-8 text-brand-accent" />
                                <h4 className="text-2xl font-bold text-brand-text">GPGuide Method</h4>
                            </div>
                            <p className="text-5xl font-bold text-brand-accent">6 <span className="text-2xl font-medium align-baseline">mins</span></p>
                            <p className="mt-2 text-brand-text-muted">Instant generation, quick review, and export.</p>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-brand-border/50 text-center">
                        <p className="text-2xl font-bold text-brand-text">
                            Time Saved: <span className="text-gradient-orange">~20 minutes per complex care plan</span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HowItWorks;
