import { motion } from 'framer-motion';
import { Mail, BookOpen, ClipboardList, MessageSquare } from 'lucide-react';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const Contact = () => {
    const contactMethods = [
        { icon: Mail, title: "Email Support", detail: "support@gpguide.com.au", response: "Response within 48 hours" },
        { icon: BookOpen, title: "Getting Started Guide", detail: "Complete setup documentation", response: "Available immediately after signup" },
        { icon: ClipboardList, title: "Template Library", detail: "Browse all available templates", response: "Regular updates with new tools" },
        { icon: MessageSquare, title: "Feedback Welcome", detail: "Help us improve GP Guide", response: "Professional Plan members: Request custom templates" }
    ];

    return (
        <section className="py-20 sm:py-24 text-brand-text">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <GradientHeading className="text-3xl md:text-4xl font-bold text-center">Get Help When You Need It</GradientHeading>
                    <Description className="mt-4 text-lg">
                        Our Australian-based support team understands the challenges GPs face and is here to provide real help from real people.
                    </Description>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.title}
                            className="bg-gray-100 shadow-clay-light rounded-2xl p-6 text-center flex flex-col"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="bg-brand-accent/10 p-4 rounded-full">
                                    <method.icon className="h-8 w-8 text-brand-accent" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-brand-text">{method.title}</h3>
                            <p className="mt-2 font-semibold text-brand-text-muted">{method.detail}</p>
                            <p className="mt-1 text-sm text-brand-text-muted/80 flex-grow">{method.response}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
