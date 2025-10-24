import React from 'react';
import { cn } from '@/lib/utils';

export interface StyledPillInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledPillInput = React.forwardRef<HTMLInputElement, StyledPillInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'group flex items-center w-full h-[52px] rounded-full px-5 py-3.5 transition-all duration-300',
          'focus-within:ring-2 focus-within:ring-blue-500/70 dark:focus-within:ring-blue-400/70',
          'bg-[#f5f5f5] shadow-[0_0.7px_0.7px_-0.67px_rgba(0,0,0,0.08),0_1.8px_1.8px_-1.33px_rgba(0,0,0,0.08),0_3.6px_3.6px_-2px_rgba(0,0,0,0.07),0_6.9px_6.9px_-2.67px_rgba(0,0,0,0.07),0_13.6px_13.6px_-3.33px_rgba(0,0,0,0.05),0_30px_30px_-4px_rgba(0,0,0,0.02),inset_0_3px_1px_0_rgb(255,255,255)]',
          'dark:bg-black/20 dark:border dark:border-white/10 dark:shadow-lg',
          className
        )}
      >
        <input
          ref={ref}
          {...props}
          className={cn(
            'w-full h-full bg-transparent outline-none border-none focus:ring-0 focus-visible:outline-none text-base leading-6',
            'text-black placeholder:text-black/40',
            'dark:text-white dark:placeholder:text-gray-500'
          )}
        />
      </div>
    );
  }
);

StyledPillInput.displayName = 'StyledPillInput';

export { StyledPillInput };
