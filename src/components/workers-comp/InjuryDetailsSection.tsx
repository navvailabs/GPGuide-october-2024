import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { QuickActionButton } from '@/components/ui/QuickActionButton';
import { StyledTextarea } from '@/components/ui/StyledTextarea';
import InspiredCard from '@/components/ui/InspiredCard';
import { WorkersCompState } from './common';

interface InjuryDetailsSectionProps {
  state: WorkersCompState;
  setState: React.Dispatch<React.SetStateAction<WorkersCompState>>;
}

const injuryTypes = ['Strain/Sprain', 'Fracture', 'Laceration', 'Burn', 'Stress', 'Aggravation', 'Chemical', 'Other'];
const quickDiagnoses = [
    "Acute lumbar strain with muscle spasm", "Rotator cuff tendinopathy", "Lateral epicondylitis (tennis elbow)",
    "Carpal tunnel syndrome", "Knee meniscal tear", "Ankle sprain with ligament damage",
    "Major depressive disorder, moderate severity", "Adjustment disorder with work-related stress",
];

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const InjuryDetailsSection = ({ state, setState }: InjuryDetailsSectionProps) => {
    return (
        <motion.div variants={sectionVariants}>
            <InspiredCard>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Step 1: Injury Details</h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">1 / 3</span>
                </div>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Injury Type</label>
                        <div className="flex flex-wrap gap-2">
                            {injuryTypes.map(type => (
                                <QuickActionButton key={type} onClick={() => setState(s => ({ ...s, injuryType: type }))}
                                    className={cn(state.injuryType === type && '!bg-premium-gold/10 dark:!bg-premium-gold/20 !border-premium-gold !text-premium-gold')}>
                                    {type}
                                </QuickActionButton>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300" htmlFor="injury-details-textarea">What happened?</label>
                        <StyledTextarea id="injury-details-textarea" value={state.injuryDetails}
                            onChange={(e) => setState(s => ({ ...s, injuryDetails: e.target.value }))}
                            placeholder="e.g., Lifted heavy box, twisted..." rows={3} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300" htmlFor="diagnosis-textarea">Primary Diagnosis</label>
                        <StyledTextarea id="diagnosis-textarea" value={state.diagnosis}
                            onChange={(e) => setState(s => ({ ...s, diagnosis: e.target.value }))}
                            placeholder="e.g., Rotator cuff strain" rows={1} />
                        <div className="mt-2 flex flex-wrap gap-2">
                            {quickDiagnoses.map(diag => (
                                <QuickActionButton key={diag} onClick={() => setState(s => ({ ...s, diagnosis: diag }))}>
                                    {diag}
                                </QuickActionButton>
                            ))}
                        </div>
                    </div>
                </div>
            </InspiredCard>
        </motion.div>
    );
};

export default InjuryDetailsSection;
