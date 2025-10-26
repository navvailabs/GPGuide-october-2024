import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const AnimatedCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    const animateBorder = () => {
      const now = Date.now() / 1000;
      const speed = 0.4; // Slightly slower for a more elegant feel
      const topX = Math.sin(now * speed) * 100;
      const rightY = Math.cos(now * speed) * 100;
      const bottomX = Math.sin(now * speed + Math.PI) * 100;
      const leftY = Math.cos(now * speed + Math.PI) * 100;

      if (topRef.current) topRef.current.style.transform = `translateX(${topX}%)`;
      if (rightRef.current) rightRef.current.style.transform = `translateY(${rightY}%)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translateX(${bottomX}%)`;
      if (leftRef.current) leftRef.current.style.transform = `translateY(${leftY}%)`;

      animationId = requestAnimationFrame(animateBorder);
    };

    animationId = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className={cn(
      "relative w-full h-full bg-brand-surface/80 backdrop-blur-xl border border-brand-border rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg transition-transform duration-300",
      className
    )}>
      {/* Animated border elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          ref={topRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
        ></div>
      </div>
      <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden">
        <div
          ref={rightRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand-accent/40 to-transparent"
        ></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          ref={bottomRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-brand-accent/40 to-transparent"
        ></div>
      </div>
      <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden">
        <div
          ref={leftRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-brand-accent/40 to-transparent"
        ></div>
      </div>
      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
