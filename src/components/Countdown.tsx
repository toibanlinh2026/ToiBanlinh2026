import { useState, useEffect } from 'react';

const CountdownUnit = ({ value, label }: { value: number, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-brand-yellow rounded-xl bg-black/40 backdrop-blur-sm mb-2">
      <span className="text-2xl md:text-3xl font-bold">{value.toString().padStart(2, '0')}</span>
    </div>
    <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{label}</span>
  </div>
);

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // 23:59:59 18/07/2026 GMT+7
    const targetDate = new Date('2026-07-18T23:59:59+07:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); // calculate immediately
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center md:items-start mt-auto pb-12">
      <div className="flex gap-4 md:gap-6">
        <CountdownUnit value={timeLeft.days} label="Ngày" />
        <CountdownUnit value={timeLeft.hours} label="Giờ" />
        <CountdownUnit value={timeLeft.minutes} label="Phút" />
        <CountdownUnit value={timeLeft.seconds} label="Giây" />
      </div>
      <p className="font-bold text-white mt-6 text-lg md:text-xl text-center md:text-left drop-shadow-md tracking-wide">
        đến ngày đóng <span className="text-brand-yellow">vòng đơn</span> Tôi Bản lĩnh 2026
      </p>
    </div>
  );
};
