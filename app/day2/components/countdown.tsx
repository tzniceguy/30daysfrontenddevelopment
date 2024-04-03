'use client'
import React, { useEffect, useState } from 'react';

export default function Countdown() {
  const launchDate = new Date();
  launchDate.setFullYear(2025, 0, 1); // Set launch date to January 1, 2025

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      // Calculate remaining time in milliseconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      // Update state with calculated time
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="space-x-3 flex  text-5xl">
      <div id="days" className="flex flex-col  items-center gap-1">
        <span className='block font-bold'>{timeLeft.days} </span> <span className="text-xs text-center">Days</span>
      </div>
      <div id="hours" className="flex flex-col items-center gap-1">
        <span className='block font-bold'>{timeLeft.hours.toString().padStart(2, '0')}</span>  <span className="text-xs text-center">Hours</span>
      </div>
      <div id="minutes" className="flex flex-col items-center gap-1">
       <span className="block font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span> <span className='text-xs text-center'>Minutes</span>
      </div>
      <div id="seconds" className="flex flex-col items-center gap-1">
        <span className="block font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span> <span className="text-xs text-center"> Seconds</span>
      </div>
    </div>
  );
}
