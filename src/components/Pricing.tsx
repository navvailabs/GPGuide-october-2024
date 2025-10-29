import { motion } from 'framer-motion';
import { Check, Dot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

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
        <section id="pricing" className="py-20 sm:py-24 text-brand-text">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <GradientHeading className="text-mobile-h2 md:text-desktop-h2 font-bold text-center">Choose Your Productivity Plan</GradientHeading>
                    <Description className="mt-4 text-lg">
                        Flexible weekly subscriptions designed for busy healthcare professionals.
                        <br />
                        No contracts • Immediate access • Start saving time today
                    </Description>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto lg:items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="h-full"
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className={cn(
                                "relative w-full h-full bg-gray-100 shadow-clay-light rounded-2xl p-8 flex flex-col",
                                plan.isPopular ? 'border-2 border-brand-accent' : ''
                            )}>
                                {plan.isPopular && (
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-bg px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        MOST POPULAR
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-brand-text mt-4">{plan.name}</h3>
                                <p className="mt-2 text-brand-text-muted">{plan.description}</p>
                                
                                {plan.limitedNote && (
                                    <div className="mt-4 bg-brand-accent/20 text-brand-accent text-sm font-semibold px-3 py-1 rounded-full inline-block border border-brand-accent/30">
                                        {plan.limitedNote}
                                    </div>
                                )}

                                <div className="mt-6">
                                    {plan.salePrice ? (
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-bold text-brand-text">{plan.salePrice}</span>
                                            <del className="text-2xl font-medium text-brand-text-muted/70">{plan.price}</del>
                                            <span className="text-lg text-brand-text-muted">{plan.billing}</span>
                                        </div>
                                    ) : (
                                        <div>
                                            <span className="text-5xl font-bold text-brand-text">{plan.price}</span>
                                            <span className="text-lg text-brand-text-muted">{plan.billing}</span>
                                        </div>
                                    )}
                                    <p className="text-sm text-brand-text-muted mt-1">Billed weekly • Cancel anytime</p>
                                </div>

                                <ul className="mt-8 space-y-4 flex-grow">
                                    {plan.features.map((feature) => {
                                        const isSubFeature = feature.startsWith(' - ');
                                        const isAdvancedToolsTitle = feature === 'Access to specialized clinical tools:';
                                        const featureText = isSubFeature ? feature.replace(' - ', '') : feature;

                                        if (isSubFeature) {
                                            return (
                                                <li key={feature} className="flex items-start pl-8">
                                                    <Dot className="h-5 w-5 text-brand-text-muted mr-3 mt-0.5 flex-shrink-0" />
                                                    <span className="text-brand-text-muted">{featureText}</span>
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={feature} className="flex items-start">
                                                <Check className="h-5 w-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                                                <span className={cn(
                                                    'text-brand-text-muted',
                                                    { 'font-semibold text-brand-text': isAdvancedToolsTitle }
                                                )}>
                                                    {featureText}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="mt-auto pt-8">
                                    <motion.button
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className={cn(
                                            "w-full py-3 px-6 rounded-full font-bold text-lg transition-all duration-300",
                                            plan.isPopular
                                                ? 'bg-brand-accent text-brand-bg shadow-lg hover:shadow-xl'
                                                : 'border-2 border-brand-text text-brand-text hover:bg-brand-text hover:text-brand-bg'
                                        )}
                                    >
                                        {plan.cta}
                                    </motion.button>
                                    <div className="mt-4 text-center text-sm text-brand-text-muted bg-brand-bg p-3 rounded-xl border border-brand-border">
                                        <p className="font-semibold text-brand-text">{plan.roi}</p>
                                        <p>{plan.value}</p>
                                    </div>
                                    {plan.disclaimer && (
                                        <p className="mt-4 text-xs text-center text-brand-text-muted/80">{plan.disclaimer}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="mt-12 text-center text-brand-text-muted"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ willChange: 'opacity' }}
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
