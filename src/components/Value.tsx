import { motion } from 'framer-motion';
import { CheckCircle, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

const Value = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <section className="py-20 sm:py-24 text-brand-text">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* The Cost of Waiting Card */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <div className={cn(
                            "relative w-full h-full bg-gray-100 shadow-clay-light rounded-2xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2"
                        )}>
                            <h3 className="text-3xl font-bold text-brand-text">The Cost of Waiting</h3>
                            <p className="mt-2 text-brand-text-muted">Every day without GP Guide equals hours of unnecessary admin work.</p>
                            
                            <div className="my-6 bg-brand-bg border border-brand-border rounded-xl p-6 space-y-4">
                                <ValueItem label="Average GP hourly rate:" value="$150" />
                                <ValueItem label="Time saved with GP Guide:" value="5 hours/week" />
                                <ValueItem label="Weekly value:" value="$750" valueColor="text-success-green" />
                                <ValueItem label="GP Guide cost:" value="$14.99 - $29.99" valueColor="text-pain-red" />
                            </div>

                            <div className="mt-auto pt-6 space-y-4">
                                <div className="text-center bg-brand-accent/10 text-brand-text py-4 px-6 rounded-xl border border-brand-accent/20 shadow-lg">
                                    <p className="text-4xl font-bold text-brand-accent">3,400%+ ROI</p>
                                    <p className="text-sm font-semibold tracking-wider uppercase text-brand-text-muted">Return on Investment</p>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-brand-accent/80">
                                    <DollarSign className="w-5 h-5" />
                                    <span>100% Tax Deductible - Claim as work expense</span>
                                </div>
                                <p className="text-sm text-center text-brand-text-muted">Start saving time immediately - no setup required.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stay Ahead of the Curve Card */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <div className={cn(
                            "relative w-full h-full bg-gray-100 shadow-clay-light rounded-2xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2"
                        )}>
                            <h3 className="text-3xl font-bold text-brand-text">Stay Ahead of the Curve</h3>
                            <p className="mt-2 text-brand-text-muted">Join the 500+ GPs already transforming their practice efficiency.</p>
                            
                            <div className="my-6 flex-grow flex flex-col justify-center">
                                <p className="font-semibold text-brand-text mb-4">While other GPs struggle with documentation burden:</p>
                                <ul className="space-y-4 text-brand-text-muted">
                                    <ChecklistItem>You'll finish notes during lunch breaks.</ChecklistItem>
                                    <ChecklistItem>You'll have consistent, professional templates.</ChecklistItem>
                                    <ChecklistItem>You'll capture every billing opportunity.</ChecklistItem>
                                    <ChecklistItem>You'll go home to your family on time.</ChecklistItem>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Helper component for value items in the left card
const ValueItem = ({ label, value, valueColor = 'text-brand-text' }: { label: string, value: string, valueColor?: string }) => (
    <div className="flex justify-between items-center text-sm">
        <span className="text-brand-text-muted">{label}</span>
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
