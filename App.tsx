
import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeView from './views/HomeView';
import CropDoctorView from './views/CropDoctorView';
import MarketView from './views/MarketView';
import ChatView from './views/ChatView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeView />;
      case 'doctor': return <CropDoctorView />;
      case 'market': return <MarketView />;
      case 'chat': return <ChatView />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="h-screen h-[100dvh] bg-slate-50 flex flex-col max-w-md mx-auto relative shadow-2xl overflow-hidden">
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-emerald-100/50 to-transparent pointer-events-none"></div>
      
      {/* 
          Main container scrolls for most views. 
          For 'chat', we disable main scroll so ChatView can handle its own internal scrolling for the message list.
      */}
      <main className={`flex-1 px-5 pt-8 z-10 ${activeTab === 'chat' ? 'overflow-hidden' : 'overflow-y-auto hide-scrollbar'}`}>
        {renderContent()}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Floating Action Hint - Only show on Home */}
      {activeTab === 'home' && (
        <div className="fixed bottom-24 right-6 animate-bounce z-20">
          <button 
            onClick={() => setActiveTab('doctor')}
            className="w-14 h-14 bg-emerald-600 rounded-full shadow-xl flex items-center justify-center text-white ring-4 ring-emerald-600/20"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
