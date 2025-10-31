import React, { createContext, useContext, useMemo } from 'react';

interface PerformanceContextType {
  isHighPerformance: boolean;
}

const PerformanceContext = createContext<PerformanceContextType>({
  isHighPerformance: false,
});

export const PerformanceProvider: React.FC<{ children: React.ReactNode; isHighPerformance: boolean }> = ({ children, isHighPerformance }) => {
  const value = useMemo(() => ({ isHighPerformance }), [isHighPerformance]);
  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  return useContext(PerformanceContext);
};
