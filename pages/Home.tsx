import React from 'react';
import { Volume2 } from 'lucide-react';

interface HomeProps {
  lastMessage: string | null;
}

const Home: React.FC<HomeProps> = ({ lastMessage }) => {
  return (
    <div className="h-full w-full relative flex flex-col items-center pt-16">
      {/* Top right volume icon */}
      <div className="absolute top-8 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 cursor-pointer hover:scale-105 transition">
        <Volume2 size={24} />
      </div>

      <div className="mt-10 text-center z-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Start your Journey</h1>
        <p className="text-gray-500 text-sm px-10">
          Coach Mike's got your back. Say hey and let's get moving!
        </p>
      </div>

      {/* 3D Avatar Container */}
      <div className="relative flex-1 w-full max-w-md flex items-end justify-center pb-24">
         {/* Using a placeholder for the 3D character */}
        <img 
          src="https://picsum.photos/seed/coachmike/600/800" 
          alt="Coach Mike Avatar" 
          className="h-[60vh] object-contain drop-shadow-2xl mask-image-gradient"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
          }}
        />

        {/* Chat Bubble if message exists */}
        {lastMessage && (
           <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl rounded-bl-none animate-bounce-in border border-gray-100">
             <p className="text-gray-700 text-sm font-medium">{lastMessage}</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default Home;
