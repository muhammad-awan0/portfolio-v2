'use client';

import { useState } from 'react';

interface FlippableCardProps {
  title: string;
  duration?: string;
  cardType: 'E' | 'P';
}

export default function FlippableCard({ title, duration, cardType }: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="bg-transparent w-full aspect-[3/4] perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsFlipped(!isFlipped);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${title} card. Press Enter to flip.`}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-[#2D1C59] rounded-xl border-2 border-light-blue flex flex-col justify-between p-6 shadow-[0_0_15px_rgba(139,217,255,0.3)] group-hover:shadow-[0_0_20px_rgba(139,217,255,0.5)] transition-shadow duration-300">
            <div className="text-2xl font-bold text-yellow font-serif italic">{cardType}</div>
            <div className="text-8xl font-bold text-yellow self-center font-serif italic relative">
              {cardType}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-2 border-light-blue rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
            </div>
            <div className="text-2xl font-bold text-yellow self-end rotate-180 font-serif italic">{cardType}</div>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#251747] rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(139,217,255,0.3)]">
          <h3 className="text-yellow text-2xl font-bold mb-4 font-serif">{title}</h3>
          {duration && <p className="text-yellow-light">{duration}</p>}
        </div>
      </div>
    </div>
  );
}