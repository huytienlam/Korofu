"use client";

import UserNavbar from '../../components/UserNavbar';
import Sidebar from '../../components/Sidebar';
import MoodPicker from '../../components/MoodPicker';
import ColorPalettePicker from '../../components/ColorPalettePicker';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ChooseFood() {
  const router = useRouter();
  const [showMoodPicker, setShowMoodPicker] = useState(false);
  const [showColorPalette, setShowColorPalette] = useState(false);

  const handleClose = () => {
    router.push('/home');
  };

  const handleSkip = () => {
    setShowMoodPicker(true);
  };

  const handleBackToPrompt = () => {
    setShowMoodPicker(false);
  };

  const handleSkipToColorPalette = () => {
    setShowColorPalette(true);
  };

  const handleBackToMoodPicker = () => {
    setShowColorPalette(false);
  };

  // Show Color Palette Picker
  if (showColorPalette) {
    return (
      <div className="min-h-screen bg-[#FFF5F1] border-2 border-blue-500">
        <UserNavbar username="Username" />

        <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
          <Sidebar />
          
          <main className="flex-1 bg-white border-2 border-black rounded-3xl shadow-[8px_8px_0_#000] overflow-hidden">
            {/* Input Bar */}
            <div className="p-6 border-b-2 border-black/20">
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_#000] flex items-center justify-center text-sm font-bold text-[#21120D] hover:shadow-[3px_3px_0_#000] transition-shadow"
                >
                  ✕
                </button>
                
                <div className="flex-1"></div>
                
                <button className="px-4 py-2 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-shadow flex items-center gap-2">
                  <span className="font-bold text-[#21120D] text-sm">Skip</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#21120D]"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <ColorPalettePicker />
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF5F1] border-2 border-blue-500">
      <UserNavbar username="Username" />

      <div className="min-h-screen flex pl-10 mt-5">
        <Sidebar />
        
        <main className="flex-1 bg-white border-2 border-black rounded-3xl shadow-[8px_8px_0_#000] overflow-hidden">
          {/* Input Bar */}
          <div className="p-6 border-b-2 border-black/20">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_#000] flex items-center justify-center text-sm font-bold text-[#21120D] hover:shadow-[3px_3px_0_#000] transition-shadow"
              >
                ✕
              </button>
              
              <div className="flex-1"></div>
              
              <button 
                onClick={showMoodPicker ? handleSkipToColorPalette : handleSkip}
                className="px-4 py-2 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-shadow flex items-center gap-2"
              >
                <span className="font-bold text-[#21120D] text-sm">Skip</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#21120D]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <MoodPicker 
            showMoodPicker={showMoodPicker} 
            onSkip={handleBackToPrompt}
            onSkipToColorPalette={handleSkipToColorPalette}
          />
        </main>
      </div>
    </div>
  );
}
