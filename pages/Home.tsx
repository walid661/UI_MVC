import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, Zap } from 'lucide-react';
import { mockProgramGeneration } from '../services/mockApi';
import ProgramViewer from '../components/ProgramViewer';

interface HomeProps {
  lastMessage: string | null;
}

type OnboardingState = 'WELCOME' | 'GENERATING' | 'PROGRAM_VIEW';

const Home: React.FC<HomeProps> = ({ lastMessage }) => {
  const [state, setState] = useState<OnboardingState>('WELCOME');
  const [programData, setProgramData] = useState<string | null>(null);
  
  // Narrative Loader State
  const loadingSteps = ["Analyzing morphology...", "Retrieving exercises...", "Optimizing volume...", "Finalizing plan..."];
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-trigger welcome notification simulation
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);

  useEffect(() => {
    if (state === 'WELCOME') {
        const timer = setTimeout(() => setShowWelcomeBubble(true), 500);
        return () => clearTimeout(timer);
    }
  }, [state]);

  // Narrative Loader Effect
  useEffect(() => {
    if (state === 'GENERATING') {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % loadingSteps.length);
        }, 800);
        return () => clearInterval(interval);
    }
  }, [state]);

  const handleGenerateProgram = async () => {
    setState('GENERATING');
    setShowWelcomeBubble(false);
    setCurrentStep(0);
    
    // Call mock API
    const response = await mockProgramGeneration();
    
    setProgramData(response.plan_text);
    setState('PROGRAM_VIEW');
  };

  return (
    <div className="h-full w-full relative flex flex-col items-center pt-12 overflow-hidden">
      
      {/* Background Decor Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      {/* Top Bar */}
      <div className="w-full px-8 flex justify-between items-center z-20">
         <h1 className="text-lg font-bold text-gray-800 tracking-tight">COACH MIKE</h1>
         <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center text-gray-700 cursor-pointer hover:scale-105 active:scale-95 transition-all">
            <Volume2 size={20} />
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10 px-6">
        
        {state === 'GENERATING' && (
             <div className="flex flex-col items-center justify-center animate-fade-in w-full max-w-xs mx-auto">
                <div className="relative w-24 h-24 mb-8">
                    <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600 animate-pulse" size={32} />
                </div>
                
                {/* Narrative Text */}
                <div className="h-8 flex items-center justify-center overflow-hidden w-full">
                     <p key={currentStep} className="text-lg font-bold text-gray-800 animate-fade-in text-center">
                        {loadingSteps[currentStep]}
                     </p>
                </div>
                <div className="flex gap-1 mt-4">
                    {loadingSteps.map((_, idx) => (
                        <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-6 bg-blue-600' : 'w-2 bg-gray-200'}`}></div>
                    ))}
                </div>
             </div>
        )}

        {state === 'WELCOME' && (
            <>
                <div className="text-center mb-8 animate-fade-in mt-10">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                        Ready to <span className="text-blue-600">Level Up?</span>
                    </h2>
                    <p className="text-gray-500 text-base max-w-xs mx-auto leading-relaxed">
                        Your personalized fitness journey is just one click away.
                    </p>
                </div>

                {/* Avatar */}
                <div className="relative w-full max-w-sm flex-1 flex items-end justify-center mb-8">
                    <img 
                    src="https://picsum.photos/seed/coachmike/600/800" 
                    alt="Coach Mike Avatar" 
                    className="h-full max-h-[40vh] w-auto object-contain drop-shadow-2xl mask-image-gradient animate-fade-in"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                    }}
                    />

                    {/* Chat Bubble Notification */}
                    <div className={`absolute top-10 right-0 transform transition-all duration-500 ease-out z-20 ${showWelcomeBubble ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'}`}>
                         <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl rounded-bl-none border border-white/50 w-64">
                            <p className="text-gray-800 text-sm font-medium leading-snug">
                                Hey Jack! I've analyzed your stats. Ready to build your <span className="text-blue-600 font-bold">Hypertrophy Program</span>?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hero Action Button */}
                <button 
                    onClick={handleGenerateProgram}
                    className="group relative w-full max-w-xs bg-gray-900 text-white p-4 rounded-2xl shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 transition-all active:scale-95 flex items-center justify-center gap-3 overflow-hidden mb-12"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative font-bold text-lg tracking-wide z-10">Generate My Program</span>
                    <Zap className="relative z-10 group-hover:rotate-12 transition-transform" fill="currentColor" size={20} />
                </button>
            </>
        )}

        {state === 'PROGRAM_VIEW' && programData && (
             <div className="w-full h-full flex flex-col animate-fade-in pt-4 pb-2">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">Your Custom Plan</h3>
                        <p className="text-xs text-gray-400">Week 1 • Hypertrophy Focus</p>
                    </div>
                </div>
                
                <div className="flex-1 overflow-y-auto no-scrollbar mask-image-scroll pr-1">
                    <ProgramViewer content={programData} />
                </div>

                <div className="mt-4 flex gap-3">
                    <button className="flex-1 bg-white border border-gray-200 text-gray-600 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition active:scale-95">
                        Adjust
                    </button>
                    <button className="flex-[2] bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition active:scale-95">
                        Start Workout
                    </button>
                </div>
             </div>
        )}

      </div>
    </div>
  );
};

export default Home;