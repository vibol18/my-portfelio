import React, { useEffect, useState } from "react";
import Background from "../animatte/Background";

function Hero() {
  const fullText = "Hello, I'm Vibol";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <Background/>
      <div className="text-center px-4">
       
        <h1 className="text-3xl md:text-6xl text-red-500 font-bold">
          {displayedText}
          <span className="blinking-cursor">|</span>
        </h1>

        <div className="mt-2 h-1 w-32 mx-auto bg-red-500 rounded-full animate-pulse"></div>

       
        <p className="text-gray-300 mt-4 text-sm md:text-lg">
          Full Stack Developer (Laravel/ Express | React / Vue.js)
        </p>

        
        <img
          src="https://vibol18.github.io/mitchacademytwo/IMG_9467.JPG"
          alt="Vibol"
          className="w-36 md:w-48 rounded-full border-4 border-red-500 mt-6 mx-auto object-cover animate-fadeIn"
        />

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-red-500 text-3xl font-bold">↓</div>
        </div>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease forwards;
        }

        .blinking-cursor {
          display: inline-block;
          width: 0.3ch;
          background-color: red;
          margin-left: 4px;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 50%, 100% { background-color: red; }
          25%, 75% { background-color: transparent; }
        }
        `}
      </style>
    </section>
  );
}

export default Hero;
