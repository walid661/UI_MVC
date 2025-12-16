import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, Sun, Moon } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [volume, setVolume] = useState(70);
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('light');

  return (
    <div className="h-full w-full overflow-y-auto pb-24 px-6 pt-8">
      <div className="flex items-center gap-4 mb-6">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <ChevronLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      </div>

      {/* Volume */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Volume</h3>
            <label className="flex items-center gap-2 text-sm text-gray-500">
                Mute <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
            </label>
        </div>
        <div className="flex items-center gap-4">
            <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume} 
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-1 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-gray-800"
            />
            <span className="text-sm font-medium text-gray-600 w-8">{volume}%</span>
        </div>
      </div>

      {/* Language */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-4">
        <h3 className="font-semibold text-gray-800 mb-4">Language</h3>
        <div className="flex justify-between">
            {['French', 'English', 'Spanish'].map(lang => (
                <label key={lang} className="flex items-center gap-2 cursor-pointer">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${language === lang ? 'border-blue-500' : 'border-gray-300'}`}>
                        {language === lang && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                    </div>
                    <span className="text-sm text-gray-600">{lang}</span>
                    <input type="radio" name="language" className="hidden" checked={language === lang} onChange={() => setLanguage(lang)}/>
                </label>
            ))}
        </div>
      </div>

      {/* Timezone */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-4">
             <h3 className="font-semibold text-gray-800">Time zone</h3>
             <label className="flex items-center gap-2 text-sm text-gray-500">
                Auto-detect <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
            </label>
        </div>
        <div className="border border-gray-100 rounded-xl p-3 flex justify-between items-center">
            <span className="text-gray-400 text-sm">Select Timezone</span>
            <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>

       {/* Notifications */}
       <div className="bg-white rounded-3xl p-6 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-6">
             <h3 className="font-semibold text-gray-800">Notifications</h3>
             <div className="flex items-center gap-2">
                 <span className="text-xs text-gray-400 uppercase">On</span>
                 <div className="w-10 h-6 bg-blue-500 rounded-full p-1 cursor-pointer flex justify-end">
                     <div className="w-4 h-4 bg-white rounded-full"></div>
                 </div>
             </div>
        </div>
        <div className="space-y-3">
             <div className="border border-gray-100 rounded-xl p-3 flex justify-between items-center">
                <span className="text-gray-400 text-sm">From :</span>
                <span className="text-gray-800 text-sm font-medium">08:00 AM</span>
                <ChevronDown size={16} className="text-gray-400" />
            </div>
            <div className="border border-gray-100 rounded-xl p-3 flex justify-between items-center">
                <span className="text-gray-400 text-sm">To :</span>
                <span className="text-gray-800 text-sm font-medium">10:00 PM</span>
                <ChevronDown size={16} className="text-gray-400" />
            </div>
        </div>
      </div>

      {/* Theme */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-4 flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">Theme</h3>
        <div className="bg-gray-100 p-1 rounded-full flex gap-1">
            <button 
                onClick={() => setTheme('light')}
                className={`p-1.5 rounded-full transition-all ${theme === 'light' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-400'}`}
            >
                <Sun size={14} />
            </button>
             <button 
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded-full transition-all ${theme === 'dark' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-400'}`}
            >
                <Moon size={14} />
            </button>
        </div>
      </div>

    </div>
  );
};

export default SettingsPage;
