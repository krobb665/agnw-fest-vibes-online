
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-30T12:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-8 rounded-xl border border-blue-400/30 backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-center mb-6 text-blue-400">COUNTDOWN TO AGNW FEST 2026</h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-black/50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-blue-400">{timeLeft.days}</div>
          <div className="text-sm text-gray-400">DAYS</div>
        </div>
        <div className="bg-black/50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-blue-400">{timeLeft.hours}</div>
          <div className="text-sm text-gray-400">HOURS</div>
        </div>
        <div className="bg-black/50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-blue-400">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-400">MINUTES</div>
        </div>
        <div className="bg-black/50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-blue-400">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-400">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
