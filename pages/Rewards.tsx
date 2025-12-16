import React from 'react';
import { BADGES } from '../constants';
import { ChevronLeft } from 'lucide-react';

const Rewards: React.FC = () => {
  return (
    <div className="h-full w-full overflow-y-auto pb-24 px-6 pt-8">
      <div className="flex items-center gap-4 mb-6">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <ChevronLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Badges & Rewards</h1>
      </div>

       {/* Tabs */}
       <div className="flex justify-start gap-6 border-b border-gray-200 mb-6">
        <button className="pb-2 text-gray-800 text-sm font-medium border-b-2 border-gray-800">Consistency</button>
        <button className="pb-2 text-gray-400 text-sm font-medium">Volume</button>
        <button className="pb-2 text-gray-400 text-sm font-medium">Monthly Challenges</button>
      </div>

      <div className="space-y-4">
        {BADGES.map((badge) => (
            <div key={badge.id} className="bg-white p-4 rounded-3xl shadow-sm flex items-center justify-between">
                <div className="flex-1 pr-4">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-800">{badge.title}</h3>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${
                            badge.status === 'completed' ? 'text-green-500' :
                            badge.status === 'in_progress' ? 'text-green-600' : 'text-blue-400'
                        }`}>
                            • {badge.status === 'in_progress' ? 'In Progress' : badge.status}
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-3">{badge.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                        <div 
                            className={`h-1.5 rounded-full ${badge.status === 'completed' ? 'bg-green-500' : 'bg-green-500'}`} 
                            style={{ width: `${(badge.progress / badge.maxProgress) * 100}%` }}
                        ></div>
                    </div>
                    <div className="text-xs text-gray-400 font-medium">
                        {badge.status === 'upcoming' ? 'Upcoming' : `${badge.progress}/${badge.maxProgress}`}
                    </div>
                </div>

                {/* Trophy Icon */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    {/* Simple CSS Trophy Shape representation */}
                    <div className={`text-4xl ${badge.status === 'upcoming' ? 'grayscale opacity-50' : ''}`}>
                        🏆
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
