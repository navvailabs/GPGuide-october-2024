import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StyledTextarea } from '@/components/ui/StyledTextarea';
import { QuickActionButton } from '@/components/ui/QuickActionButton';
import InspiredCard from '@/components/ui/InspiredCard';
import { Button } from '@/components/ui/NewButton';

interface NDISInputs {
    diagnosis: string;
    functionalImpact: string;
    recommendedSupports: string;
}

interface NDISFormAssistProps {
    inputs: NDISInputs;
    setInputs: React.Dispatch<React.SetStateAction<NDISInputs>>;
    summary: string | null;
    setSummary: React.Dispatch<React.SetStateAction<string | null>>;
}

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const quickDiagnoses = [
    "Autism Spectrum Disorder, Level 2",
    "Intellectual Disability, Moderate",
    "Cerebral Palsy, GMFCS Level III",
    "Global Developmental Delay",
    "Spinal Cord Injury, C5 incomplete"
];

const quickFunctionalImpacts = [
    "Mobility: Requires wheelchair for community access.",
    "Self-care: Needs assistance with meal preparation and personal hygiene.",
    "Communication: Non-verbal, uses an AAC device for communication.",
    "Social Interaction: Difficulty understanding social cues, requires support in social settings.",
    "Learning: Requires modified learning materials and 1-on-1 support.",
    "Self-management: Needs prompting for all daily tasks and medication management."
];

const quickSupports = [
    "Occupational Therapy",
    "Speech Pathology",
    "Physiotherapy",
    "Psychology",
    "Support Worker for community access",
    "Behaviour Support Plan"
];

const NDISFormAssist = ({ inputs, setInputs, summary, setSummary }: NDISFormAssistProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleAddQuickAction = (field: keyof NDISInputs, value: string) => {
        setInputs(prev => {
            const items = prev[field].split('\n').map(item => item.trim()).filter(Boolean);
            if (items.includes(value)) {
                return { ...prev, [field]: items.filter(item => item !== value).join('\n') };
            } else {
                return { ...prev, [field]: [...items, value].join('\n') };
            }
        });
    };
    
    const isSelected = (field: keyof NDISInputs, value: string) => {
        return inputs[field].split('\n').map(item => item.trim()).includes(value);
    };

    const handleGenerateSummary = () => {
        setIsLoading(true);
        setSummary(null);

        setTimeout(() => {
            let summaryText = `This letter is in support of an NDIS application for my patient. `;
            summaryText += `Diagnosis: ${inputs.diagnosis || '[Primary Diagnosis]'}. `;
            summaryText += `The functional impact of this disability includes: ${inputs.functionalImpact || '[Functional Impact]'}. `;
            summaryText += `To address these challenges, the following supports are recommended: ${inputs.recommendedSupports || '[Recommended Supports]'}.`;
            
            setSummary(summaryText);
            setIsLoading(false);
        }, 1000);
    };

    const handleReset = () => {
        setInputs({ diagnosis: '', functionalImpact: '', recommendedSupports: '' });
        setSummary(null);
    };

    const handleCopy = () => {
        if (!summary) return;
        navigator.clipboard.writeText(summary).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-4xl mx-auto"
        >
            <motion.div variants={sectionVariants} className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">NDIS Form Assist</h2>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400">Generate supporting statements for NDIS applications and reviews.</p>
            </motion.div>

            <div className="space-y-8">
                <motion.section variants={sectionVariants}>
                    <InspiredCard>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300" htmlFor="diagnosis-textarea">Primary Diagnosis / Disability</label>
                        <StyledTextarea
                            id="diagnosis-textarea"
                            value={inputs.diagnosis}
                            onChange={(e) => setInputs(prev => ({ ...prev, diagnosis: e.target.value }))}
                            placeholder="e.g., Autism Spectrum Disorder, Level 2..."
                            rows={2}
                        />
                        <div className="mt-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggestions:</p>
                            <div className="flex flex-wrap gap-2">
                                {quickDiagnoses.map(item => (
                                    <QuickActionButton 
                                        key={item} 
                                        onClick={() => handleAddQuickAction('diagnosis', item)}
                                        className={cn(isSelected('diagnosis', item) && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent')}
                                    >
                                        {item}
                                    </QuickActionButton>
                                ))}
                            </div>
                        </div>
                    </InspiredCard>
                </motion.section>

                <motion.section variants={sectionVariants}>
                    <InspiredCard>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300" htmlFor="functional-impact-textarea">Functional Impact (How the disability affects daily life)</label>
                        <StyledTextarea
                            id="functional-impact-textarea"
                            value={inputs.functionalImpact}
                            onChange={(e) => setInputs(prev => ({ ...prev, functionalImpact: e.target.value }))}
                            placeholder="Describe limitations in mobility, communication, self-care, social interaction, learning, etc."
                            rows={4}
                        />
                        <div className="mt-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggestions:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {quickFunctionalImpacts.map(item => (
                                    <QuickActionButton 
                                        key={item} 
                                        onClick={() => handleAddQuickAction('functionalImpact', item)} 
                                        className={cn('w-full justify-start text-left', isSelected('functionalImpact', item) && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent')}
                                    >
                                        {item}
                                    </QuickActionButton>
                                ))}
                            </div>
                        </div>
                    </InspiredCard>
                </motion.section>

                <motion.section variants={sectionVariants}>
                    <InspiredCard>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300" htmlFor="supports-textarea">Recommended Allied Health & Other Supports</label>
                        <StyledTextarea
                            id="supports-textarea"
                            value={inputs.recommendedSupports}
                            onChange={(e) => setInputs(prev => ({ ...prev, recommendedSupports: e.target.value }))}
                            placeholder="e.g., Occupational Therapy weekly, Speech Pathology fortnightly..."
                            rows={3}
                        />
                        <div className="mt-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggestions:</p>
                            <div className="flex flex-wrap gap-2">
                                {quickSupports.map(item => (
                                    <QuickActionButton 
                                        key={item} 
                                        onClick={() => handleAddQuickAction('recommendedSupports', item)}
                                        className={cn(isSelected('recommendedSupports', item) && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent')}
                                    >
                                        {item}
                                    </QuickActionButton>
                                ))}
                            </div>
                        </div>
                    </InspiredCard>
                </motion.section>

                <motion.div variants={sectionVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
                    <Button
                        variant="primary"
                        showIcon
                        onClick={(e) => { e.preventDefault(); handleGenerateSummary(); }}
                        disabled={!inputs.diagnosis}
                        isLoading={isLoading}
                        className="w-full sm:w-auto"
                    >
                        {isLoading ? 'Generating...' : 'Generate Summary'}
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={(e) => { e.preventDefault(); handleReset(); }}
                        disabled={isLoading}
                        className="w-full sm:w-auto"
                    >
                        Reset
                    </Button>
                </motion.div>

                {summary && (
                    <motion.div variants={sectionVariants} className="border-t border-gray-200 dark:border-white/10 pt-8 mt-12">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Generated Summary</h3>
                            <button
                                onClick={handleCopy}
                                className={cn('flex items-center justify-center gap-2 h-9 px-3 bg-gray-100 dark:bg-black/20 hover:bg-gray-200 dark:hover:bg-black/40 font-semibold rounded-lg transition-all text-gray-700 dark:text-gray-300 text-sm', isCopied && 'text-success-green')}
                            >
                                {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                            </button>
                        </div>
                        <InspiredCard className="text-gray-600 dark:text-gray-300">
                            <p>{summary}</p>
                        </InspiredCard>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default NDISFormAssist;
