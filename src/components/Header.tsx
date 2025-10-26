import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BriefcaseMedical, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeaderProps {
  variant?: 'default' | 'transparent';
}

const Header = ({ variant = 'default' }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Care Suite', href: '/gp-care-plan-generator' },
  ];

  const headerClasses = cn(
    "sticky top-0 z-50 backdrop-blur-xl border-b",
    "bg-brand-bg/80 border-brand-border"
  );
  
  const isHomePage = location.pathname === '/';

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle scroll on the home page for hash links
    if (isHomePage && href.includes('#')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For mobile menu, always close it after a click
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={headerClasses}>
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <BriefcaseMedical className="h-8 w-8 text-brand-accent" />
            <span className="text-2xl font-satoshi font-bold text-brand-text">GPGuide</span>
          </Link>
        </motion.div>

        {variant === 'default' && (
          <>
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={(e) => handleScrollLink(e, item.href)}
                    className="text-brand-text-muted hover:text-brand-accent transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4 ml-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  to="/login"
                  className="px-6 py-2 text-brand-bg bg-brand-text rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-opacity-90"
                >
                  Login
                </Link>
              </motion.div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-brand-text">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </>
        )}
        
        {variant === 'transparent' && (
           <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 text-brand-text border border-brand-border rounded-full font-semibold hover:bg-brand-surface/50 transition-all duration-300 text-sm"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </motion.div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && variant === 'default' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg/95 pb-4"
          >
            <nav className="flex flex-col items-center space-y-4 pt-4">
              {navItems.map((item) => (
                 <Link
                    key={item.name}
                    to={item.href}
                    className="text-brand-text-muted hover:text-brand-accent transition-colors duration-300 py-2"
                    onClick={(e) => handleScrollLink(e, item.href)}
                  >
                    {item.name}
                  </Link>
              ))}
              <Link to="/login" className="w-4/5 text-center px-6 py-3 text-brand-bg bg-brand-text rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
