"use client";
import React, { useEffect, useState, useRef } from "react";
import { calculateTimeLeft } from "@/utils/Timer";

const Timer = () => {
  const targetDate = "2023-08-12"; // Replace with your target date
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full flex items-center justify-center z-10">
      <div className="flex items-center justify-center gap-3 mx-auto bg-gradient-to-b from-[#5E5AEC] to-[#3F9EFC] rounded-full  sm:p-4 p-[8px] shadow-sm">
        <div className="sm:h-[80px] h-[60px] sm:w-[80px] w-[60px] flex flex-col items-center justify-center gap-[2px] rounded-full bg-white-main">
          <p className="text-black-secondary text-xl sm:text-2xl font-semibold">
            {timeLeft.days}
          </p>
          <p className="font-semibold text-black-secondary sm:text-xs text-[10px]">
            Days
          </p>
        </div>

        <div className="sm:h-[80px] h-[60px] sm:w-[80px] w-[60px] flex flex-col items-center justify-center gap-[2px] rounded-full bg-white-main">
          <p className="text-black-secondary text-xl sm:text-2xl font-semibold">
            {timeLeft.hours}
          </p>
          <p className="font-semibold text-black-secondary sm:text-xs text-[10px]">
            Hours
          </p>
        </div>

        <div className="sm:h-[80px] h-[60px] sm:w-[80px] w-[60px] flex flex-col items-center justify-center gap-[2px] rounded-full bg-white-main">
          <p className="text-black-secondary text-xl sm:text-2xl font-semibold">
            {timeLeft.minutes}
          </p>
          <p className="font-semibold text-black-secondary sm:text-xs text-[10px]">
            Minutes
          </p>
        </div>
        <div className="sm:h-[80px] h-[60px] sm:w-[80px] w-[60px] flex flex-col items-center justify-center gap-[2px] rounded-full bg-white-main">
          <p className="text-black-secondary text-xl sm:text-2xl font-semibold">
            {timeLeft.seconds}
          </p>
          <p className="font-semibold text-black-secondary sm:text-xs text-[10px]">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
