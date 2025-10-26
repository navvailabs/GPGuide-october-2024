import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Check, Chrome } from 'lucide-react';

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-brand-accent selection:text-brand-surface dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen w-screen bg-brand-bg relative overflow-hidden flex items-center justify-center font-body">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-orange-700/10 to-brand-bg" />
      
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120vh] h-[60vh] rounded-b-[50%] bg-amber-400/10 blur-[80px]" />
      <motion.div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vh] h-[60vh] rounded-b-full bg-orange-300/10 blur-[60px]"
        animate={{ 
          opacity: [0.15, 0.3, 0.15],
          scale: [0.98, 1.02, 0.98]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90vh] h-[90vh] rounded-t-full bg-amber-400/10 blur-[60px]"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1
        }}
      />

      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-brand-surface/5 rounded-full blur-[100px] animate-pulse opacity-40" />
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-brand-surface/5 rounded-full blur-[100px] animate-pulse delay-1000 opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm relative z-10"
        style={{ perspective: 1500 }}
      >
        <motion.div
          className="relative"
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ z: 10 }}
        >
          <div className="relative group">
            <motion.div 
              className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"
              animate={{
                boxShadow: [
                  "0 0 10px 2px rgba(28, 25, 23, 0.03)",
                  "0 0 15px 5px rgba(28, 25, 23, 0.05)",
                  "0 0 10px 2px rgba(28, 25, 23, 0.03)"
                ],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut", 
                repeatType: "mirror" 
              }}
            />

              <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"
                  initial={{ filter: "blur(2px)" }}
                  animate={{ 
                    left: ["-50%", "100%"],
                  }}
                  transition={{ 
                    left: {
                      duration: 2.5, 
                      ease: "easeInOut", 
                      repeat: Infinity,
                      repeatDelay: 1
                    },
                  }}
                />
              </div>

              <div className="relative bg-brand-surface/80 backdrop-blur-xl rounded-2xl p-6 border border-brand-border/50 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" 
                  style={{
                    backgroundImage: `linear-gradient(135deg, black 0.5px, transparent 0.5px), linear-gradient(45deg, black 0.5px, transparent 0.5px)`,
                    backgroundSize: '30px 30px'
                  }}
                />

                <div className="text-center space-y-1 mb-5">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="mx-auto w-10 h-10 rounded-full border border-brand-border flex items-center justify-center relative overflow-hidden bg-brand-bg"
                  >
                    <span className="text-lg font-bold text-brand-accent">G</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold text-brand-text"
                  >
                    Welcome Back
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-brand-text-muted text-xs"
                  >
                    Sign in to continue to GPGuide
                  </motion.p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div className="space-y-3">
                    <motion.div 
                      className={`relative ${focusedInput === "email" ? 'z-10' : ''}`}
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="relative flex items-center overflow-hidden rounded-lg">
                        <Mail className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                          focusedInput === "email" ? 'text-brand-text' : 'text-brand-text-muted'
                        }`} />
                        
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocusedInput("email")}
                          onBlur={() => setFocusedInput(null)}
                          className="w-full bg-brand-bg border-brand-border focus:border-brand-accent text-brand-text placeholder:text-brand-text-muted h-10 transition-all duration-300 pl-10 pr-3 focus:bg-brand-surface"
                        />
                        
                        {focusedInput === "email" && (
                          <motion.div 
                            layoutId="input-highlight"
                            className="absolute inset-0 bg-brand-accent/5 -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    <motion.div 
                      className={`relative ${focusedInput === "password" ? 'z-10' : ''}`}
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="relative flex items-center overflow-hidden rounded-lg">
                        <Lock className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                          focusedInput === "password" ? 'text-brand-text' : 'text-brand-text-muted'
                        }`} />
                        
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={() => setFocusedInput("password")}
                          onBlur={() => setFocusedInput(null)}
                          className="w-full bg-brand-bg border-brand-border focus:border-brand-accent text-brand-text placeholder:text-brand-text-muted h-10 transition-all duration-300 pl-10 pr-10 focus:bg-brand-surface"
                        />
                        
                        <div 
                          onClick={() => setShowPassword(!showPassword)} 
                          className="absolute right-3 cursor-pointer"
                        >
                          {showPassword ? (
                            <Eye className="w-4 h-4 text-brand-text-muted hover:text-brand-text transition-colors duration-300" />
                          ) : (
                            <EyeOff className="w-4 h-4 text-brand-text-muted hover:text-brand-text transition-colors duration-300" />
                          )}
                        </div>
                        
                        {focusedInput === "password" && (
                          <motion.div 
                            layoutId="input-highlight"
                            className="absolute inset-0 bg-brand-accent/5 -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                          className="appearance-none h-4 w-4 rounded border border-brand-border bg-brand-bg checked:bg-brand-accent checked:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/30 transition-all duration-200"
                        />
                        {rememberMe && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center text-brand-surface pointer-events-none"
                          >
                            <Check strokeWidth={3} className="w-3 h-3" />
                          </motion.div>
                        )}
                      </div>
                      <label htmlFor="remember-me" className="text-xs text-brand-text-muted hover:text-brand-text transition-colors duration-200">
                        Remember me
                      </label>
                    </div>
                    
                    <div className="text-xs relative group/link">
                      <Link to="#" className="text-brand-text-muted hover:text-brand-text transition-colors duration-200">
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full relative group/button mt-5"
                  >
                    <div className="absolute inset-0 bg-brand-text/10 rounded-lg blur-lg opacity-0 group-hover/button:opacity-70 transition-opacity duration-300" />
                    
                    <div className="relative overflow-hidden bg-brand-text text-brand-bg font-medium h-10 rounded-lg transition-all duration-300 flex items-center justify-center">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"
                        animate={{ 
                          x: ['-100%', '100%'],
                        }}
                        transition={{ 
                          duration: 1.5, 
                          ease: "easeInOut", 
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                        style={{ 
                          opacity: isLoading ? 1 : 0,
                          transition: 'opacity 0.3s ease'
                        }}
                      />
                      
                      <AnimatePresence mode="wait">
                        {isLoading ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center"
                          >
                            <div className="w-4 h-4 border-2 border-brand-bg/70 border-t-transparent rounded-full animate-spin" />
                          </motion.div>
                        ) : (
                          <motion.span
                            key="button-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-1 text-sm font-medium"
                          >
                            Sign In
                            <ArrowRight className="w-3 h-3 group-hover/button:translate-x-1 transition-transform duration-300" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>

                  <div className="relative mt-2 mb-5 flex items-center">
                    <div className="flex-grow border-t border-brand-border/50"></div>
                    <motion.span 
                      className="mx-3 text-xs text-brand-text-muted"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: [0.7, 0.9, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      or
                    </motion.span>
                    <div className="flex-grow border-t border-brand-border/50"></div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full relative group/google"
                  >
                    <div className="absolute inset-0 bg-brand-text/5 rounded-lg blur opacity-0 group-hover/google:opacity-70 transition-opacity duration-300" />
                    
                    <div className="relative overflow-hidden bg-brand-bg text-brand-text font-medium h-10 rounded-lg border border-brand-border hover:border-brand-border/70 transition-all duration-300 flex items-center justify-center gap-2">
                      <Chrome className="w-4 h-4 text-brand-text-muted group-hover/google:text-brand-text transition-colors duration-300" />
                      
                      <span className="text-brand-text-muted group-hover/google:text-brand-text transition-colors text-xs">
                        Sign in with Google
                      </span>
                      
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ 
                          duration: 1, 
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.button>

                <motion.p 
                  className="text-center text-xs text-brand-text-muted mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Don't have an account?{' '}
                  <Link 
                    to="#" 
                    className="relative inline-block group/signup"
                  >
                    <span className="relative z-10 text-brand-text group-hover/signup:text-brand-text/70 transition-colors duration-300 font-medium">
                      Sign up
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-text group-hover/signup:w-full transition-all duration-300" />
                  </Link>
                </motion.p>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
