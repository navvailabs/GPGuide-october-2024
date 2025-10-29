import { motion } from 'framer-motion';
import { ClipboardList, BrainCircuit, BriefcaseMedical, CheckCircle, Clock, ShieldCheck, Users } from 'lucide-react';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const Features = () => {
    const primaryFeatures = [
        {
            icon: ClipboardList,
            title: "Customised Care Plan Templates",
            description: "Generate comprehensive chronic disease management documentation designed to support MBS items 965, 967 requirements.",
            points: [
                "Templates reference current RACGP guidelines",
                "Evidence-based clinical recommendations",
                "Fully customizable for individual patients",
                "Export to Word or copy to your EMR",
                "No patient identifiable data stored"
            ]
        },
        {
            icon: BrainCircuit,
            title: "Mental Health Treatment Plan Templates",
            description: "Streamline GP mental health plan documentation with templates.",
            points: [
                "Based on contemporary mental health guidelines",
                "Evidence-based treatment approach suggestions",
                "Built-in clinical assessment prompts",
                "Export to Word or copy to your EMR",
                "Review and follow-up planning support"
            ]
        },
        {
            icon: BriefcaseMedical,
            title: ["Specialized Practice", "Tools"],
            description: "Streamline complex clinical and administrative tasks with specialized templates built for Australian general practice.",
            points: [
                "DEXA Scan Interpreter with treatment suggestions",
                "Centrelink & Workers Compensation form assistants",
                "Opioid calculation and safety tools",
                "Universal EMR integration and Word export",
                "Regularly updated with new specialized tools"
            ]
        }
    ];

    const achievements = [
        { icon: Clock, title: "Save Hours of Admin", description: "Spend less time on repetitive paperwork and more on patient care and family." },
        { icon: BrainCircuit, title: "Learn While You Work", description: "Build clinical and documentation skills with step-by-step guidance." },
        { icon: ShieldCheck, title: "Guideline-Aligned Plans", description: "Create compliant plans with peace of mind from structured best practices." },
        { icon: Users, title: "Improve Team Collaboration", description: "Standardize documentation across your practice with clear, structured plans." }
    ];

    return (
        <section className="py-20 sm:py-24 text-brand-text">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <GradientHeading className="text-mobile-h2 md:text-desktop-h2 font-bold text-center">Stop Spending Hours on Paperwork</GradientHeading>
                    <Description className="mt-4 text-lg">
                        Custom templates to help Australian GPs complete complex documentation in minutes, not hours.
                    </Description>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {primaryFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title.toString()}
                            className="bg-gray-100 shadow-clay-light rounded-2xl p-8 flex flex-col h-full"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="relative w-16 h-16 bg-brand-accent/10 border border-brand-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <div className="absolute -inset-2 bg-brand-accent/20 rounded-full blur-md animate-pulse"></div>
                                <feature.icon className="relative w-8 h-8 text-brand-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-text min-h-[4rem] text-center">
                                {Array.isArray(feature.title) ? (
                                    <>
                                        {feature.title[0]}
                                        <br />
                                        {feature.title[1]}
                                    </>
                                ) : (
                                    feature.title
                                )}
                            </h3>
                            <p className="mt-4 text-sm text-brand-text-muted min-h-[6rem] text-center">{feature.description}</p>
                            <ul className="mt-6 space-y-4">
                                {feature.points.map(point => {
                                    const emojiRegex = /^(\p{Emoji_Presentation}|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|(?:\p{Emoji_Presentation}|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?)\uFE0F\s*)/u;
                                    const emojiMatch = point.match(emojiRegex);
                                    const icon = emojiMatch ? emojiMatch[0].trim() : null;
                                    const text = icon ? point.substring(icon.length).trim() : point;

                                    return (
                                        <li key={point} className="flex items-start">
                                            <div className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                                                {icon ? (
                                                    <span className="text-lg">{icon}</span>
                                                ) : (
                                                    <CheckCircle className="h-full w-full text-brand-accent" />
                                                )}
                                            </div>
                                            <span className="text-brand-text-muted">{text}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ willChange: 'opacity' }}
                >
                    <GradientHeading as="h3" className="text-3xl font-bold text-center mb-12">Transform Your Practice Starting Today</GradientHeading>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="bg-gray-100 shadow-clay-light rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <div className="relative w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 rounded-full flex items-center justify-center mb-5 mx-auto">
                                    <div className="absolute -inset-1.5 bg-brand-accent/20 rounded-full blur-md animate-pulse"></div>
                                    <item.icon className="relative w-7 h-7 text-brand-accent" />
                                </div>
                                <h4 className="font-bold text-brand-text text-lg mb-2">{item.title}</h4>
                                <p className="text-sm text-brand-text-muted">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
