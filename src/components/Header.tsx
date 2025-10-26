import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';

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
    "sticky top-0 z-50 border-b",
    "border-brand-border/20 bg-brand-bg/20 backdrop-blur-xl"
  );
  
  const isHomePage = location.pathname === '/';

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.includes('#')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={headerClasses}>
      <div className="w-full max-w-[1350px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" aria-label="Home" className="flex items-center">
              <Logo className="h-48 w-auto" />
            </Link>
          </div>

          {variant === 'default' && (
            <>
              <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => handleScrollLink(e, item.href)}
                    className="px-4 py-2 text-sm font-normal text-brand-text rounded-lg hover:bg-black/5 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex flex-shrink-0">
                <Link
                  to="/#pricing"
                  onClick={(e) => handleScrollLink(e, "/#pricing")}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-brand-bg bg-brand-text rounded-lg shadow-lg hover:bg-gray-900 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-brand-text p-2">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </>
          )}
          
          {variant === 'transparent' && (
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 text-brand-text border border-brand-border rounded-full font-semibold hover:bg-brand-surface/50 transition-all duration-300 text-sm"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && variant === 'default' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg/80 backdrop-blur-sm pb-4"
          >
            <nav className="flex flex-col items-center space-y-2 pt-2">
              {navItems.map((item) => (
                 <Link
                    key={item.name}
                    to={item.href}
                    className="px-4 py-3 text-base font-normal text-brand-text rounded-lg hover:bg-black/5 transition-colors w-full text-center"
                    onClick={(e) => handleScrollLink(e, item.href)}
                  >
                    {item.name}
                  </Link>
              ))}
              <Link 
                to="/#pricing" 
                onClick={(e) => handleScrollLink(e, "/#pricing")}
                className="w-[calc(100%-2rem)] mx-4 mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-brand-bg bg-brand-text rounded-lg shadow-lg hover:bg-gray-900 transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
