import React from 'react';
import { motion } from 'framer-motion';
import { StyledTextarea } from '@/components/ui/StyledTextarea';
import InspiredCard from '@/components/ui/InspiredCard';
import { WorkersCompState } from './common';

interface InjuryDetailsSectionProps {
  state: WorkersCompState;
  setState: React.Dispatch<React.SetStateAction<WorkersCompState>>;
}

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
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300" htmlFor="injury-details-textarea">Describe the injury and mechanism</label>
                        <StyledTextarea id="injury-details-textarea" value={state.injuryDetails}
                            onChange={(e) => setState(s => ({ ...s, injuryDetails: e.target.value }))}
                            placeholder="e.g., Lifted heavy box, twisted back. Examination reveals lumbar muscle spasm..." rows={5} />
                    </div>
                </div>
            </InspiredCard>
        </motion.div>
    );
};

export default InjuryDetailsSection;
