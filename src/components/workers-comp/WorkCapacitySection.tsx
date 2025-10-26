import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { QuickActionButton } from '@/components/ui/QuickActionButton';
import { StyledTextarea } from '@/components/ui/StyledTextarea';
import InspiredCard from '@/components/ui/InspiredCard';
import { Slider } from '@/components/ui/slider';
import { WorkersCompState, CapacityStatus } from './common';

interface WorkCapacitySectionProps {
  state: WorkersCompState;
  setState: React.Dispatch<React.SetStateAction<WorkersCompState>>;
}

const restrictionsOptions = [
    'No lifting >2kg', 'No lifting >5kg', 'No lifting >10kg',
    'No overhead work', 'No repetitive work', 'No bending/twisting',
    'No prolonged stand', 'No prolonged sitting', 'No driving',
    'No keyboard work', 'No climbing/ladders', 'Frequent breaks needed'
];

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const WorkCapacitySection = ({ state, setState }: WorkCapacitySectionProps) => {
    const handleRestrictionToggle = (restriction: string) => {
        setState(s => ({
            ...s,
            restrictions: s.restrictions.includes(restriction)
                ? s.restrictions.filter(r => r !== restriction)
                : [...s.restrictions, restriction]
        }));
    };

    const CapacityButton = ({ status, icon: Icon, label }: { status: CapacityStatus, icon: React.ElementType, label: string }) => (
        <button onClick={() => setState(s => ({ ...s, capacityStatus: status }))}
            className={cn('flex-1 p-4 rounded-lg border-2 text-center transition-all',
                state.capacityStatus === status
                    ? status === 'fit' ? 'bg-green-500/10 border-green-500 text-green-500'
                    : status === 'modified' ? 'bg-amber-500/10 border-amber-500 text-amber-500'
                    : 'bg-red-500/10 border-red-500 text-red-500'
                    : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-white/30'
            )}>
            <Icon className="h-6 w-6 mx-auto mb-2" />
            <span className="font-bold text-sm">{label}</span>
        </button>
    );

    return (
        <motion.div variants={sectionVariants}>
            <InspiredCard>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Step 2: Work Capacity</h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">2 / 3</span>
                </div>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Current Work Status</label>
                        <div className="flex gap-2">
                            <CapacityButton status="fit" icon={CheckCircle} label="Fit for Normal Duties" />
                            <CapacityButton status="modified" icon={AlertTriangle} label="Fit for Modified Duties" />
                            <CapacityButton status="unfit" icon={XCircle} label="Unfit for Any Work" />
                        </div>
                    </div>

                    <AnimatePresence>
                        {(state.capacityStatus === 'modified' || state.capacityStatus === 'unfit') && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                className="space-y-6 overflow-hidden">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Physical Restrictions</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                        {restrictionsOptions.map(opt => (
                                            <QuickActionButton key={opt} onClick={() => handleRestrictionToggle(opt)}
                                                className={cn('w-full justify-start', state.restrictions.includes(opt) && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent')}>
                                                {opt}
                                            </QuickActionButton>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Max hours/day: {state.hoursPerDay}</label>
                                        <Slider defaultValue={[state.hoursPerDay]} value={[state.hoursPerDay]} onValueChange={([val]) => setState(s => ({...s, hoursPerDay: val}))} max={8} step={1} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Max days/week: {state.daysPerWeek}</label>
                                        <Slider defaultValue={[state.daysPerWeek]} value={[state.daysPerWeek]} onValueChange={([val]) => setState(s => ({...s, daysPerWeek: val}))} max={5} step={1} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300" htmlFor="suitable-duties-textarea">Suitable Duties</label>
                                    <StyledTextarea id="suitable-duties-textarea" value={state.suitableDuties}
                                        onChange={(e) => setState(s => ({ ...s, suitableDuties: e.target.value }))}
                                        placeholder="e.g., Sedentary tasks only..." rows={3} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </InspiredCard>
        </motion.div>
    );
};

export default WorkCapacitySection;
