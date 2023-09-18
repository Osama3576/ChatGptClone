'use client';
import { useState, useEffect } from 'react';

let text =
  'Hey, Umar How can I Assist you today.Please SignUp To GetStarted.';
function LeftSide() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Adjust the delay before hiding

      return () => {
        setTimeout(() => {
          setIsVisible(true);
          setCurrentText('');
          setCurrentIndex(0);
        }, 1000);

        // Reset to start typing from the beginning
      };
    }
  }, [currentIndex, isVisible]);
  return (
    <div className="bg-[#ffffdb] h-[25rem] overflow-hidden rounded-b-3xl md:h-screen md:rounded-none ">
      <div className="flex items-center gap-1 p-6">
        <h1 className="text-2xl font-semibold text-orange-500">
          ChatGPT
        </h1>
        <div className="w-4 h-4 bg-orange-500 rounded-full "></div>
      </div>

      <div
        className={`${isVisible ? 'opacity-100' : 'opacity-0'} ${
          isVisible ? 'translate-y-4' : 'translate-y-0'
        }  p-6 mt-16 text-left duration-500 transition text-orange-500 md:mt-40`}
      >
        <h1 className="text-[2rem] font-bold">Write A text</h1>
        <p className="text-xl font-medium">
          {currentText}
          {isVisible && (
            <span className="inline-block w-4 h-4 ml-2 bg-orange-500 rounded-full" />
          )}
        </p>
      </div>
    </div>
  );
}

export default LeftSide;
