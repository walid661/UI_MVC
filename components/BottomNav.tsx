import React from 'react';
import { View } from '../types';
import { Home, Calendar, Dumbbell, Activity, User } from 'lucide-react';

interface BottomNavProps {
  currentView: View;
  setView: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView }) => {
  const navItems = [
    { view: View.HOME, icon: Home, label: 'Coach' },
    { view: View.TRAINING, icon: Calendar, label: 'Plan' },
    { view: View.WORKOUT, icon: Dumbbell, label: 'Workout' },
    { view: View.STATISTICS, icon: Activity, label: 'Stats' },
    { view: View.PROFILE, icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-6 pt-3 px-6 bg-white/90 backdrop-blur-xl border-t border-white/50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className="flex flex-col items-center gap-1 min-w-[3.5rem] transition-all duration-300 active:scale-90"
            >
              <div className={`relative p-2 rounded-xl transition-all duration-300 ${
                isActive ? 'text-blue-600 -translate-y-2 bg-blue-50' : 'text-gray-400'
              }`}>
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                )}
              </div>
              <span className={`text-[10px] font-medium transition-colors ${
                  isActive ? 'text-blue-600 opacity-100' : 'text-gray-400 opacity-0 h-0 overflow-hidden'
              }`}>
                  {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;