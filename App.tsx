import React, { useState } from 'react';
import { View } from './types';
import BottomNav from './components/BottomNav';
import VoiceInput from './components/VoiceInput';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Statistics from './pages/Statistics';
import Rewards from './pages/Rewards';
import Training from './pages/Training';
import SettingsPage from './pages/Settings';
import Workout from './pages/Workout';

const App: React.FC = () => {
  const [currentView, setView] = useState<View>(View.HOME);
  const [lastMessage, setLastMessage] = useState<string | null>(null);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text: string) => {
    setIsLoading(true);
    console.log("Chat input:", text);
    setTimeout(() => {
        setLastMessage("I'm focused on your program right now!");
        setIsLoading(false);
    }, 1000);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Home lastMessage={lastMessage} />;
      case View.PROFILE:
        return <Profile />;
      case View.STATISTICS:
        return <Statistics />;
      case View.REWARDS:
        return <Rewards />;
      case View.TRAINING:
        return <Training />;
      case View.SETTINGS:
        return <SettingsPage />;
      case View.WORKOUT:
        return <Workout />;
      default:
        return <Home lastMessage={lastMessage} />;
    }
  };

  return (
    <div className="relative w-full h-full max-w-md mx-auto bg-white/50 shadow-2xl overflow-hidden sm:rounded-[40px] sm:h-[95vh] sm:mt-[2.5vh] sm:border-[8px] sm:border-white transition-all duration-300 flex flex-col">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-80" />
      
      {/* Main Content Area - Added pb-24 for bottom nav space */}
      <main className="flex-1 w-full overflow-hidden pb-24 relative">
        {renderView()}
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav currentView={currentView} setView={setView} />

      {/* Voice/Text Input */}
      {currentView !== View.HOME && currentView !== View.WORKOUT && (
        <div className="mb-20"> {/* Adjust for bottom nav */}
             <VoiceInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default App;