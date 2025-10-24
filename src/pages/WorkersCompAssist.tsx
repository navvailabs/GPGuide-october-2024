import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, Loader2, Copy, Check, ChevronDown, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import InspiredCard from '@/components/ui/InspiredCard';
import InjuryDetailsSection from '@/components/workers-comp/InjuryDetailsSection';
import WorkCapacitySection from '@/components/workers-comp/WorkCapacitySection';
import TreatmentPlanSection from '@/components/workers-comp/TreatmentPlanSection';
import { WorkersCompState, initialWorkersCompState, shoulderStrainScenario, backPainScenario } from '@/components/workers-comp/common';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface GeneratedSection {
    title: string;
    content: string;
}

const SectionCopyButton = ({ contentToCopy }: { contentToCopy: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(contentToCopy).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <button onClick={handleCopy}
            className={cn('absolute top-4 right-4 flex items-center justify-center h-8 w-8 bg-gray-100/50 dark:bg-black/30 hover:bg-gray-200/70 dark:hover:bg-black/50 backdrop-blur-sm rounded-full transition-all text-gray-600 dark:text-gray-300 p-0',
                isCopied && "text-success-green bg-green-500/10 dark:bg-green-500/20"
            )}
            aria-label={isCopied ? "Copied" : "Copy section"}>
            <AnimatePresence mode="wait">
                <motion.div key={isCopied ? "check" : "copy"} initial={{ scale: 0.5, opacity: 0, rotate: -45 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} exit={{ scale: 0.5, opacity: 0, rotate: 45 }} transition={{ duration: 0.2 }}>
                    {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

const WorkersCompAssist = () => {
    const [state, setState] = useState<WorkersCompState>(initialWorkersCompState);
    const [generatedSections, setGeneratedSections] = useState<GeneratedSection[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isScenarioMenuOpen, setIsScenarioMenuOpen] = useState(false);

    const handleGenerateSummary = () => {
        setIsLoading(true);
        setGeneratedSections(null);

        setTimeout(() => {
            const injurySection = `Diagnosis: ${state.diagnosis || '[Not specified]'}. This is a ${state.injuryType || 'injury'}. Mechanism: ${state.injuryDetails || '[Not specified]'}.`;
            
            let capacitySection = '';
            if (state.capacityStatus === 'fit') {
                capacitySection = 'Patient is fit to resume normal duties.';
            } else if (state.capacityStatus === 'unfit') {
                capacitySection = `Patient is unfit for any work. Review in ${state.reviewIn}.`;
            } else {
                capacitySection = `Patient has capacity for modified duties. Restrictions: ${state.restrictions.join(', ') || 'as discussed'}. Can work ${state.hoursPerDay} hours/day, ${state.daysPerWeek} days/week. Suitable duties include: ${state.suitableDuties || 'sedentary tasks'}. Review in ${state.reviewIn}.`;
            }

            const treatmentSection = `Current treatment plan includes: ${state.medications.join(', ') || 'Analgesia as required'}. Referrals: ${state.referrals.join(', ') || 'None'}. Investigations: ${state.investigations.join(', ') || 'None'}. Other interventions: ${state.interventions.join(', ') || 'None'}. Follow-up in ${state.followUp}.`;

            setGeneratedSections([
                { title: 'Injury Details & Diagnosis', content: injurySection },
                { title: 'Work Capacity', content: capacitySection },
                { title: 'Treatment Plan', content: treatmentSection },
            ]);
            setIsLoading(false);
        }, 1000);
    };

    const handleReset = () => {
        setState(initialWorkersCompState);
        setGeneratedSections(null);
    };

    const handleScenarioSelect = (scenario: Partial<WorkersCompState>) => {
        setState(s => ({ ...initialWorkersCompState, ...scenario }));
        setIsScenarioMenuOpen(false);
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-4xl mx-auto">
            <motion.div variants={sectionVariants} className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Workers Compensation Assist</h2>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400">Quickly generate statements for Certificates of Capacity.</p>
            </motion.div>

            <motion.div variants={sectionVariants} className="mb-8 relative inline-block text-left">
                <div>
                    <button type="button" onClick={() => setIsScenarioMenuOpen(!isScenarioMenuOpen)}
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-white/20 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-premium-gold"
                        id="options-menu" aria-haspopup="true" aria-expanded="true">
                        ⚡ Common Scenarios
                        <ChevronDown className="-mr-1 ml-2 h-5 w-5" />
                    </button>
                </div>
                <AnimatePresence>
                {isScenarioMenuOpen && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.1 }}
                        className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleScenarioSelect(shoulderStrainScenario); }} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">🫱 Simple Shoulder Strain</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleScenarioSelect(backPainScenario); }} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">🫨 Back Pain (Lifting Injury)</a>
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.div>

            <div className="space-y-8">
                <InjuryDetailsSection state={state} setState={setState} />
                <WorkCapacitySection state={state} setState={setState} />
                <TreatmentPlanSection state={state} setState={setState} />

                <motion.div variants={sectionVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
                    <button onClick={handleGenerateSummary} disabled={isLoading || !state.diagnosis}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-6 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
                        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Bot className="h-5 w-5" />}
                        {isLoading ? 'Generating...' : 'Generate Certificate Text'}
                    </button>
                    <button onClick={handleReset} disabled={isLoading}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-6 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-white font-semibold rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                        <RefreshCw className="h-5 w-5" />
                        Reset Form
                    </button>
                </motion.div>

                <AnimatePresence>
                    {generatedSections && (
                        <motion.div variants={sectionVariants} className="border-t border-gray-200 dark:border-white/10 pt-8 mt-12">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">📄 Generated Certificate</h3>
                            <div className="space-y-4">
                                {generatedSections.map((section, index) => (
                                    <InspiredCard key={index} className="relative p-6">
                                        <SectionCopyButton contentToCopy={section.content} />
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 pr-10">{section.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-300">{section.content}</p>
                                    </InspiredCard>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default WorkersCompAssist;
