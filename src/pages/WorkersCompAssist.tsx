import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, RefreshCw, Loader2 } from 'lucide-react';
import InspiredCard from '@/components/ui/InspiredCard';
import InjuryDetailsSection from '@/components/workers-comp/InjuryDetailsSection';
import WorkCapacitySection from '@/components/workers-comp/WorkCapacitySection';
import TreatmentPlanSection from '@/components/workers-comp/TreatmentPlanSection';
import { WorkersCompState, initialWorkersCompState } from '@/components/workers-comp/common';
import axios from 'axios';
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

        const webhookUrl = '/api/webhook-test/workers comp first';

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
            setGeneratedHtml(`<p style="color: red;">Error: ${errorMessage}</p>`);
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
                    <button onClick={handleGenerateSummary} disabled={isLoading || !state.injuryDetails}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-6 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
                        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Bot className="h-5 w-5" />}
                        {isLoading ? 'Generating...' : 'Generate Summary'}
                    </button>
                    <button onClick={handleReset} disabled={isLoading}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-6 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-white font-semibold rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                        <RefreshCw className="h-5 w-5" />
                        Reset Form
                    </button>
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
