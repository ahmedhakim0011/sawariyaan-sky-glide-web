
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 30 days from now (you can change this)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
        <div className="text-3xl md:text-4xl font-bold text-sawariyaan-green">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-200 mt-1">Days</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
        <div className="text-3xl md:text-4xl font-bold text-sawariyaan-green">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-200 mt-1">Hours</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
        <div className="text-3xl md:text-4xl font-bold text-sawariyaan-green">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-200 mt-1">Minutes</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
        <div className="text-3xl md:text-4xl font-bold text-sawariyaan-green">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-200 mt-1">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
