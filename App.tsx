import React, { useState } from 'react';
import { View } from './types';
import Layout from './components/Layout';
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
  const [isLoading, setIsLoading] = useState(false);

  // Simple state to pass simulated messages to home
  const [lastMessage, setLastMessage] = useState<string | null>(null);

  const handleSendMessage = async (text: string) => {
    setIsLoading(true);
    // Simulation of network request
    setTimeout(() => {
        setLastMessage("I'm focused on your program right now!");
        setIsLoading(false);
    }, 1000);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME: return <Home lastMessage={lastMessage} />;
      case View.PROFILE: return <Profile />;
      case View.STATISTICS: return <Statistics />;
      case View.REWARDS: return <Rewards />;
      case View.TRAINING: return <Training />;
      case View.SETTINGS: return <SettingsPage />;
      case View.WORKOUT: return <Workout />;
      default: return <Home lastMessage={lastMessage} />;
    }
  };

  return (
    <Layout>
      {/* Scrollable Content Area */}
      <main className="absolute inset-0 overflow-y-auto overflow-x-hidden pb-32 scroll-smooth no-scrollbar">
        {renderView()}
      </main>

      {/* Floating UI Layer (Z-Index high, non-blocking pointer events for container) */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-50 flex flex-col justify-end pb-0">
         
         {/* Voice Input (Visible only on Home, floating above nav) */}
         {currentView === View.HOME && (
            <div className="w-full px-6 mb-28 pointer-events-auto animate-fade-in">
                <VoiceInput onSendMessage={handleSendMessage} isLoading={isLoading} />
            </div>
         )}
         
         {/* Bottom Navigation Island */}
         <div className="pointer-events-auto w-full">
            <BottomNav currentView={currentView} setView={setView} />
         </div>

         {/* Bottom Gradient Fade for Nav Area */}
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent -z-10" />
      </div>
    </Layout>
  );
};

export default App;