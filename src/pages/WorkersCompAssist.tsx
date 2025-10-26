import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot } from 'lucide-react';
import axios from 'axios';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

import InspiredCard from '@/components/ui/InspiredCard';
import InjuryDetailsSection from '@/components/workers-comp/InjuryDetailsSection';
import WorkCapacitySection from '@/components/workers-comp/WorkCapacitySection';
import TreatmentPlanSection from '@/components/workers-comp/TreatmentPlanSection';
import { WorkersCompState, initialWorkersCompState } from '@/components/workers-comp/common';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/NewButton';
import WorkersCompPreviewSection from '@/components/workers-comp/WorkersCompPreviewSection';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const WorkersCompAssist = () => {
    const [state, setState] = useState<WorkersCompState>(initialWorkersCompState);
    const [generatedHtml, setGeneratedHtml] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateSummary = async () => {
        setIsLoading(true);
        setGeneratedHtml(null);

        const webhookUrl = 'https://n8n.srv1072529.hstgr.cloud/webhook/workers%20comp%20first';

        try {
            const response = await axios.post(webhookUrl, state);
            
            let responseData = response.data;
            let finalSummary = 'Could not extract summary from webhook response.';

            if (typeof responseData === 'string') {
                finalSummary = responseData;
            } else if (typeof responseData === 'object' && responseData !== null) {
                const priorityKeys = ['output', 'summary', 'content', 'message', 'text', 'html'];
                let found = false;
                for (const key of priorityKeys) {
                    if (typeof responseData[key] === 'string') {
                        finalSummary = responseData[key];
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    const keys = Object.keys(responseData);
                    if (keys.length > 0 && typeof responseData[keys[0]] === 'string') {
                        finalSummary = responseData[keys[0]];
                    } else {
                        finalSummary = JSON.stringify(responseData, null, 2);
                    }
                }
            }
            
            setGeneratedHtml(finalSummary);

        } catch (error) {
            console.error('Error fetching summary from webhook:', error);
            let errorMessage = 'An error occurred while generating the summary.';
            if (axios.isAxiosError(error)) {
                if (!error.response) {
                    errorMessage = 'A network error occurred. This could be a CORS issue. Please check the browser console.';
                } else {
                    errorMessage = `The server responded with an error: ${error.response.status} ${error.response.statusText}.`;
                }
            }
            setGeneratedHtml(`<h2>Error</h2><p>${errorMessage}</p>`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setState(initialWorkersCompState);
        setGeneratedHtml(null);
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-4xl mx-auto">
            <motion.div variants={sectionVariants} className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Workers Compensation Assist</h2>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400">Quickly generate statements for Certificates of Capacity.</p>
            </motion.div>

            <div className="space-y-8">
                <InjuryDetailsSection state={state} setState={setState} />
                <WorkCapacitySection state={state} setState={setState} />
                <TreatmentPlanSection state={state} setState={setState} />

                <motion.div variants={sectionVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
                    <Button
                        variant="primary"
                        showIcon
                        onClick={(e) => { e.preventDefault(); handleGenerateSummary(); }}
                        disabled={!state.injuryDetails}
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
                        Reset Form
                    </Button>
                </motion.div>

                <AnimatePresence>
                    {generatedHtml && (
                        <motion.div variants={sectionVariants} className="border-t border-gray-200 dark:border-white/10 pt-8 mt-12">
                           <WorkersCompPreviewSection carePlanHtml={generatedHtml} identifier="workers-comp-summary" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default WorkersCompAssist;
