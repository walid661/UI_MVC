import React, { useState } from 'react';
import { View } from './types';
import Sidebar from './components/Sidebar';
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
  
  // Note: We are now handling the main generation flow inside Home.tsx using mockApi
  // The VoiceInput could still be used for generic chat if we wire it up later.
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text: string) => {
    setIsLoading(true);
    // Placeholder for future chat integration
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
    <div className="relative w-full h-full max-w-md mx-auto bg-white/50 shadow-2xl overflow-hidden sm:rounded-[40px] sm:h-[95vh] sm:mt-[2.5vh] sm:border-[8px] sm:border-white transition-all duration-300">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-80" />
      
      {/* Sidebar Navigation */}
      <Sidebar currentView={currentView} setView={setView} />

      {/* Main Content Area */}
      <main className="h-full w-full">
        {renderView()}
      </main>

      {/* Voice/Text Input - Only show when NOT in generated program view (handled nicely via z-index or conditional rendering if needed) */}
      {/* For this specific flow, let's keep it simple and only show on Profile/Stats/etc or if Home is in welcome state. 
          For now, we hide it on Home to focus on the Onboarding Action Button flow. 
      */}
      {currentView !== View.HOME && currentView !== View.WORKOUT && (
        <VoiceInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      )}
    </div>
  );
};

export default App;
