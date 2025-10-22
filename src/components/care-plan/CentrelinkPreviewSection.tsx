import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, FileText, Table } from 'lucide-react';
import { cn } from '@/lib/utils';
import InspiredCard from '@/components/ui/InspiredCard';

interface CentrelinkPreviewSectionProps {
    statement: string | null;
}

type ViewMode = 'document' | 'table';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Generic Copy Button
const SectionCopyButton = ({ contentToCopy, className, isTable = false }: { contentToCopy: string, className?: string, isTable?: boolean }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        
        const cleanedText = contentToCopy
            .replace(/###\s*\*\*(.*?)\*\*$/gm, '$1')
            .replace(/\*\*(.*?):\*\*/g, '$1:')
            .replace(/---/g, '')
            .replace(/^- /gm, '')
            .replace(/\n\s*\n/g, '\n')
            .trim();

        navigator.clipboard.writeText(cleanedText).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <button
            onClick={handleCopy}
            className={cn(
                "flex items-center justify-center h-8 w-8 bg-gray-100/50 dark:bg-black/30 hover:bg-gray-200/70 dark:hover:bg-black/50 backdrop-blur-sm rounded-full transition-all text-gray-600 dark:text-gray-300 p-0",
                isCopied && "text-success-green bg-green-500/10 dark:bg-green-500/20",
                isTable ? "" : "absolute top-4 right-4 z-10",
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

// Helper component to parse simple markdown-like text to React elements
const SimpleMarkdownParser = ({ text }: { text: string }) => {
    const content = useMemo(() => {
        const elements: (JSX.Element | null)[] = text.split('\n').map((line, i) => {
            const trimmedLine = line.trim();
            if (trimmedLine === '') return null;
            const subHeadingMatch = trimmedLine.match(/^\*\*(.*?):\*\*$/);
            if (subHeadingMatch) {
                return <h4 key={i} className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-2 mb-1 first:mt-0">{subHeadingMatch[1].trim()}:</h4>;
            }
            if (trimmedLine === '---') {
                return <hr key={i} className="my-2 border-gray-200 dark:border-white/10" />;
            }
            if (trimmedLine.startsWith('- ')) {
                return <li key={i}>{trimmedLine.substring(2)}</li>;
            }
            return <p key={i}>{trimmedLine}</p>;
        });

        const result: React.ReactNode[] = [];
        let currentList: JSX.Element[] = [];

        elements.forEach((el, index) => {
            if (el && el.type === 'li') {
                currentList.push(el);
            } else {
                if (currentList.length > 0) {
                    result.push(<ul key={`ul-${index}`} className="list-disc list-outside pl-5 space-y-1">{currentList}</ul>);
                    currentList = [];
                }
                if (el) {
                    result.push(el);
                }
            }
        });

        if (currentList.length > 0) {
            result.push(<ul key="ul-last" className="list-disc list-outside pl-5 space-y-1">{currentList}</ul>);
        }

        return result;
    }, [text]);

    return (
        <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            {content}
        </div>
    );
};


const CentrelinkPreviewSection = ({ statement }: CentrelinkPreviewSectionProps) => {
    const [viewMode, setViewMode] = useState<ViewMode>('document');
    const [isAllCopied, setIsAllCopied] = useState(false);

    const parsedSections = useMemo(() => {
        if (!statement) return [];
        const rawSections = statement.split(/(?=###\s*\*\*)/).filter(s => s.trim());

        return rawSections.map(sectionText => {
            const lines = sectionText.trim().split('\n');
            const titleLine = lines[0] || '';
            const bodyLines = lines.slice(1);
            
            const titleMatch = titleLine.match(/^###\s*\*\*(.*?)\*\*$/);
            const title = titleMatch ? titleMatch[1].replace(/🗒️|📄|📋/g, '').trim() : 'Section';
            
            const body = bodyLines.join('\n').trim();

            return {
                id: title.replace(/\s+/g, '-'),
                title,
                body,
                fullText: `${title}\n\n${body}`
            };
        });
    }, [statement]);

    const handleCopyAll = () => {
        if (!statement) return;
        const cleanedText = statement
            .replace(/###\s*\*\*\s*(.*?)\s*\*\*/g, '\n\n--- $1 ---\n')
            .replace(/\*\*(.*?):\*\*/g, '\n$1:')
            .replace(/---/g, '--------------------------------')
            .replace(/🗒️|📄|📋/g, '')
            .replace(/  +/g, ' ')
            .trim();

        navigator.clipboard.writeText(cleanedText).then(() => {
            setIsAllCopied(true);
            setTimeout(() => setIsAllCopied(false), 2000);
        });
    };

    if (!statement?.trim()) {
        return null;
    }

    const DocumentView = () => (
        <div className="space-y-6">
            {parsedSections.map((section) => (
                <InspiredCard
                    key={section.id}
                    className="relative p-6 md:p-8"
                >
                    <SectionCopyButton contentToCopy={section.fullText} />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 pr-12">{section.title}</h3>
                    <SimpleMarkdownParser text={section.body} />
                </InspiredCard>
            ))}
        </div>
    );

    const TableView = () => (
        <InspiredCard className="p-0 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 dark:bg-white/5">
                        <tr>
                            <th className="p-3 font-medium text-left text-gray-800 dark:text-white w-[30%]">Section</th>
                            <th className="p-3 font-medium text-left text-gray-800 dark:text-white w-[60%]">Content</th>
                            <th className="p-3 font-medium text-center text-gray-800 dark:text-white w-[10%]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parsedSections.map((section) => (
                            <tr key={section.id} className="border-t border-gray-200 dark:border-white/10">
                                <td className="p-3 font-semibold text-gray-900 dark:text-gray-100 align-top">{section.title}</td>
                                <td className="p-3 align-top">
                                    <SimpleMarkdownParser text={section.body} />
                                </td>
                                <td className="p-3 align-top text-center">
                                    <SectionCopyButton contentToCopy={section.body} isTable={true} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </InspiredCard>
    );

    return (
        <motion.div 
            variants={sectionVariants} 
            className="border-t border-gray-200 dark:border-white/10 pt-8 mt-12"
        >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Generated Summary Statement</h3>
                <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-100 dark:bg-black/20 p-1 rounded-lg self-start sm:self-center">
                        <button
                            onClick={() => setViewMode('document')}
                            className={cn('flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors', viewMode === 'document' ? 'bg-white dark:bg-black text-black dark:text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10')}
                        >
                            <FileText className="h-4 w-4" />
                            <span>Document</span>
                        </button>
                        <button
                            onClick={() => setViewMode('table')}
                            className={cn('flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors', viewMode === 'table' ? 'bg-white dark:bg-black text-black dark:text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10')}
                        >
                            <Table className="h-4 w-4" />
                            <span>Table</span>
                        </button>
                    </div>
                    <button
                        onClick={handleCopyAll}
                        className={cn('flex items-center justify-center gap-2 h-9 px-3 bg-gray-100 dark:bg-black/20 hover:bg-gray-200 dark:hover:bg-black/40 font-semibold rounded-lg transition-all text-gray-700 dark:text-gray-300 text-sm', isAllCopied && 'text-success-green')}
                    >
                        {isAllCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        <span>{isAllCopied ? 'Copied!' : 'Copy All'}</span>
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={viewMode}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    {viewMode === 'document' ? <DocumentView /> : <TableView />}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default CentrelinkPreviewSection;
