import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  'data-id'?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  defaultOpen = false,
  'data-id': dataId,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      data-id={dataId}
      className={cn(
        "w-full max-w-[700px] mx-auto relative rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300",
        'bg-brand-surface shadow-clay-light border border-brand-border/80'
      )}
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
      }}
      role="button"
      aria-expanded={isOpen}
    >
      {/* Decorative gradient overlay */}
      <div
        className="absolute top-0 left-0 w-[437px] h-[306px] pointer-events-none opacity-[0.03] z-10"
        style={{
          background:
            'radial-gradient(50% 50% at 7.2% 6.1%, rgba(28, 27, 24, 0.5) 0%, rgba(249, 245, 239, 0) 100%)',
        }}
      />
      {/* Header with question and icon */}
      <div className="flex items-center justify-between gap-2.5 px-4 py-3 relative z-20">
        <p className={cn(
          "flex-1 text-base leading-6 text-left select-none",
          'text-brand-text'
        )}>
          {question}
        </p>
        <ChevronDown
          className={cn(
            "w-5 h-5 flex-shrink-0 transition-transform duration-300",
            isOpen ? 'rotate-180' : '',
            'text-brand-text-muted'
          )}
        />
      </div>
      {/* Answer content with smooth expand/collapse */}
      <div
        className={`px-4 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className={cn(
          "text-sm leading-[22.4px] text-left select-none whitespace-pre-line",
          'text-brand-text-muted'
        )}>
          {answer}
        </p>
      </div>
    </div>
  );
};
