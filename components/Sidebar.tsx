import React from 'react';
import { View } from '../types';
import { User, Activity, Trophy, Calendar, Settings, Dumbbell } from 'lucide-react';

interface SidebarProps {
  currentView: View;
  setView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const navItems = [
    { view: View.HOME, icon: User, label: 'Profile' }, // Keeping Icon User for "Home/Profile" feel, but mapping to Home mostly or Profile
    { view: View.PROFILE, icon: User, label: 'Profile Settings' },
    { view: View.STATISTICS, icon: Activity, label: 'Stats' },
    { view: View.REWARDS, icon: Trophy, label: 'Rewards' },
    { view: View.TRAINING, icon: Calendar, label: 'Training' },
    { view: View.WORKOUT, icon: Dumbbell, label: 'Workout' },
    { view: View.SETTINGS, icon: Settings, label: 'Settings' },
  ];

  // In the design, it's a floating vertical pill or simple circles. 
  // We will implement a clean floating sidebar.

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      <button 
        onClick={() => setView(View.HOME)}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all ${currentView === View.HOME ? 'bg-blue-500 text-white scale-110' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
      >
        <span className="font-bold text-xl">≡</span>
      </button>

      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-xl flex flex-col gap-3">
        {navItems.slice(1).map((item) => (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              currentView === item.view 
                ? 'bg-blue-100 text-blue-600' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
            title={item.label}
          >
            <item.icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
