import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    text: "This is a sample testimonial.",
    name: "Sample Name",
    role: "Sample Role",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={cn("overflow-hidden", props.className)}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="bg-gray-100 shadow-clay-light rounded-2xl p-6 max-w-xs w-full flex flex-col" key={i}>
                  <p className="text-brand-text-muted mb-6 flex-grow">"{text}"</p>
                  <div className="mt-auto">
                    <div className="font-bold text-brand-text">{name}</div>
                    <div className="text-sm text-brand-text-muted">{role}</div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
