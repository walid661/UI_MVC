import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-[100dvh] w-full sm:bg-[#F2F4F8] bg-white flex sm:items-center sm:justify-center font-sans text-slate-900 sm:p-4">
      {/* Simulation Cadre Mobile - Only active on 'sm' screens and up */}
      <div className="relative w-full h-[100dvh] sm:h-[850px] sm:max-w-[400px] bg-white sm:rounded-[40px] sm:shadow-2xl overflow-hidden sm:border-[8px] sm:border-white sm:ring-1 sm:ring-gray-900/5 flex flex-col transition-all duration-300">
        
        {/* Lueurs d'ambiance en arrière-plan (Desktop only) */}
        <div className="hidden sm:block absolute top-[-10%] left-[-20%] w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="hidden sm:block absolute bottom-[-10%] right-[-20%] w-[300px] h-[300px] bg-indigo-400/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Content Container (Layout provides the frame, children handle the scrolling areas) */}
        <div className="flex-1 w-full h-full relative z-0">
          {children}
        </div>
        
        {/* Dégradés de superposition pour adoucir le scroll (Top only) */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
};

export default Layout;