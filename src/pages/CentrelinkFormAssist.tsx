import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StyledTextarea } from '@/components/ui/StyledTextarea';
import { QuickActionButton } from '@/components/ui/QuickActionButton';
import InspiredCard from '@/components/ui/InspiredCard';
import axios from 'axios';
import FormattedWebhookOutput from '@/components/ui/FormattedWebhookOutput';
import { Button } from '@/components/ui/NewButton';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const quickClinicalInfo = [
    "Acute lumbar strain with muscle spasm",
    "Major depressive disorder, moderate severity",
    "Rotator cuff tendinopathy",
    "Acute exacerbation of chronic anxiety disorder",
    "Post-operative recovery",
    "Cervical spondylosis with radiculopathy"
];

const quickFunctionalImpacts = [
    "Cannot sit >20 mins, standing limited to 15 mins, unable to lift >5kg, driving difficult",
    "Poor concentration, social withdrawal, unable to manage work deadlines, sleep disturbance",
    "Unable to reach overhead, difficulty with keyboard use, pain limits sustained tasks",
    "Panic attacks in workplace, avoidance of public spaces, difficulty leaving home",
    "Post-surgical pain, wound healing restrictions, no heavy lifting for 6 weeks",
    "Severe fatigue limiting daily activities to <4 hours, frequent rest required"
];

const quickTreatments = [
    "Currently: NSAIDs, heat therapy. Planned: Physio 2x/week. Expected recovery: 3-4 weeks",
    "Currently: Rest, modified duties. Planned: Exercise physiology. Expected: 6-8 weeks recovery",
    "Currently: CBT weekly. Crisis plan in place. Review 2 weeks",
    "Post-op Day 5, wound care, analgesia. RTW 4-6 weeks",
    "Supportive care, rest, fluids. Expected resolution 7-10 days"
];

