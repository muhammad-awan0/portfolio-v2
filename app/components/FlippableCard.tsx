'use client';

import { useState } from 'react';

interface FlippableCardProps {
  title: string;
  description: string;
}

export default function FlippableCard({ title, description }: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="bg-transparent w-full aspect-[2/3] perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-[#20133F] rounded-lg border-2 border-[#8BD9FF] flex flex-col justify-between p-4">
            <div className="text-2xl font-bold text-[#FFD700] font-serif italic">{title[0]}</div>
            <div className="text-7xl font-bold text-[#FFD700] self-center font-serif italic relative">
              {title[0]}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border border-[#8BD9FF] rounded-full opacity-20"></div>
              </div>
            </div>
            <div className="text-2xl font-bold text-[#FFD700] self-end rotate-180 font-serif italic">{title[0]}</div>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white bg-opacity-10 rounded-lg p-4 flex flex-col justify-center items-center text-center">
          <h3 className="text-yellow text-xl font-bold mb-2 font-serif">{title}</h3>
          <p className="text-light-blue">{description}</p>
        </div>
      </div>
    </div>
  );
}