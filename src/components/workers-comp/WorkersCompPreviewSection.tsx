import React, { useState, useMemo } from 'react';
import { FileText, Copy, Check, Table } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LiquidGlassCard } from '@/components/ui/liquid-notification';

type ViewMode = 'document' | 'table';

interface WorkersCompPreviewSectionProps {
    carePlanHtml: string | null;
    identifier: string;
}

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const viewVariants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
};

const CardCopyButton = ({ contentToCopy }: { contentToCopy: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(contentToCopy).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <button
            onClick={handleCopy}
            className={cn(
                "absolute top-4 right-4 z-10 flex items-center justify-center h-9 w-9 bg-gray-100/50 dark:bg-black/30 hover:bg-gray-200/70 dark:hover:bg-black/50 backdrop-blur-sm font-semibold rounded-full transition-all text-gray-600 dark:text-gray-300 text-sm p-0",
                isCopied && "text-success-green bg-green-500/10 dark:bg-green-500/20"
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

const MarkdownTable = ({ tableLines }: { tableLines: string[] }) => {
    if (tableLines.length < 2) return null;

    const parseRow = (rowLine: string) => rowLine.split('|').slice(1, -1).map(cell => cell.trim());

    const headers = parseRow(tableLines[0]);
    // The separator line (e.g., |---|---|) is tableLines[1], we skip it
    const bodyRows = tableLines.slice(2).map(parseRow);

    return (
        <div className="overflow-x-auto my-4 rounded-lg border border-gray-200 dark:border-white/10">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 dark:bg-white/5">
                    <tr>
                        {headers.map((header, i) => (
                            <th key={i} className="p-3 font-medium text-gray-800 dark:text-white">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {bodyRows.map((row, i) => (
                        <tr key={i} className="border-t border-gray-200 dark:border-white/10">
                            {row.map((cell, j) => (
                                <td key={j} className="p-3 align-top text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const renderSectionContent = (content: string) => {
    const elements: React.ReactNode[] = [];
    const lines = content.split('\n');
    let i = 0;

    while (i < lines.length) {
        const line = lines[i].trim();

        if (line.startsWith('|') && lines[i + 1]?.trim().match(/^\|(?::?-+:?\|)+$/)) {
            const tableLines: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith('|')) {
                tableLines.push(lines[i]);
                i++;
            }
            elements.push(<MarkdownTable key={`table-${i}`} tableLines={tableLines} />);
            continue;
        }

        const subHeadingMatch = line.match(/^\*\*(.*?):\*\*$/);
        if (subHeadingMatch) {
            elements.push(<h4 key={`h4-${i}`} className="text-base font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-1">{subHeadingMatch[1].trim()}:</h4>);
            i++;
            continue;
        }
        
        if (line === '---') {
            elements.push(<hr key={`hr-${i}`} className="my-4 border-gray-200 dark:border-white/10" />);
            i++;
            continue;
        }

        if (line.startsWith('* ') || line.startsWith('- ')) {
            const listItems: string[] = [];
            while (i < lines.length && (lines[i].trim().startsWith('* ') || lines[i].trim().startsWith('- '))) {
                listItems.push(lines[i].trim().substring(2));
                i++;
            }
            elements.push(
                <ul key={`ul-${i}`} className="list-disc list-outside pl-5 space-y-1 my-2 text-gray-600 dark:text-gray-400">
                    {listItems.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
                </ul>
            );
            continue;
        }

        if (line) {
            elements.push(<p key={`p-${i}`} className="text-gray-600 dark:text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />);
        }
        
        i++;
    }

    return elements;
};

const DocumentView = ({ htmlString }: { htmlString: string }) => {
    const sections = useMemo(() => {
        if (!htmlString) return [];
        const sectionGroups: { title: string; content: string; rawContent: string }[] = [];
        const rawSections = htmlString.split(/(?=###\s*\*\*.*?\*\*)/g).filter(s => s.trim());

        if (rawSections.length > 0) {
            rawSections.forEach(rawSection => {
                const lines = rawSection.trim().split('\n');
                const mainHeadingMatch = lines[0].match(/^###\s*\*\*(.*?)\*\*$/);
                
                if (mainHeadingMatch) {
                    const title = mainHeadingMatch[1].replace(/🗒️|📄|📋/g, '').trim();
                    const content = lines.slice(1).join('\n');
                    sectionGroups.push({ title, content, rawContent: rawSection.trim() });
                }
            });
        }
        
        if (sectionGroups.length === 0 && htmlString) {
            return [{ title: 'Generated Summary', content: htmlString, rawContent: htmlString }];
        }

        return sectionGroups;
    }, [htmlString]);

    return (
        <div className="space-y-6">
            {sections.map((section, index) => (
                <LiquidGlassCard
                    key={index}
                    shadowIntensity='md'
                    blurIntensity='lg'
                    borderRadius='24px'
                    glowIntensity='md'
                    draggable={false}
                    expandable={false}
                    className="p-6 md:p-8 border border-sky-500/30 dark:border-sky-400/30 relative"
                >
                    <CardCopyButton contentToCopy={section.rawContent} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-10">{section.title}</h3>
                    <div className="space-y-2">
                        {renderSectionContent(section.content)}
                    </div>
                </LiquidGlassCard>
            ))}
        </div>
    );
};

const TableWithCopyButton = ({ tableHtml }: { tableHtml: string }) => {
    const [buttonText, setButtonText] = useState('Copy Table');

    const handleCopy = () => {
        const container = document.createElement('div');
        container.innerHTML = tableHtml;
        const cells = container.querySelectorAll('th, td');
        cells.forEach(cell => {
            (cell as HTMLElement).style.verticalAlign = 'top';
        });

        const styledHtml = container.innerHTML;
        const plainText = container.innerText;

        const listener = (e: ClipboardEvent) => {
            if (e.clipboardData) {
                e.clipboardData.setData('text/html', styledHtml);
                e.clipboardData.setData('text/plain', plainText);
                e.preventDefault();
            }
        };

        try {
            document.addEventListener('copy', listener);
            document.execCommand('copy');
            setButtonText('Copied!');
        } catch (err) {
            console.error('Failed to copy table:', err);
            setButtonText('Copy Failed');
        } finally {
            document.removeEventListener('copy', listener);
            setTimeout(() => setButtonText('Copy Table'), 2000);
        }
    };

    return (
        <div className="my-4">
            <div className="flex justify-end mb-2">
                <button
                    onClick={handleCopy}
                    className={cn(
                        'flex items-center justify-center gap-2 h-9 px-3 bg-gray-100 dark:bg-black/20 hover:bg-gray-200 dark:hover:bg-black/40 font-semibold rounded-lg transition-all text-gray-700 dark:text-gray-300 text-sm',
                        buttonText === 'Copied!' && 'text-success-green'
                    )}
                >
                    {buttonText === 'Copied!' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{buttonText}</span>
                </button>
            </div>
            <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: tableHtml }} />
        </div>
    );
};

const TableView = ({ htmlString }: { htmlString: string }) => {
    const parts = useMemo(() => htmlString.split(/(<table[\s\S]*?<\/table>)/i), [htmlString]);

    return (
        <>
            {parts.map((part, index) => {
                if (part.trim().toLowerCase().startsWith('<table')) {
                    return <TableWithCopyButton key={index} tableHtml={part} />;
                } else if (part.trim()) {
                    return <div key={index} className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: part.replace(/\n/g, '<br />') }} />;
                }
                return null;
            })}
        </>
    );
};

const WorkersCompPreviewSection = ({ carePlanHtml, identifier }: WorkersCompPreviewSectionProps) => {
    const [viewMode, setViewMode] = useState<ViewMode>('document');

    if (!carePlanHtml?.trim()) {
        return null;
    }

    const handleDownloadWord = () => {
        if (!carePlanHtml) return;
        const generatedDate = new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
        
        const container = document.createElement('div');
        container.innerHTML = carePlanHtml;
        const cells = container.querySelectorAll('th, td');
        cells.forEach(cell => {
            (cell as HTMLElement).style.verticalAlign = 'top';
        });
        const styledCarePlanHtml = container.innerHTML;

        const fullHtml = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><title>Workers Compensation Summary</title>
            <!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>90</w:Zoom><w:DoNotOptimizeForBrowser/></w:WordDocument></xml><![endif]-->
            <style>
                @page WordSection1 { size: 8.5in 11.0in; margin: 1.0in 1.0in 1.0in 1.0in; }
                div.WordSection1 { page: WordSection1; }
                body { font-family: "Calibri", "sans-serif"; font-size: 11pt; color: #333333; }
                p { margin: 0 0 8pt 0; line-height: 1.15; }
                h2, h3, h4 { font-family: "Calibri Light", "sans-serif"; color: #2F5496; margin: 12pt 0 6pt 0; font-weight: bold; }
                h2 { font-size: 16pt; border-bottom: 1px solid #A9C4E9; padding-bottom: 3pt; }
                h3 { font-size: 13pt; }
                h4 { font-size: 11pt; color: #366092; }
                table { border-collapse: collapse; width: 100%; margin-bottom: 12pt; }
                th, td { border: 1px solid #D9D9D9; padding: 6px; text-align: left; vertical-align: top; }
                th { background-color: #F2F2F2; font-weight: bold; color: #333333; }
                ul { margin-top: 0; margin-bottom: 0; padding-left: 20px; }
                li { margin-bottom: 4pt; }
            </style>
            </head>
            <body><div class="WordSection1">
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
                        className={cn(
                            'flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                            viewMode === 'document'
                                ? 'bg-white dark:bg-black text-black dark:text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                        )}
                    >
                        <FileText className="h-4 w-4" />
                        <span>Document</span>
                    </button>
                    <button
                        onClick={() => setViewMode('table')}
                        className={cn(
                            'flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                            viewMode === 'table'
                                ? 'bg-white dark:bg-black text-black dark:text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                        )}
                    >
                        <Table className="h-4 w-4" />
                        <span>Table</span>
                    </button>
                </div>
            </div>

            <motion.div
                layout
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="care-plan-container"
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
