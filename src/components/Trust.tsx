import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import SectionGradientBackground from './ui/SectionGradientBackground';
import { GradientHeading } from '@/components/ui/GradientHeading';

const Trust = () => {
    // Left column points
    const leftColumnPoints = [
        "Bank-level encryption (AES-256)",
        "No patient identifiers stored",
        "Australian Privacy Principles compliant",
        "Regular security audits and updates",
    ];

    // Right column points
    const rightColumnPoints = [
        "Built by Australian GPs",
        "Australian Privacy Law Compliant",
        "AHPRA-Registered Access Only",
        "Works with All Major Platforms",
    ];

    // Bottom badges
    const bottomBadges = [
        "Australian Owned",
        "Privacy Compliant",
        "Secure Hosting",
    ];

    return (
        <section className="relative overflow-hidden py-20 sm:py-24 bg-brand-bg">
            <SectionGradientBackground />
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <GradientHeading className="text-3xl md:text-4xl font-bold text-center" gradient="linear-gradient(to right, #10B981, #06B6D4)">Your Data Security is Our Priority</GradientHeading>
                    <p className="mt-4 text-lg text-brand-text-muted">
                        We are committed to the highest standards of data protection and privacy, ensuring your practice and patient information remains secure.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        {/* Left Column */}
                        <ul className="space-y-4">
                            {leftColumnPoints.map(point => (
                                <li key={point} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-brand-text-muted">{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Right Column */}
                        <ul className="space-y-4">
                            {rightColumnPoints.map(point => (
                                <li key={point} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-brand-text-muted">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-16 flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {bottomBadges.map((badgeText) => (
                        <div key={badgeText} className="bg-gray-100 shadow-clay-light flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium text-brand-text">
                            <ShieldCheck className="h-5 w-5 text-success-green" />
                            <span>{badgeText}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Trust;
