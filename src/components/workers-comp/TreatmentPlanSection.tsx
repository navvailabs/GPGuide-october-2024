import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { QuickActionButton } from '@/components/ui/QuickActionButton';
import { StyledTextarea } from '@/components/ui/StyledTextarea';
import InspiredCard from '@/components/ui/InspiredCard';
import { WorkersCompState } from './common';
import { Badge } from '@/components/ui/badge';

interface TreatmentPlanSectionProps {
  state: WorkersCompState;
  setState: React.Dispatch<React.SetStateAction<WorkersCompState>>;
}

const quickMeds = ['Paracetamol 1g TDS/QID', 'Ibuprofen 400mg TDS', 'Celecoxib BD', 'Pregabalin', 'Amitriptyline'];
const referralOptions = ['Physiotherapy', 'Occupational Therapy', 'Orthopaedic Surgeon', 'Pain Specialist', 'Psychiatrist/Psychologist', 'Rehabilitation Program'];
const investigationOptions = ['X-ray', 'MRI', 'CT scan', 'Ultrasound', 'Blood tests', 'Nerve studies'];
const interventionOptions = ['Rest & activity modification', 'Ice therapy', 'Heat therapy', 'Compression/Splinting', 'Gentle exercises', 'Wound care'];
const followUpOptions = ['1 week', '2 weeks', '4 weeks', '6 weeks'];

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const TreatmentPlanSection = ({ state, setState }: TreatmentPlanSectionProps) => {
    const [customMed, setCustomMed] = useState('');

    const handleToggleList = (field: keyof WorkersCompState, value: string) => {
        setState(s => {
            const list = s[field] as string[];
            return {
                ...s,
                [field]: list.includes(value) ? list.filter(item => item !== value) : [...list, value]
            };
        });
    };

    const handleAddMedication = (med: string) => {
        if (med.trim() && !state.medications.includes(med.trim())) {
            setState(s => ({ ...s, medications: [...s.medications, med.trim()] }));
        }
    };
    
    const handleRemoveMedication = (medToRemove: string) => {
        setState(s => ({ ...s, medications: s.medications.filter(med => med !== medToRemove) }));
    };

    return (
        <motion.div variants={sectionVariants}>
            <InspiredCard>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Step 3: Treatment Plan</h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">3 / 3</span>
                </div>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Medications</label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {quickMeds.map(med => (
                                <QuickActionButton key={med} onClick={() => handleAddMedication(med)}>
                                    + {med}
                                </QuickActionButton>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <StyledTextarea value={customMed} onChange={e => setCustomMed(e.target.value)} placeholder="Custom medication..." rows={1} className="flex-grow !py-2" />
                            <QuickActionButton onClick={() => { handleAddMedication(customMed); setCustomMed(''); }} className="!px-4">Add</QuickActionButton>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {state.medications.map(med => (
                                <Badge key={med} variant="secondary" className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                                    {med}
                                    <button onClick={() => handleRemoveMedication(med)} className="rounded-full hover:bg-black/10 dark:hover:bg-white/10 p-0.5">
                                        <X className="h-3 w-3" />
                                    </button>
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Referrals</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {referralOptions.map(opt => (
                                <QuickActionButton key={opt} onClick={() => handleToggleList('referrals', opt)}
                                    className={cn('w-full justify-start', state.referrals.includes(opt) && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent')}>
                                    {opt}
                                </QuickActionButton>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Investigations</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {investigationOptions.map(opt => (
                                <QuickActionButton key={opt} onClick={() => handleToggleList('investigations', opt)}
                                    className={cn('w-full justify-start', state.investigations.includes(opt) && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent')}>
                                    {opt}
                                </QuickActionButton>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Other Treatments</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {interventionOptions.map(opt => (
                                <QuickActionButton key={opt} onClick={() => handleToggleList('interventions', opt)}
                                    className={cn('w-full justify-start', state.interventions.includes(opt) && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent')}>
                                    {opt}
                                </QuickActionButton>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Follow-up</label>
                        <div className="flex flex-wrap gap-2">
                            {followUpOptions.map(opt => (
                                <QuickActionButton key={opt} onClick={() => setState(s => ({ ...s, followUp: opt }))}
                                    className={cn(state.followUp === opt && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent')}>
                                    {opt}
                                </QuickActionButton>
                            ))}
                        </div>
                    </div>
                </div>
            </InspiredCard>
        </motion.div>
    );
};

export default TreatmentPlanSection;
