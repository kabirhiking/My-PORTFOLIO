import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete, onError }) => {
  const [text, setText] = useState("");
  const fullText = "RAIHAN KABIR // SOFTWARE ENGINEER";

  useEffect(() => {
    try {
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;

        if (index > fullText.length) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 500);
        }
      }, 40);

      return () => {
        clearInterval(interval);
      };
    } catch (error) {
      console.error("LoadingScreen error:", error);
      if (onError) {
        onError(error);
      } else {
        setTimeout(onComplete, 100);
      }
    }
  }, [onComplete, onError]);

  return (
    <div className="fixed inset-0 z-50 bg-[#F5F0E8] text-[#2A2A2A] flex flex-col items-center justify-center">
      <div className="text-xs font-mono text-[#C8A96A] uppercase tracking-widest mb-3">
        // SYSTEM INITIALIZATION
      </div>
      <div className="mb-6 text-xl sm:text-2xl font-serif font-bold tracking-wider text-[#2A2A2A]">
        {text} <span className="animate-blink text-[#6E1E2A]">|</span>
      </div>

      <div className="w-[220px] h-[3px] bg-[#E4DCD0] rounded-full relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#6E1E2A] animate-loading-bar rounded-full"></div>
      </div>
    </div>
  );
};
