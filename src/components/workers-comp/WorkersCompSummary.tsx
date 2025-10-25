import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import InspiredCard from '@/components/ui/InspiredCard';

const SectionCopyButton = ({ contentToCopy, className }: { contentToCopy: string, className?: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        
        const plainText = contentToCopy
            .replace(/###\s*\*\*(.*?)\*\*/g, '\n\n$1\n')
            .replace(/\*\*(.*?):\*\*/g, '\n$1:')
            .replace(/---/g, '\n------------------\n')
            .replace(/(\*|-)\s/g, '- ')
            .replace(/🗒️|📄|📋/g, '')
            .replace(/\n\s*\n/g, '\n')
            .trim();

        const textArea = document.createElement('textarea');
        textArea.value = plainText;
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

const WorkersCompSummary = ({ content }: { content: string }) => {
    const sections = useMemo(() => {
        if (!content) return [];

        const sectionGroups: { title: string; content: string; rawContent: string }[] = [];
        const rawSections = content.split(/(?=###\s*\*\*.*?\*\*)/g).filter(s => s.trim());

        if (rawSections.length > 0) {
            rawSections.forEach(rawSection => {
                const lines = rawSection.trim().split('\n');
                const mainHeadingMatch = lines[0].match(/^###\s*\*\*(.*?)\*\*$/);
                
                if (mainHeadingMatch) {
                    const title = mainHeadingMatch[1].replace(/🗒️|📄|📋/g, '').trim();
                    const content = lines.slice(1).join('\n');
                    sectionGroups.push({
                        title,
                        content,
                        rawContent: rawSection.trim(),
                    });
                }
            });
        }
        
        if (sectionGroups.length === 0 && content) {
            return [{ title: 'Generated Summary', content: content, rawContent: content }];
        }

        return sectionGroups;
    }, [content]);

    const renderContent = (sectionContent: string) => {
        const elements: JSX.Element[] = [];
        let listItems: string[] = [];

        const flushList = () => {
            if (listItems.length > 0) {
                elements.push(
                    <ul key={`ul-${elements.length}`} className="list-disc list-outside pl-5 space-y-1 my-2">
                        {listItems.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                );
                listItems = [];
            }
        };

        sectionContent.split('\n').forEach((line, index) => {
            const trimmedLine = line.trim();
            const subHeadingMatch = trimmedLine.match(/^\*\*(.*?):\*\*$/);

            if (subHeadingMatch) {
                flushList();
                elements.push(<h4 key={`h4-${index}`} className="text-base font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-1">{subHeadingMatch[1].trim()}:</h4>);
            } else if (trimmedLine === '---') {
                flushList();
                elements.push(<hr key={`hr-${index}`} className="my-4 border-gray-200 dark:border-white/10" />);
            } else if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
                listItems.push(trimmedLine.substring(2));
            } else if (trimmedLine !== '') {
                flushList();
                elements.push(<p key={`p-${index}`} className="text-gray-600 dark:text-gray-400 leading-relaxed">{trimmedLine}</p>);
            }
        });

        flushList(); // Flush any remaining list items
        return elements;
    };

    return (
        <div className="space-y-6">
            {sections.map((section, index) => (
                <InspiredCard key={index} className="relative p-6 md:p-8">
                    <SectionCopyButton contentToCopy={section.rawContent} className="absolute top-4 right-4 z-10" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-10">{section.title}</h3>
                    <div className="space-y-2">
                        {renderContent(section.content)}
                    </div>
                </InspiredCard>
            ))}
        </div>
    );
};

export default WorkersCompSummary;
