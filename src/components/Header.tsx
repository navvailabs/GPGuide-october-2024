import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  variant?: 'default' | 'transparent';
}

const Header = ({ variant = 'default' }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Care Suite', href: '/gp-care-plan-generator' },
  ];

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
    <header className="sticky top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className={cn(
        "w-full max-w-5xl h-20 flex items-center justify-between px-5 transition-all duration-300",
        "rounded-2xl border shadow-xl",
        theme === 'light' 
            ? 'bg-white/40 border-black/10 backdrop-blur-lg'
            : 'bg-black/30 border-white/10 backdrop-blur-lg'
      )}>
        <div className="flex-shrink-0">
          <Link to="/" aria-label="Home" className="flex items-center">
            <Logo className="h-48 w-auto" />
          </Link>
        </div>

        {variant === 'default' && (
          <>
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleScrollLink(e, item.href)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    theme === 'light'
                      ? 'text-gray-700 hover:bg-black/5'
                      : 'text-gray-300 hover:bg-white/10'
                  )}
                >
                  {item.name}
                  {item.name !== 'Care Suite' && <ChevronDown size={14} className={cn(theme === 'light' ? 'text-gray-500' : 'text-gray-400')} />}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex flex-shrink-0">
              <Link
                to="/#pricing"
                onClick={(e) => handleScrollLink(e, "/#pricing")}
                className={cn(
                  "px-5 py-2 text-sm font-semibold rounded-lg shadow-md transition-all duration-300",
                  theme === 'light'
                    ? 'bg-gray-900 text-white hover:bg-gray-700'
                    : 'bg-white text-black hover:bg-gray-200'
                )}
              >
                Get Started
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className={cn('p-2', theme === 'light' ? 'text-gray-800' : 'text-white')}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </>
        )}
        
        {variant === 'transparent' && (
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={cn(
                "flex items-center gap-2 px-4 py-2 border rounded-full font-semibold transition-all duration-300 text-sm",
                theme === 'light'
                  ? 'text-gray-700 border-gray-300 hover:bg-gray-100'
                  : 'text-gray-300 border-gray-600 hover:bg-gray-700'
              )}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && variant === 'default' && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              "md:hidden absolute top-24 left-4 right-4 rounded-2xl border shadow-xl p-4",
              theme === 'light' 
                  ? 'bg-white/80 border-black/10'
                  : 'bg-black/70 border-white/10',
              "backdrop-blur-lg"
            )}
          >
            <nav className="flex flex-col items-center space-y-1">
              {navItems.map((item) => (
                 <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                        "px-4 py-3 text-base font-medium rounded-lg transition-colors w-full text-center",
                        theme === 'light'
                          ? 'text-gray-800 hover:bg-black/5'
                          : 'text-gray-200 hover:bg-white/10'
                    )}
                    onClick={(e) => handleScrollLink(e, item.href)}
                  >
                    {item.name}
                  </Link>
              ))}
              <Link 
                to="/#pricing" 
                onClick={(e) => handleScrollLink(e, "/#pricing")}
                className={cn(
                  "w-full mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg shadow-md transition-all duration-300",
                  theme === 'light'
                    ? 'bg-gray-900 text-white hover:bg-gray-700'
                    : 'bg-white text-black hover:bg-gray-200'
                )}
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
