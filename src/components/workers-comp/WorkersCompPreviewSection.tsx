import React, { useState, useMemo } from 'react';
import { FileText, Copy, Check, Table } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface WorkersCompPreviewSectionProps {
    carePlanHtml: string | null;
    identifier: string;
}

type ViewMode = 'document' | 'table';

// Configure marked for robust parsing
marked.setOptions({
    gfm: true, // Enable GitHub Flavored Markdown
    breaks: true, // Convert single line breaks into <br>
});

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const viewVariants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
};

const parseMarkdownSections = (markdown: string | null) => {
    if (!markdown) return [];
    const sections: { title: string; content: string }[] = [];
    // Split by H2 or H3 markdown headings
    const rawSections = markdown.split(/(?=#{2,3}\s)/g).filter(s => s.trim());

    if (rawSections.length > 0) {
        rawSections.forEach(rawSection => {
            const lines = rawSection.trim().split('\n');
            const mainHeadingMatch = lines[0].match(/^(#{2,3})\s+(.*)/);
            
            if (mainHeadingMatch) {
                const title = mainHeadingMatch[2].replace(/\*\*/g, '').trim();
                const content = lines.slice(1).join('\n');
                sections.push({ title, content });
            } else {
                sections.push({ title: 'Details', content: rawSection });
            }
        });
    } else if (markdown) {
        return [{ title: 'Generated Summary', content: markdown }];
    }

    return sections;
};

const DocumentView = ({ htmlString }: { htmlString: string }) => {
    const sanitizedHtml = useMemo(() => {
        if (!htmlString) return '';
        const dirtyHtml = marked.parse(htmlString) as string;
        return DOMPurify.sanitize(dirtyHtml);
    }, [htmlString]);

    return (
        <div className="bg-white dark:bg-gray-800/30 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200 dark:border-white/10">
            <div
                className="prose prose-lg dark:prose-invert max-w-none prose-h2:font-satoshi prose-h2:text-2xl prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 prose-h2:dark:border-white/10 prose-h3:text-xl prose-h3:font-semibold prose-h4:text-base prose-h4:font-semibold"
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />
        </div>
    );
};

const TableView = ({ htmlString }: { htmlString: string }) => {
    const sections = useMemo(() => parseMarkdownSections(htmlString), [htmlString]);
    
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/30">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 dark:bg-white/5">
                    <tr>
                        <th className="p-3 font-medium text-gray-800 dark:text-white w-1/3">Section</th>
                        <th className="p-3 font-medium text-gray-800 dark:text-white w-2/3">Content</th>
                    </tr>
                </thead>
                <tbody>
                    {sections.map((section, i) => {
                        const isSeparator = section.content.trim() === '' && section.title === section.title.toUpperCase();

                        if (isSeparator) {
                            return (
                                <tr key={i} className="border-t border-gray-200 dark:border-white/10">
                                    <td colSpan={2} className="p-0">
                                        <div className="my-2">
                                            <div className="px-3 py-2 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent backdrop-blur-sm border-y border-cyan-400/20">
                                                <h3 className="text-sm font-bold tracking-wider uppercase text-cyan-300 text-center">{section.title}</h3>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        }

                        return (
                            <tr key={i} className="border-t border-gray-200 dark:border-white/10">
                                <td className="p-3 align-top font-semibold text-gray-900 dark:text-gray-100">{section.title}</td>
                                <td className="p-3 align-top">
                                    <div 
                                        className="prose prose-sm dark:prose-invert max-w-none"
                                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(section.content) as string) }}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const WorkersCompPreviewSection = ({ carePlanHtml, identifier }: WorkersCompPreviewSectionProps) => {
    const [viewMode, setViewMode] = useState<ViewMode>('document');
    const [isCopied, setIsCopied] = useState(false);

    if (!carePlanHtml?.trim()) {
        return null;
    }

    const handleCopyAll = () => {
        if (!carePlanHtml) return;

        const dirtyHtml = marked.parse(carePlanHtml) as string;
        const sanitizedHtml = DOMPurify.sanitize(dirtyHtml);

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = sanitizedHtml;
        const plainText = tempDiv.innerText;

        const blobHtml = new Blob([sanitizedHtml], { type: 'text/html' });
        const blobText = new Blob([plainText], { type: 'text/plain' });
        const clipboardItem = new ClipboardItem({
            'text/html': blobHtml,
            'text/plain': blobText,
        });

        navigator.clipboard.write([clipboardItem]).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => {
            console.error('Failed to copy rich text. Falling back to plain text.', err);
            navigator.clipboard.writeText(plainText).then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            });
        });
    };

    const handleDownloadWord = () => {
        if (!carePlanHtml) return;
        const generatedDate = new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
        
        const styledCarePlanHtml = marked.parse(carePlanHtml) as string;

        const fullHtml = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><title>Workers Compensation Summary</title>
            <style>
                body { font-family: "Calibri", "sans-serif"; font-size: 11pt; color: #333333; }
                p { margin: 0 0 8pt 0; line-height: 1.15; }
                h2 { font-family: "Calibri Light", "sans-serif"; font-size: 16pt; color: #2F5496; margin: 24pt 0 6pt 0; border-bottom: 1px solid #A9C4E9; padding-bottom: 3pt; }
                h3 { font-family: "Calibri Light", "sans-serif"; font-size: 13pt; color: #366092; margin: 12pt 0 6pt 0; font-weight: bold; }
                ul { margin-top: 0; margin-bottom: 0; padding-left: 20px; }
                li { margin-bottom: 4pt; }
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

    return (
        <motion.div 
            key={identifier}
            variants={sectionVariants} 
            className="border-t border-gray-200 dark:border-white/10 pt-8 mt-12"
        >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Generated Summary Preview</h3>
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
            </div>

            <motion.div
                layout
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={`${identifier}-${viewMode}`}
                        variants={viewVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {viewMode === 'document' ? (
                            <DocumentView htmlString={carePlanHtml} />
                        ) : (
                            <TableView htmlString={carePlanHtml} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            <div className="mt-8 flex flex-wrap justify-end gap-4">
                <button
                    onClick={handleCopyAll}
                    className={cn('flex items-center justify-center gap-2 h-10 px-4 bg-gray-100 dark:bg-black/20 hover:bg-gray-200 dark:hover:bg-black/40 font-semibold rounded-lg transition-all text-gray-700 dark:text-gray-300', isCopied && 'text-success-green')}
                >
                    {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{isCopied ? 'Copied!' : 'Copy All'}</span>
                </button>
                <button
                    onClick={handleDownloadWord}
                    className="flex items-center justify-center gap-2 h-10 px-4 bg-gray-100 dark:bg-black/20 hover:bg-gray-200 dark:hover:bg-black/40 font-semibold rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                >
                    <FileText className="h-4 w-4" />
                    Download as Word
                </button>
            </div>
        </motion.div>
    );
};

export default WorkersCompPreviewSection;
