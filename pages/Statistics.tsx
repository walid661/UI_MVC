import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, LineChart, Line, Cell } from 'recharts';
import { WEEKLY_CALORIES, VOLUME_DATA } from '../constants';
import { ChevronLeft } from 'lucide-react';

const Statistics: React.FC = () => {
  return (
    <div className="h-full w-full overflow-y-auto pb-24 px-6 pt-8">
      <div className="flex items-center gap-4 mb-6">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <ChevronLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Statistics</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-between border-b border-gray-200 mb-6">
        <button className="pb-2 text-gray-400 text-sm font-medium">Day</button>
        <button className="pb-2 text-gray-800 text-sm font-medium border-b-2 border-gray-800">Week</button>
        <button className="pb-2 text-gray-400 text-sm font-medium">Month</button>
      </div>

      {/* Calories Chart */}
      <div className="bg-white p-5 rounded-3xl shadow-sm mb-4">
        <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 rounded-full border-2 border-blue-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
            <h3 className="font-semibold text-gray-800">Calories burned</h3>
        </div>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={WEEKLY_CALORIES}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#9CA3AF' }} 
                dy={10}
              />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="calories" radius={[6, 6, 6, 6]}>
                {WEEKLY_CALORIES.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.name === 'Sat' ? '#3B82F6' : '#E0F2FE'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Completed Sessions */}
      <div className="bg-white p-5 rounded-3xl shadow-sm mb-4">
        <div className="flex items-center gap-2 mb-2">
            <span className="text-green-500">✅</span>
            <h3 className="font-semibold text-gray-800">Completed sessions</h3>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '32%' }}></div>
        </div>
        <p className="text-xs text-gray-400">32 sessions completed successfully</p>
      </div>

      {/* Training Volume */}
      <div className="bg-white p-5 rounded-3xl shadow-sm mb-4">
        <div className="flex justify-between items-center mb-4">
             <div className="flex items-center gap-2">
                <span className="text-blue-500">⚖️</span>
                <h3 className="font-semibold text-gray-800">Training volume</h3>
            </div>
            <div className="text-xs text-gray-400 font-mono">X: Sets×reps Y: Weight</div>
        </div>
       
        <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={VOLUME_DATA}>
                <Line 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="#22D3EE" 
                    strokeWidth={2} 
                    dot={false}
                />
            </LineChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Circular Stats Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-3xl shadow-sm flex flex-col items-center justify-center">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Curves cardio</h4>
            <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="36" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                    <circle cx="48" cy="48" r="36" stroke="#fbbf24" strokeWidth="8" fill="transparent" strokeDasharray="226" strokeDashoffset="100" strokeLinecap="round" />
                </svg>
                <span className="absolute text-xl font-bold text-gray-800">55<span className="text-xs text-gray-400">%</span></span>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">55% Curves cardio</p>
        </div>

        <div className="bg-white p-4 rounded-3xl shadow-sm flex flex-col items-center justify-center">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Mobility</h4>
            <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="36" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                    <circle cx="48" cy="48" r="36" stroke="#6366f1" strokeWidth="8" fill="transparent" strokeDasharray="226" strokeDashoffset="72" strokeLinecap="round" />
                </svg>
                <span className="absolute text-xl font-bold text-gray-800">68<span className="text-xs text-gray-400">%</span></span>
            </div>
             <p className="text-xs text-gray-400 mt-2 text-center">68% Mobility</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
