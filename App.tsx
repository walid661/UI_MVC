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
import { generateCoachResponse } from './services/geminiService';

const App: React.FC = () => {
  const [currentView, setView] = useState<View>(View.HOME);
  const [lastMessage, setLastMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text: string) => {
    setIsLoading(true);
    // Simulating immediate user feedback if needed, but for now we wait for response
    const response = await generateCoachResponse(text);
    setLastMessage(response);
    setIsLoading(false);
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
    <div className="relative w-full h-full max-w-md mx-auto bg-white/50 shadow-2xl overflow-hidden sm:rounded-[40px] sm:h-[95vh] sm:mt-[2.5vh] sm:border-8 sm:border-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-80" />
      
      {/* Sidebar Navigation */}
      <Sidebar currentView={currentView} setView={setView} />

      {/* Main Content Area */}
      <main className="h-full w-full">
        {renderView()}
      </main>

      {/* Voice/Text Input - Only show on Home or Workout for context */}
      <VoiceInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default App;
