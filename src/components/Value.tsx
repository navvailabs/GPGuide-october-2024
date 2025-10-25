import { motion } from 'framer-motion';
import { CheckCircle, DollarSign } from 'lucide-react';
import AnimatedCard from './ui/dynamic-border-animations-card';

const Value = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <section className="py-20 sm:py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* The Cost of Waiting Card */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <AnimatedCard>
                            <div className="p-2">
                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">The Cost of Waiting</h3>
                                <p className="mt-2 text-neutral-400">Every day without GP Guide equals hours of unnecessary admin work.</p>
                                
                                <div className="my-6 bg-amber-900/30 border border-amber-500/30 rounded-xl p-6 space-y-4">
                                    <ValueItem label="Average GP hourly rate:" value="$150" />
                                    <ValueItem label="Time saved with GP Guide:" value="5 hours/week" />
                                    <ValueItem label="Weekly value:" value="$750" valueColor="text-success-green" />
                                    <ValueItem label="GP Guide cost:" value="$14.99 - $29.99" valueColor="text-red-400" />
                                </div>

                                <div className="mt-auto pt-6 space-y-4">
                                    <div className="text-center bg-gradient-to-br from-medical-blue/80 to-medical-teal/60 text-white py-4 px-6 rounded-xl border border-white/10 shadow-lg">
                                        <p className="text-4xl font-bold text-gradient-gold">3,400%+ ROI</p>
                                        <p className="text-sm font-semibold tracking-wider uppercase text-white/80">Return on Investment</p>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-amber-400/80">
                                        <DollarSign className="w-5 h-5" />
                                        <span>100% Tax Deductible - Claim as work expense</span>
                                    </div>
                                    <p className="text-sm text-center text-neutral-400">Start saving time immediately - no setup required.</p>
                                </div>
                            </div>
                        </AnimatedCard>
                    </motion.div>

                    {/* Stay Ahead of the Curve Card */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2 }}
                    >
                        <AnimatedCard>
                            <div className="p-2">
                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">Stay Ahead of the Curve</h3>
                                <p className="mt-2 text-neutral-400">Join the 500+ GPs already transforming their practice efficiency.</p>
                                
                                <div className="my-6 flex-grow flex flex-col justify-center">
                                    <p className="font-semibold text-neutral-200 mb-4">While other GPs struggle with documentation burden:</p>
                                    <ul className="space-y-4 text-neutral-300">
                                        <ChecklistItem>You'll finish notes during lunch breaks.</ChecklistItem>
                                        <ChecklistItem>You'll have consistent, professional templates.</ChecklistItem>
                                        <ChecklistItem>You'll capture every billing opportunity.</ChecklistItem>
                                        <ChecklistItem>You'll go home to your family on time.</ChecklistItem>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Helper component for value items in the left card
const ValueItem = ({ label, value, valueColor = 'text-white' }: { label: string, value: string, valueColor?: string }) => (
    <div className="flex justify-between items-center text-sm">
        <span className="text-neutral-300">{label}</span>
        <span className={`font-bold text-base ${valueColor}`}>{value}</span>
    </div>
);

// Helper component for checkmark list items in the right card
const ChecklistItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start">
        <CheckCircle className="h-5 w-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
        <span>{children}</span>
    </li>
);

export default Value;
