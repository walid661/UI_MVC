import React from 'react';
import { View } from '../types';
import { Home, Calendar, Dumbbell, User } from 'lucide-react';

interface BottomNavProps {
  currentView: View;
  setView: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView }) => {
  const navItems = [
    { view: View.HOME, icon: Home, label: 'Coach' },
    { view: View.TRAINING, icon: Calendar, label: 'Plan' },
    { view: View.WORKOUT, icon: Dumbbell, label: 'Workout' },
    { view: View.PROFILE, icon: User, label: 'Profile' },
  ];

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[360px]">
      {/* Conteneur Flottant "Island" */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-900/85 backdrop-blur-2xl rounded-[32px] shadow-2xl shadow-blue-900/20 border border-white/10">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className="relative group flex flex-col items-center justify-center w-12 h-12 transition-all duration-300"
            >
              {/* Indicateur Lumineux (Glow) */}
              <div 
                className={`absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${
                  isActive ? 'opacity-40' : 'group-hover:opacity-20'
                }`} 
              />
              
              {/* Icône */}
              <div className={`relative z-10 transition-all duration-300 transform ${
                  isActive ? '-translate-y-1 text-white scale-110' : 'text-gray-400 group-hover:text-gray-200'
              }`}>
                <item.icon 
                    size={24} 
                    strokeWidth={isActive ? 2.5 : 2} 
                    className={isActive ? "drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" : ""}
                />
              </div>

              {/* Point Actif (Style iOS) */}
              <span className={`absolute bottom-1 w-1 h-1 bg-white rounded-full transition-all duration-300 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;