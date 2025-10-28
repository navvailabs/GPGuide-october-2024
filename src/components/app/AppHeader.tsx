import { Link } from 'react-router-dom';
import { Home, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import CinematicThemeSwitcher from '@/components/ui/cinematic-theme-switcher';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';
import { useTheme } from '@/contexts/ThemeContext';

interface AppHeaderProps {
  onMenuClick?: () => void;
}

const AppHeader = ({ onMenuClick }: AppHeaderProps) => {
  const { theme } = useTheme();

  return (
    <header className={cn(
      "sticky top-0 z-50",
      theme === 'light' 
        ? "border-b border-brand-border/20 bg-brand-bg/20 backdrop-blur-xl"
        : "border-b border-white/10 bg-black/20 backdrop-blur-xl"
    )}>
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {onMenuClick && (
            <button onClick={onMenuClick} className="text-brand-text dark:text-gray-300 p-2 -ml-2 md:hidden">
                <Menu />
            </button>
          )}
          <Link to="/" className="flex items-center">
              <Logo className="h-48 w-auto" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <CinematicThemeSwitcher />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/"
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors",
                "text-gray-600 dark:text-gray-400 hover:bg-gray-200/80 dark:hover:bg-white/10"
              )}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
