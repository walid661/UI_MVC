import React from 'react';
import { MOCK_PROFILE } from '../constants';
import { ChevronLeft, Edit2, Settings, User, Mail, Key, Lock, ChevronDown } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="h-full w-full overflow-y-auto pb-24 px-6 pt-8">
       <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <ChevronLeft size={24} className="text-gray-700" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        </div>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-gray-700">
            <Settings size={20} />
        </button>
      </div>

      {/* Avatar Header */}
      <div className="flex justify-center mb-8 relative">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="https://picsum.photos/seed/user/200/200" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <button className="absolute bottom-0 right-[35%] translate-x-1/2 bg-white p-2 rounded-full shadow-md text-gray-600">
            <Edit2 size={14} />
        </button>
      </div>

      <div className="bg-white/50 backdrop-blur-md rounded-[32px] p-6 shadow-sm">
        <div className="space-y-5">
            {/* Name Fields */}
            <div>
                <label className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-2">
                    <User size={12} /> First Name
                </label>
                <div className="bg-white rounded-2xl p-4 shadow-sm text-gray-800 font-medium border border-transparent focus-within:border-blue-300">
                    {MOCK_PROFILE.firstName}
                </div>
            </div>

            <div>
                <label className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-2">
                    <User size={12} /> Last Name
                </label>
                <div className="bg-white rounded-2xl p-4 shadow-sm text-gray-800 font-medium">
                    {MOCK_PROFILE.lastName}
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-2">
                    <Mail size={12} /> Email Address
                </label>
                <div className="bg-white rounded-2xl p-4 shadow-sm text-gray-600 text-sm">
                    {MOCK_PROFILE.email}
                </div>
            </div>

             {/* Password */}
             <div>
                <label className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-2">
                    <Key size={12} /> Password
                </label>
                <div className="bg-white rounded-2xl p-4 shadow-sm text-gray-800 font-medium tracking-widest text-xl h-14 flex items-center">
                    ••••••••••••
                </div>
                <div className="text-right mt-1">
                    <span className="text-xs text-gray-400">Change password</span>
                </div>
            </div>

            {/* Goal */}
            <div>
                <label className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-2">
                    <Lock size={12} /> Main Fitness Goal
                </label>
                <div className="bg-white rounded-2xl p-4 shadow-sm text-gray-800 font-medium flex justify-between items-center">
                    {MOCK_PROFILE.goal}
                    <ChevronDown size={16} className="text-gray-400" />
                </div>
            </div>

            {/* Age Weight split */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between items-center">
                    <span className="text-sm text-gray-500">Your Age</span>
                    <ChevronDown size={16} className="text-gray-400" />
                </div>
                 <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between items-center">
                    <span className="text-sm text-gray-500">Your Weight</span>
                    <ChevronDown size={16} className="text-gray-400" />
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
