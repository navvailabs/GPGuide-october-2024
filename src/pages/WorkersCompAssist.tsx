import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, RefreshCw, Loader2, FileText, Table, Copy, Check } from 'lucide-react';
import axios from 'axios';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

import InspiredCard from '@/components/ui/InspiredCard';
import InjuryDetailsSection from '@/components/workers-comp/InjuryDetailsSection';
import WorkCapacitySection from '@/components/workers-comp/WorkCapacitySection';
import TreatmentPlanSection from '@/components/workers-comp/TreatmentPlanSection';
import { WorkersCompState, initialWorkersCompState } from '@/components/workers-comp/common';
import { cn } from '@/lib/utils';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// --- Preview Component ---

const SectionCopyButton = ({ contentToCopy, className }: { contentToCopy: string, className?: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = contentToCopy;
        const plainText = tempDiv.innerText;

        const listener = (event: ClipboardEvent) => {
            if (event.clipboardData) {
                event.clipboardData.setData('text/html', contentToCopy);
                event.clipboardData.setData('text/plain', plainText);
                event.preventDefault();
            }
        };

        try {
            document.addEventListener('copy', listener);
            document.execCommand('copy');
            setIsCopied(true);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        } finally {
            document.removeEventListener('copy', listener);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={cn(
                "flex items-center justify-center h-8 w-8 bg-gray-100/50 dark:bg-black/30 hover:bg-gray-200/70 dark:hover:bg-black/50 backdrop-blur-sm rounded-full transition-all text-gray-600 dark:text-gray-300 p-0",
                isCopied && "text-success-green bg-green-500/10 dark:bg-green-500/20",
                className
            )}
            aria-label={isCopied ? "Copied" : "Copy section"}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={isCopied ? "check" : "copy"}
                    initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                >
                    {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

const NewWorkersCompPreview = ({ markdownContent, identifier }: { markdownContent: string | null, identifier: string }) => {
    const [viewMode, setViewMode] = useState<'document' | 'table'>('document');
    
    const { parsedSections, fullCleanHtml } = useMemo(() => {
        if (!markdownContent) return { parsedSections: [], fullCleanHtml: '' };
        
        const dirtyHtml = marked.parse(markdownContent) as string;
        const cleanHtml = DOMPurify.sanitize(dirtyHtml, { USE_PROFILES: { html: true } });

        const parser = new DOMParser();
        const doc = parser.parseFromString(`<div>${cleanHtml}</div>`, 'text/html');
        const nodes = Array.from(doc.body.firstElementChild?.children || []);
        if (nodes.length === 0) {
            return { parsedSections: [], fullCleanHtml: cleanHtml };
        }

        const sectionGroups: Element[][] = [];
        let currentGroup: Element[] = [];

        nodes.forEach(node => {
            if ((node.tagName === 'H2' || node.tagName === 'H3') && currentGroup.length > 0) {
                sectionGroups.push(currentGroup);
                currentGroup = [node];
            } else {
                currentGroup.push(node);
            }
        });
        if (currentGroup.length > 0) {
            sectionGroups.push(currentGroup);
        }

        const sections = sectionGroups.map((group, index) => {
            const titleNode = group.find(n => n.tagName === 'H2' || n.tagName === 'H3');
            const title = titleNode?.textContent || `Section ${index + 1}`;
            
            const contentNodes = titleNode ? group.filter(n => n !== titleNode) : group;
            const contentHtml = contentNodes.map(n => n.outerHTML).join('');
            
            const sectionHtml = group.map(n => n.outerHTML).join('');

            return { id: `${index}-${title.replace(/\s+/g, '-')}`, title, contentHtml, sectionHtml };
        });

        return { parsedSections: sections, fullCleanHtml: cleanHtml };
    }, [markdownContent]);

    const handleDownloadWord = () => {
        if (!markdownContent) return;
        const generatedDate = new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
        const styledCarePlanHtml = DOMPurify.sanitize(marked.parse(markdownContent) as string);

        const fullHtml = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><title>Workers Compensation Summary</title>
            <style>
                body { font-family: "Calibri", "sans-serif"; font-size: 11pt; color: #333333; }
                p { margin: 0 0 8pt 0; line-height: 1.15; }
                h2, h3 { font-family: "Calibri Light", "sans-serif"; color: #2F5496; margin: 12pt 0 6pt 0; border-bottom: 1px solid #A9C4E9; padding-bottom: 3pt; }
                h2 { font-size: 16pt; } h3 { font-size: 13pt; font-weight: bold; }
                ul { margin-top: 0; margin-bottom: 0; padding-left: 20px; } li { margin-bottom: 4pt; }
            </style>
            </head>
            <body><div>
            <p style='font-size:24pt; font-family:"Calibri Light", "sans-serif"; color:#1F4E79; text-align:center;'>Workers Compensation Summary</p>
            <p style='text-align:center; font-size:10pt; color:#595959; margin-bottom:24pt;'>Generated on ${generatedDate}</p>
            ${styledCarePlanHtml}
            </div></body></html>`;
        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(fullHtml);
        const fileDownloadLink = document.createElement("a");
        document.body.appendChild(fileDownloadLink);
        fileDownloadLink.href = source;
        fileDownloadLink.download = 'Workers-Comp-Summary.doc';
        fileDownloadLink.click();
        document.body.removeChild(fileDownloadLink);
    };

    const DocumentView = ({ html }: { html: string }) => (
        <InspiredCard className="relative prose dark:prose-invert max-w-none p-6 md:p-8">
            <SectionCopyButton contentToCopy={html} className="absolute top-4 right-4 z-10" />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </InspiredCard>
    );

    const TableView = ({ sections }: { sections: { id: string; title: string; contentHtml: string; sectionHtml: string; }[] }) => (
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-gray-800/30 shadow-lg">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 dark:bg-white/5">
                    <tr>
                        <th className="p-4 font-semibold text-gray-800 dark:text-white w-1/3">Section</th>
                        <th className="p-4 font-semibold text-gray-800 dark:text-white w-2/3">Content</th>
                    </tr>
                </thead>
                <tbody>
                    {sections.map((section) => {
                        const isSeparator = section.contentHtml.trim() === '' && section.title === section.title.toUpperCase();

                        if (isSeparator) {
                            return (
                                <tr key={section.id}>
                                    <td colSpan={2} className="p-0">
                                        <div className="py-3 px-4 my-1 bg-black/20 dark:bg-white/5 backdrop-blur-md border-y border-white/10">
                                            <h3 className="text-base font-bold tracking-widest uppercase text-cyan-400 dark:text-cyan-300 text-center">{section.title}</h3>
                                        </div>
                                    </td>
                                </tr>
                            );
                        }

                        return (
                            <tr key={section.id} className="border-t border-gray-200 dark:border-white/10">
                                <td className="p-4 align-top font-semibold text-gray-900 dark:text-gray-100">{section.title}</td>
                                <td className="p-4 align-top">
                                    <div 
                                        className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-400"
                                        dangerouslySetInnerHTML={{ __html: section.contentHtml }}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

    if (!markdownContent) return null;

    return (
        <motion.div key={identifier} variants={sectionVariants}>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Generated Summary Preview</h3>
                <div className="flex items-center bg-gray-100 dark:bg-black/20 p-1 rounded-lg self-start sm:self-center">
                    <button onClick={() => setViewMode('document')} className={cn('flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors', viewMode === 'document' ? 'bg-white dark:bg-black text-black dark:text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10')}>
                        <FileText className="h-4 w-4" /><span>Document</span>
                    </button>
                    <button onClick={() => setViewMode('table')} className={cn('flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors', viewMode === 'table' ? 'bg-white dark:bg-black text-black dark:text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10')}>
                        <Table className="h-4 w-4" /><span>Table</span>
                    </button>
                </div>
            </div>
            <motion.div layout transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}>
                <AnimatePresence initial={false} mode="wait">
                    <motion.div key={`${identifier}-${viewMode}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25, ease: "easeOut" }}>
                        {viewMode === 'document' ? <DocumentView html={fullCleanHtml} /> : <TableView sections={parsedSections} />}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
            <div className="mt-8 flex flex-wrap justify-end gap-4">
                <button onClick={handleDownloadWord} className="flex items-center justify-center gap-2 h-10 px-4 bg-gray-100 dark:bg-black/20 hover:bg-gray-200 dark:hover:bg-black/40 font-semibold rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                    <FileText className="h-4 w-4" /> Download as Word
                </button>
            </div>
        </motion.div>
    );
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
                           <NewWorkersCompPreview markdownContent={generatedHtml} identifier="workers-comp-summary" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default WorkersCompAssist;
