import React from 'react';
import { cn } from '@/lib/utils';

export interface DescriptionProps {
  children?: React.ReactNode;
  className?: string;
  'data-id'?: string;
}

export const Description: React.FC<DescriptionProps> = ({
  children = 'Deploy AI solutions that adapt quickly, learn fast, and scale with your business needs.',
  className = '',
  'data-id': dataId,
}) => {
  return (
    <p
      data-id={dataId}
      className={cn(
        'font-normal text-base leading-relaxed text-brand-text-muted',
        className
      )}
    >
      {children}
    </p>
  );
};
