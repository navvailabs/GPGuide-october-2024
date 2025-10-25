import { motion } from 'framer-motion';
import { Check, Dot } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedCard from './ui/dynamic-border-animations-card';

const Pricing = () => {
    const plans = [
        {
            name: 'Basic Plan',
            price: '$19.99',
            salePrice: '$7.99',
            billing: '/week',
            description: 'Perfect for Individual GPs',
            features: [
                'Generate unlimited Care Plans and Mental Health Treatment Plans',
                'Templates reference current RACGP guidelines',
                'Built-in guideline references (eTG, PBS links)',
                'Secure local document generation (no patient data stored)',
                'Export to Word and copy-paste to EMR',
                'Email support with 48-hour response',
            ],
            cta: 'Start Basic Plan',
            isPopular: false,
            roi: 'Pays for itself by saving 30 minutes per week.',
            value: 'ROI: $200+ monthly value for ~$32 cost',
            limitedNote: 'Limited time offer!',
            disclaimer: 'Promotional price for first month. After one month, payment will resume at the regular weekly price of $19.99.'
        },
        {
            name: 'Professional Plan',
            price: '$29.99',
            salePrice: '$14.99',
            billing: '/week',
            description: 'Complete Practice Transformation',
            features: [
                'Everything in Basic Plan',
                'Access to specialized clinical tools:',
                ' - DEXA Scan Interpreter (bone density analysis)',
                ' - Centrelink SU415 Form Generator (DSP assessments)',
                ' - Workers Compensation Report Templates',
                ' - Allied Health Referral Wizard (physio, psych, dietitian templates)',
                'Priority support with 24-hour response',
                'Submit your own template ideas — we\'ll review and build them into the platform',
            ],
            cta: 'Choose Professional Plan',
            isPopular: true,
            roi: 'Save 5+ hours weekly - $400+ monthly value.',
            value: 'ROI: $600+ monthly value for ~$60 cost',
            limitedNote: 'Limited time offer!',
            disclaimer: 'Promotional price for first month. After one month, payment will resume at the regular weekly price of $29.99.'
        },
    ];

    return (
        <section id="pricing" className="py-20 sm:py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-mobile-h2 md:text-desktop-h2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Choose Your Productivity Plan</h2>
                    <p className="mt-4 text-lg text-neutral-300">
                        Flexible weekly subscriptions designed for busy healthcare professionals.
                        <br />
                        No contracts • Immediate access • Start saving time today
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto lg:items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="h-full"
                        >
                            <AnimatedCard className={cn(plan.isPopular ? 'border-premium-gold/60' : '')}>
                                {plan.isPopular && (
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gold-gradient text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        MOST POPULAR
                                    </div>
                                )}

                                <h3 className={cn("text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400", plan.isPopular && "mt-4")}>{plan.name}</h3>
                                <p className="mt-2 text-neutral-300">{plan.description}</p>
                                
                                {plan.limitedNote && (
                                    <div className="mt-4 bg-amber-500/20 text-amber-300 text-sm font-semibold px-3 py-1 rounded-full inline-block border border-amber-500/30">
                                        {plan.limitedNote}
                                    </div>
                                )}

                                <div className="mt-6">
                                    {plan.salePrice ? (
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-bold text-white">{plan.salePrice}</span>
                                            <del className="text-2xl font-medium text-gray-500">{plan.price}</del>
                                            <span className="text-lg text-gray-400">{plan.billing}</span>
                                        </div>
                                    ) : (
                                        <div>
                                            <span className="text-5xl font-bold text-white">{plan.price}</span>
                                            <span className="text-lg text-gray-400">{plan.billing}</span>
                                        </div>
                                    )}
                                    <p className="text-sm text-gray-400 mt-1">Billed weekly • Cancel anytime</p>
                                </div>

                                <ul className="mt-8 space-y-4 flex-grow">
                                    {plan.features.map((feature) => {
                                        const isSubFeature = feature.startsWith(' - ');
                                        const isAdvancedToolsTitle = feature === 'Access to specialized clinical tools:';
                                        const featureText = isSubFeature ? feature.replace(' - ', '') : feature;

                                        if (isSubFeature) {
                                            return (
                                                <li key={feature} className="flex items-start pl-8">
                                                    <Dot className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-300">{featureText}</span>
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={feature} className="flex items-start">
                                                <Check className="h-5 w-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                                                <span className={cn(
                                                    'text-gray-300',
                                                    { 'font-semibold text-white': isAdvancedToolsTitle }
                                                )}>
                                                    {featureText}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="mt-auto pt-8">
                                    <button className={`w-full py-3 px-6 rounded-full font-bold text-lg transition-transform duration-300 hover:scale-105 ${plan.isPopular ? 'bg-gold-gradient text-white' : 'border-2 border-white text-white hover:bg-white hover:text-medical-blue'}`}>
                                        {plan.cta}
                                    </button>
                                    <div className="mt-4 text-center text-sm text-gray-300 bg-white/5 p-3 rounded-xl border border-white/10">
                                        <p className="font-semibold text-white">{plan.roi}</p>
                                        <p>{plan.value}</p>
                                    </div>
                                    {plan.disclaimer && (
                                        <p className="mt-4 text-xs text-center text-gray-400">{plan.disclaimer}</p>
                                    )}
                                </div>
                            </AnimatedCard>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="mt-12 text-center text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-success-green" />All prices include GST</li>
                        <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-success-green" />No setup fees or hidden costs</li>
                        <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-success-green" />Pause subscription anytime</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
