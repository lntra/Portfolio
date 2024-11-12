import React from 'react';
import './App.css';
import Bg from './components/assets/background.jpg';
import LandingPage from './components/organism/landingpage';

function App() {
  return (
    <div className="App relative w-screen h-screen font-grotesk text-white overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div 
        className="absolute inset-0 bg-repeat opacity-50 z-10" 
        style={{ 
          backgroundColor: '#e5e5f7',
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle at center center, #D00000, #FFFFFF), repeating-radial-gradient(circle at center center, #D00000, #D00000 10px, transparent 20px, transparent 10px)',
          backgroundBlendMode: 'multiply',
        }}        
      />

      <div className="relative z-20 h-full w-full">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;

