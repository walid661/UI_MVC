import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Training: React.FC = () => {
    // Hardcoded calendar for August 2025 as per image
    const days = Array.from({length: 31}, (_, i) => i + 1);
    const startOffset = 4; // Starts on Friday (approximate for Aug 2025)

  return (
    <div className="h-full w-full overflow-y-auto pb-24 px-6 pt-8">
       <div className="flex items-center gap-4 mb-6">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <ChevronLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Training</h1>
      </div>

      <div className="bg-white rounded-[32px] p-6 shadow-sm mb-6">
        <div className="flex justify-between items-center mb-6">
            <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500"><ChevronLeft size={16}/></button>
            <h2 className="font-semibold text-lg text-gray-800">August 2025</h2>
            <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500"><ChevronRight size={16}/></button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center mb-2">
            {['Mon', 'Tue', 'Wed', 'The', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-xs text-gray-400 font-medium">{day}</div>
            ))}
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
            {Array.from({length: startOffset}).map((_, i) => <div key={`empty-${i}`}></div>)}
            {days.map(day => (
                <div key={day} className="flex flex-col items-center gap-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        day === 10 ? 'bg-blue-500 text-white shadow-blue-200 shadow-lg' : 'text-gray-700'
                    }`}>
                        {day}
                    </div>
                    {[5, 10, 18, 19, 21, 23, 6].includes(day) && (
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    )}
                </div>
            ))}
        </div>
      </div>

      <div className="bg-white rounded-[32px] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Last completed session</h3>
        
        <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-400 text-sm">Name</span>
                <span className="font-medium text-gray-800 text-right">Full body workout</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-400 text-sm">Type</span>
                <span className="font-medium text-gray-800 text-right">Full body</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-400 text-sm">Duration</span>
                <span className="font-medium text-gray-800 text-right">1 h</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-400 text-sm">Date</span>
                <span className="font-medium text-gray-800 text-right">04/08/2025</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-400 text-sm">Kcal burned</span>
                <span className="font-medium text-gray-800 text-right">500</span>
            </div>
             <div className="flex justify-between items-center py-2">
                <span className="text-gray-400 text-sm">Muscles worked</span>
                <span className="font-medium text-gray-800 text-right">Core, legs</span>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Training;
