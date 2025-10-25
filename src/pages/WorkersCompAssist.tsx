import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, RefreshCw, Loader2, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import InspiredCard from '@/components/ui/InspiredCard';
import InjuryDetailsSection from '@/components/workers-comp/InjuryDetailsSection';
import WorkCapacitySection from '@/components/workers-comp/WorkCapacitySection';
import TreatmentPlanSection from '@/components/workers-comp/TreatmentPlanSection';
import { WorkersCompState, initialWorkersCompState } from '@/components/workers-comp/common';
import axios from 'axios';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const SummaryCopyButton = ({ contentToCopy }: { contentToCopy: string }) => {
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
            className={cn('flex items-center justify-center gap-2 h-9 px-3 bg-gray-100 dark:bg-black/20 hover:bg-gray-200 dark:hover:bg-black/40 font-semibold rounded-lg transition-all text-gray-700 dark:text-gray-300 text-sm',
                isCopied && "text-success-green"
            )}
            aria-label={isCopied ? "Copied" : "Copy summary"}>
            <AnimatePresence mode="wait">
                <motion.div key={isCopied ? "check" : "copy"} initial={{ scale: 0.5, opacity: 0, rotate: -45 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} exit={{ scale: 0.5, opacity: 0, rotate: 45 }} transition={{ duration: 0.2 }}>
                    {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </motion.div>
            </AnimatePresence>
            <span>{isCopied ? 'Copied!' : 'Copy Summary'}</span>
        </button>
    );
};

const WorkersCompAssist = () => {
    const [state, setState] = useState<WorkersCompState>(initialWorkersCompState);
    const [generatedSummary, setGeneratedSummary] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateSummary = async () => {
        setIsLoading(true);
        setGeneratedSummary(null);

        const webhookUrl = '/api/webhook-test/workers comp first';

        try {
            const response = await axios.post(webhookUrl, state);
            
            let responseData = response.data;
            let finalSummary = 'Could not extract summary from webhook response.';

            if (typeof responseData === 'string') {
                finalSummary = responseData;
            } else if (typeof responseData === 'object' && responseData !== null) {
                const priorityKeys = ['output', 'summary', 'content', 'message', 'text'];
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
            
            setGeneratedSummary(finalSummary);

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
            setGeneratedSummary(`Error: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setState(initialWorkersCompState);
        setGeneratedSummary(null);
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
                    {generatedSummary && (
                        <motion.div variants={sectionVariants} className="border-t border-gray-200 dark:border-white/10 pt-8 mt-12">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">📄 Generated Summary</h3>
                                <SummaryCopyButton contentToCopy={generatedSummary} />
                            </div>
                            <InspiredCard className="relative p-6">
                                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{generatedSummary}</p>
                            </InspiredCard>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default WorkersCompAssist;
