import React from 'react';
import { View } from '../types';
import { User, Activity, Trophy, Calendar, Settings, Dumbbell, Home } from 'lucide-react';

interface SidebarProps {
  currentView: View;
  setView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const navItems = [
    { view: View.HOME, icon: Home, label: 'Home' },
    { view: View.PROFILE, icon: User, label: 'Profile' },
    { view: View.STATISTICS, icon: Activity, label: 'Stats' },
    { view: View.REWARDS, icon: Trophy, label: 'Rewards' },
    { view: View.TRAINING, icon: Calendar, label: 'Training' },
    { view: View.WORKOUT, icon: Dumbbell, label: 'Workout' },
    { view: View.SETTINGS, icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5">
      {/* Menu Toggle / Home Button */}
      <button 
        onClick={() => setView(View.HOME)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 duration-200 ${
            currentView === View.HOME 
            ? 'bg-blue-600 text-white scale-110 shadow-blue-200' 
            : 'bg-white/80 backdrop-blur-md text-gray-500 hover:bg-white'
        }`}
      >
        <span className="font-bold text-2xl">≡</span>
      </button>

      {/* Glassmorphism Floating Dock */}
      <div className="bg-white/70 backdrop-blur-md border border-white/40 p-3 rounded-full shadow-2xl flex flex-col gap-4">
        {navItems.slice(1).map((item) => (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-95 duration-200 ${
              currentView === item.view 
                ? 'bg-blue-100 text-blue-600 shadow-inner' 
                : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'
            }`}
            title={item.label}
          >
            <item.icon size={22} strokeWidth={2.5} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