const CentrelinkFormAssist = () => {
    const [clinicalInformation, setClinicalInformation] = useState('');
    const [functionalImpact, setFunctionalImpact] = useState('');
    const [treatmentPlan, setTreatmentPlan] = useState('');
    const [statement, setStatement] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleAddClinicalInfo = (infoToAdd: string) => {
        setClinicalInformation(prev => {
            const items = prev.split('\n').map(item => item.trim()).filter(Boolean);
            if (items.includes(infoToAdd)) {
                return items.filter(item => item !== infoToAdd).join('\n');
            } else {
                return [...items, infoToAdd].join('\n');
            }
        });
    };

    const isClinicalInfoSelected = (info: string) => {
        return clinicalInformation.split('\n').map(item => item.trim()).includes(info);
    };

    const handleAddFunctionalImpact = (impactToAdd: string) => {
        setFunctionalImpact(prev => {
            const items = prev.split('\n').map(item => item.trim()).filter(Boolean);
            if (items.includes(impactToAdd)) {
                return items.filter(item => item !== impactToAdd).join('\n');
            } else {
                return [...items, impactToAdd].join('\n');
            }
        });
    };

    const isFunctionalImpactSelected = (impact: string) => {
        return functionalImpact.split('\n').map(item => item.trim()).includes(impact);
    };

    const handleAddTreatment = (treatmentToAdd: string) => {
        setTreatmentPlan(prev => {
            const items = prev.split('\n').map(item => item.trim()).filter(Boolean);
            if (items.includes(treatmentToAdd)) {
                return items.filter(item => item !== treatmentToAdd).join('\n');
            } else {
                return [...items, treatmentToAdd].join('\n');
            }
        });
    };

    const isTreatmentSelected = (treatment: string) => {
        return treatmentPlan.split('\n').map(item => item.trim()).includes(treatment);
    };

    const handleGenerateSummary = async () => {
        setIsLoading(true);
        setStatement(null);

        const payload = {
            clinicalInformation,
            functionalImpact,
            treatmentPlan,
        };

        const webhookUrl = 'https://n8n.srv1072529.hstgr.cloud/webhook/2974a87a-53fe-4402-9316-ad2c4d500d18';

        try {
            const response = await axios.post(webhookUrl, payload);
            
            let responseData = response.data;
            let finalStatement = 'Could not extract statement from webhook response.';

            if (typeof responseData === 'string') {
                finalStatement = responseData;
            } else if (typeof responseData === 'object' && responseData !== null) {
                const keys = Object.keys(responseData);
                if (keys.length > 0 && typeof responseData[keys[0]] === 'string') {
                    finalStatement = responseData[keys[0]];
                } else {
                    finalStatement = JSON.stringify(responseData, null, 2);
                }
            }
            
            setStatement(finalStatement);

        } catch (error) {
            console.error('Error fetching statement from webhook:', error);
            let errorMessage = 'An error occurred while generating the statement.';
            if (axios.isAxiosError(error)) {
                if (!error.response) {
                    errorMessage = 'A network error occurred. This could be a CORS issue. Please check the browser console.';
                } else {
                    errorMessage = `The server responded with an error: ${error.response.status} ${error.response.statusText}.`;
                }
            }
            setStatement(`Error: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setClinicalInformation('');
        setFunctionalImpact('');
        setTreatmentPlan('');
        setStatement(null);
    };

    const handleCopy = () => {
        if (!statement) return;
        
        const cleanedText = statement
            .replace(/###\s*\*\*\s*(.*?)\s*\*\*/g, '\n\n--- $1 ---\n')
            .replace(/\*\*(.*?):\*\*/g, '\n$1:')
            .replace(/---/g, '--------------------------------')
            .replace(/🗒️|📄|📋/g, '')
            .replace(/  +/g, ' ')
            .trim();

        const textArea = document.createElement('textarea');
        textArea.value = cleanedText;
        textArea.style.position = 'fixed';
        textArea.style.top = '-9999px';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text.');
        }
        document.body.removeChild(textArea);
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Centrelink SU415 Form Assist</h2>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400">Generate key statements for the Centrelink Medical Certificate (SU415).</p>
            </motion.div>

            <div className="space-y-8">
                <motion.section variants={sectionVariants}>
                    <InspiredCard>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300" htmlFor="clinical-info-textarea">Clinical information</label>
                        <StyledTextarea
                            id="clinical-info-textarea"
                            value={clinicalInformation}
                            onChange={(e) => setClinicalInformation(e.target.value)}
                            placeholder="Enter diagnosis, presenting symptoms, and relevant clinical findings..."
                            rows={3}
                        />
                        <div className="mt-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggestions:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {quickClinicalInfo.map(info => (
                                    <QuickActionButton
                                        key={info}
                                        onClick={() => handleAddClinicalInfo(info)}
                                        className={cn(
                                            'w-full justify-start text-left',
                                            isClinicalInfoSelected(info) && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent'
                                        )}
                                    >
                                        {info}
                                    </QuickActionButton>
                                ))}
                            </div>
                        </div>
                    </InspiredCard>
                </motion.section>

                <motion.section variants={sectionVariants}>
                    <InspiredCard>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300" htmlFor="functional-impact-textarea">Functional Impact</label>
                        <StyledTextarea
                            id="functional-impact-textarea"
                            value={functionalImpact}
                            onChange={(e) => setFunctionalImpact(e.target.value)}
                            placeholder="Describe impact on daily activities, work capacity, etc."
                            rows={4}
                        />
                        <div className="mt-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggestions:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {quickFunctionalImpacts.map(impact => (
                                    <QuickActionButton
                                        key={impact}
                                        onClick={() => handleAddFunctionalImpact(impact)}
                                        className={cn(
                                            'w-full justify-start text-left',
                                            isFunctionalImpactSelected(impact) && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent'
                                        )}
                                    >
                                        {impact}
                                    </QuickActionButton>
                                ))}
                            </div>
                        </div>
                    </InspiredCard>
                </motion.section>

                <motion.section variants={sectionVariants}>
                    <InspiredCard>
                        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300" htmlFor="treatment-plan-textarea">Treatment Plan & Prognosis</label>
                        <StyledTextarea
                            id="treatment-plan-textarea"
                            value={treatmentPlan}
                            onChange={(e) => setTreatmentPlan(e.target.value)}
                            placeholder="Outline current treatments, referrals, and expected prognosis..."
                            rows={3}
                        />
                        <div className="mt-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggestions:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {quickTreatments.map(treatment => (
                                    <QuickActionButton
                                        key={treatment}
                                        onClick={() => handleAddTreatment(treatment)}
                                        className={cn(
                                            'w-full justify-start text-left',
                                            isTreatmentSelected(treatment) && '!bg-brand-accent/10 dark:!bg-brand-accent/20 !border-brand-accent !text-brand-accent'
                                        )}
                                    >
                                        {treatment}
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
                        disabled={!clinicalInformation}
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

                {statement && (
                    <motion.div variants={sectionVariants} className="border-t border-gray-200 dark:border-white/10 pt-8 mt-12">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Generated Summary Statement</h3>
                        </div>
                        <FormattedWebhookOutput content={statement} />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default CentrelinkFormAssist;
