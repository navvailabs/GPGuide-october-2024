import { motion } from 'framer-motion';
import { Play, Eye, Clock, Star } from 'lucide-react';
import SectionGradientBackground from './ui/SectionGradientBackground';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const VideoDemo = () => {
    return (
        <section className="relative overflow-hidden py-20 sm:py-24 bg-brand-bg">
            <SectionGradientBackground />
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <GradientHeading className="text-mobile-h2 md:text-desktop-h2 font-bold text-center">See GPGuide Transform Your Workflow</GradientHeading>
                    <Description className="mt-4 text-lg">
                        Watch real GPs save hours with intelligent documentation.
                    </Description>
                </motion.div>

                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <div className="relative aspect-video bg-brand-text rounded-xl shadow-2xl overflow-hidden group">
                        <img src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/1E1B18/F9F5EF?text=GP+Workflow+Demo" alt="GPGuide Demo Video" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <button className="text-brand-bg transform group-hover:scale-110 transition-transform duration-300">
                                <Play size={80} className="bg-brand-accent rounded-full p-4" />
                            </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                            <h3 className="text-white text-xl font-bold">From Patient Consultation to Professional Care Plan in 5 Minutes</h3>
                            <p className="text-gray-300 text-sm">Dr. Sarah Melbourne demonstrates complete workflow</p>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-brand-text">
                        <div className="bg-brand-surface border border-brand-border p-4 rounded-lg flex items-center justify-center space-x-2">
                            <Eye className="h-6 w-6 text-success-green" />
                            <span>Watched by <strong>2,500+</strong> GPs</span>
                        </div>
                        <div className="bg-brand-surface border border-brand-border p-4 rounded-lg flex items-center justify-center space-x-2">
                            <Clock className="h-6 w-6 text-success-green" />
                            <span>Avg. time saved: <strong>25 mins</strong>/plan</span>
                        </div>
                        <div className="bg-brand-surface border border-brand-border p-4 rounded-lg flex items-center justify-center space-x-2">
                            <Star className="h-6 w-6 text-brand-accent" />
                            <span><strong>4.9/5</strong> rating</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoDemo;
