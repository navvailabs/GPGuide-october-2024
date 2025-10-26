import React from 'react'
import { ArrowIcon } from './NewArrowIcon'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  showIcon?: boolean
  'data-id'?: string
  disabled?: boolean
  isLoading?: boolean
}
export const Button = ({
  variant = 'primary',
  children,
  showIcon = false,
  'data-id': dataId,
  className = '',
  disabled = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] font-medium text-sm leading-[22.4px] transition-all cursor-pointer no-underline'
  
  const variantClasses = {
    primary:
      'bg-[rgb(245,245,245)] text-black shadow-[0_0.71px_0.71px_-0.58px_rgba(158,158,158,0.69),0_1.81px_1.81px_-1.17px_rgba(158,158,158,0.68),0_3.62px_3.62px_-1.75px_rgba(158,158,158,0.65),0_6.87px_6.87px_-2.33px_rgba(158,158,158,0.61),0_13.65px_13.65px_-2.92px_rgba(158,158,158,0.52),0_30px_30px_-3.5px_rgba(158,158,158,0.3),inset_0_3px_1px_0_rgb(255,255,255)] hover:bg-gray-100 dark:bg-black dark:text-white dark:shadow-[0_0.6px_1.08px_-1.25px_rgba(61,61,61,0.72),0_2.29px_4.12px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.71px_0.71px_-0.58px_rgba(0,0,0,0.35),0_1.81px_1.81px_-1.17px_rgba(0,0,0,0.34),0_3.62px_3.62px_-1.75px_rgba(0,0,0,0.33),0_6.87px_6.87px_-2.33px_rgba(0,0,0,0.3),0_13.65px_13.65px_-2.92px_rgba(0,0,0,0.26),0_30px_30px_-3.5px_rgba(0,0,0,0.15)] dark:hover:bg-gray-900',
    secondary:
      'bg-black text-white shadow-[0_0.6px_1.08px_-1.25px_rgba(61,61,61,0.72),0_2.29px_4.12px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.71px_0.71px_-0.58px_rgba(0,0,0,0.35),0_1.81px_1.81px_-1.17px_rgba(0,0,0,0.34),0_3.62px_3.62px_-1.75px_rgba(0,0,0,0.33),0_6.87px_6.87px_-2.33px_rgba(0,0,0,0.3),0_13.65px_13.65px_-2.92px_rgba(0,0,0,0.26),0_30px_30px_-3.5px_rgba(0,0,0,0.15)] hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200',
  }
  
  const disabledClasses = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a
      data-id={dataId}
      className={cn(baseClasses, variantClasses[variant], disabledClasses, className)}
      onClick={handleClick}
      href={props.href || '#'}
      {...props}
    >
      <span className="whitespace-nowrap">{children}</span>
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin flex-shrink-0" />
      ) : showIcon ? (
        <ArrowIcon className="w-5 h-5 flex-shrink-0" />
      ) : null}
    </a>
  )
}
