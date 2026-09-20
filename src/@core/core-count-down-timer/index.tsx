import { useEffect, useState } from "react";

type CoreCountDownTimerProps = {
  minutes: number; // total countdown time in minutes
};

export default function CoreCountDownTimer({
  minutes,
}: CoreCountDownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
  });

  useEffect(() => {
    // Caculate the milisecond for take the time that the clock need to ending
    const totalSeconds = minutes * 60;
    const endTime = Date.now() + totalSeconds * 1000;

    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000));

      const days = Math.floor(remaining / (60 * 60 * 24)); //Get the second in one day = 86,400's -> then use rest second to slice 86400 then we have rest day
      const hours = Math.floor((remaining % (60 * 60 * 24)) / 3600); //Get the rest second
      const mins = Math.floor((remaining % 3600) / 60); // remaining % 3600 will return total of hour in rest time ->

      setTimeLeft({ days, hours, mins });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [minutes]);

  return (
    <div className="flex gap-6 justify-center text-center">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.mins },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center bg-white/80 rounded-xl shadow-md p-4 w-20"
        >
          <div className="text-3xl font-semibold text-gray-800">
            {item.value}
          </div>
          <div className="text-sm text-gray-600">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
