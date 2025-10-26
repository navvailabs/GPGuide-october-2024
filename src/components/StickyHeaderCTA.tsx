import { motion } from 'framer-motion';

const StickyHeaderCTA = () => {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-20 left-0 right-0 z-40 bg-brand-surface/90 backdrop-blur-md shadow-lg"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <p className="text-brand-text font-semibold hidden md:block">
                    Ready to save <span className="text-brand-accent">5+ hours</span> weekly?
                </p>
                <p className="text-brand-text font-semibold md:hidden">
                    Save <span className="text-brand-accent">5+ hours</span> weekly
                </p>
                <div className="flex items-center space-x-3">
                    <button className="bg-brand-accent text-brand-bg font-bold py-2 px-4 rounded-full text-sm hover:scale-105 transition-transform">
                        Start Essential Plan
                    </button>
                    <button className="border-2 border-brand-text text-brand-text font-bold py-2 px-4 rounded-full text-sm hover:bg-brand-text hover:text-brand-bg transition-colors">
                        Choose Professional Plan
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default StickyHeaderCTA;
