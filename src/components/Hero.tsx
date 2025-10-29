import { motion } from 'framer-motion';
import { Zap, ShieldCheck, FileText, DollarSign, CheckCircle } from 'lucide-react';
import { TextShimmer } from './ui/text-shimmer';
import { ShinyButton } from './ui/shiny-button';
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

    return (
        <section className="relative w-full font-body text-brand-text-muted">
            <div className="relative z-10 px-6 pt-16 pb-8 sm:pt-24 sm:pb-12 lg:px-8">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    <div className="lg:col-span-6 flex flex-col items-start text-left">
                        <span className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium text-green-700 rounded-full bg-green-500/20 ring-1 ring-inset ring-green-400/30">
                            <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></span>
                            Used by 500+ Australian GPs
                        </span>

                        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-tight mb-4 text-brand-text">
                            HIGH YIELD GP
                            <br />
                            <GradientHeading 
                                as="span" 
                                className="font-display"
                                gradient="linear-gradient(to right, #F59E0B, #B45309)"
                            >
                                RESOURCE GUIDE
                            </GradientHeading>
                        </h1>

                        <p className="text-lg text-brand-text-muted mb-4">For GPs, GP Registrars, Aspiring GPs</p>
                        <Description className="text-lg mb-8 max-w-xl">
                            Generate professional-quality drafts for Care Plans, Mental Health 
                            Care Plans, and clinical forms — designed as learning templates 
                            to support best-practice documentation.
                            <br/><br/>
                            Designed by Australian GPs. Trusted by over 500 clinicians nationwide.
                        </Description>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8 text-brand-text w-full">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <feature.icon className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <ShinyButton onClick={handleSignUpClick} className="w-full max-w-md mt-8 mb-6">
                            Start Generating a Care Plan
                        </ShinyButton>

                        <div className="flex items-center gap-2 text-brand-text-muted text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>GPGuide helps Australian GPs work smarter, faster, and stay fully compliant.</span>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative h-[500px] lg:h-auto @container group">
                        <div style={{ transform: 'translateZ(0)' }} className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500 animate-tilt"></div>
                        
                        <div className="relative w-full h-full bg-brand-surface/60 backdrop-blur-xl rounded-2xl shadow-layered-xl border border-brand-border p-6">
                            <div className="h-full flex flex-col border border-brand-border/50 rounded-lg bg-brand-surface shadow-inner-light">
                                <div className="flex items-center justify-between p-3 border-b border-brand-border/50">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                                        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                    </div>
                                    <p className="text-sm font-medium text-brand-text">Template Generator</p>
                                    <div className="w-12"></div>
                                </div>
                                <div className="flex-1 p-4 @sm:p-6 space-y-4 overflow-y-auto">
                                    <div className="bg-brand-bg/80 p-4 rounded-lg shadow-layered">
                                        <label className="block text-sm font-bold text-brand-text mb-2" htmlFor="patient-condition">Patient Condition</label>
                                        <input className="w-full px-4 py-2 bg-brand-surface border border-brand-border rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent transition" id="patient-condition" type="text" defaultValue="Type 2 Diabetes Mellitus" />
                                    </div>
                                    
                                    <div className="text-sm text-brand-text-muted px-1">
                                        <span className="font-medium">Process:</span> Input → <span className="text-brand-accent font-semibold">Generate</span> → Export
                                    </div>
                                    
                                    <div className="bg-brand-bg/80 p-4 rounded-lg shadow-layered flex flex-col items-center justify-center text-center h-40">
                                        <TextShimmer className='font-mono text-sm [--base-color:theme(colors.brand-text-muted)] [--base-gradient-color:theme(colors.brand-text)]' duration={1.5}>
                                            Generating template...
                                        </TextShimmer>
                                        <p className="text-brand-text-muted text-xs mt-2">
                                            Analyzing "Type 2 Diabetes Mellitus" input...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
