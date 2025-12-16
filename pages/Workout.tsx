import React, { useState } from 'react';
import { UPCOMING_EXERCISES } from '../constants';
import { ChevronLeft, Volume2, Pause, Play, ChevronDown, List } from 'lucide-react';

const Workout: React.FC = () => {
    const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showList, setShowList] = useState(false);

    const activeExercise = UPCOMING_EXERCISES[activeExerciseIndex];

    const toggleList = () => setShowList(!showList);

  return (
    <div className="h-full w-full relative flex flex-col">
       {/* Top Bar */}
       <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <ChevronLeft size={24} className="text-gray-700" />
            </button>
            <div className="text-center">
                <div className="text-xl font-bold text-gray-800">12:00<span className="text-gray-400 text-sm">/20:00</span></div>
                <div className="text-xs text-gray-400">Global workout time</div>
            </div>
            <button 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
                onClick={toggleList}
            >
                 {showList ? <ChevronDown size={24} className="text-gray-700"/> : <List size={24} className="text-gray-700" />}
            </button>
       </div>

       {/* Floating Reps Pill */}
       <div className="absolute top-24 left-6 z-10 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Reps</div>
            <div className="text-xl font-bold text-gray-800">06/10</div>
       </div>

       {/* Main 3D visual area */}
       <div className="flex-1 w-full flex items-center justify-center bg-gradient-to-b from-blue-50/50 to-white relative">
            <img 
                src="https://picsum.photos/seed/workout3d/600/800"
                alt="3D Workout" 
                className="h-[65%] object-contain drop-shadow-2xl mix-blend-multiply" 
            />
       </div>

       {/* Bottom Controls */}
       <div className="bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] p-8 pb-24 z-20 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Kettlebell Goblet Squat</h2>
                    <p className="text-sm text-gray-400">Glutes, Hamstrings, Core</p>
                </div>
                 <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition"
                >
                    {isPlaying ? <Pause size={20} className="text-gray-800"/> : <Play size={20} className="text-gray-800 ml-1"/>}
                </button>
            </div>

            {/* Progress Slider */}
            <div className="relative h-1 bg-gray-100 rounded-full my-6">
                <div className="absolute left-0 top-0 bottom-0 bg-gray-800 w-1/3 rounded-full"></div>
            </div>

            <div className="flex justify-between text-xs text-gray-400 font-medium">
                <span>00:16</span>
                <span>00:40</span>
            </div>
       </div>

       {/* Exercises List Overlay (Glassmorphism) */}
       {showList && (
           <div className="absolute inset-0 z-30 bg-black/20 backdrop-blur-md pt-20 px-6 pb-32 overflow-y-auto">
               <h3 className="text-white text-lg font-medium text-center mb-6">Upcoming Exercises</h3>
               
               <div className="space-y-4">
                   {UPCOMING_EXERCISES.map((ex, idx) => (
                       <div key={ex.id} className="bg-white/80 backdrop-blur-lg rounded-3xl p-4 flex gap-4 items-center shadow-lg border border-white/40">
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                                <img src={ex.image} alt={ex.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-800">{ex.name}</h4>
                                <div className="flex gap-4 text-xs mt-1">
                                    <div>
                                        <p className="font-bold text-white drop-shadow-md">{ex.duration || `${ex.sets}x${ex.reps}`}</p>
                                        <p className="text-gray-500 scale-90 origin-left">Duration</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white drop-shadow-md">{ex.level}</p>
                                        <p className="text-gray-500 scale-90 origin-left">Level</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white drop-shadow-md">{ex.targetMuscle}</p>
                                        <p className="text-gray-500 scale-90 origin-left">Target</p>
                                    </div>
                                </div>
                                <button className="mt-3 w-full py-1.5 border border-white rounded-full text-xs text-white font-medium bg-white/20 hover:bg-white/30 transition">
                                    {ex.recovery}
                                </button>
                            </div>
                       </div>
                   ))}
               </div>
           </div>
       )}
    </div>
  );
};

export default Workout;
