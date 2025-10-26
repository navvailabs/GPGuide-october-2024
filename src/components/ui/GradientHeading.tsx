import React from 'react';
import { cn } from '@/lib/utils';

export interface GradientHeadingProps {
  children: React.ReactNode;
  gradient?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  'data-id'?: string;
}

export const GradientHeading: React.FC<GradientHeadingProps> = ({
  children,
  gradient = 'linear-gradient(to right, #1E1B18, #D97706)',
  className = '',
  as: Component = 'h2',
  'data-id': dataId,
}) => {
  return (
    <Component
      data-id={dataId}
      className={cn(
        'font-satoshi',
        className
      )}
    >
      <span
        className="inline-block"
        style={{
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundImage: gradient,
        }}
      >
        {children}
      </span>
    </Component>
  );
};
