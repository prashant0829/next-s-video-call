"use client";
import React, { useState, useEffect } from "react";

const HomeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCurrentTime(new Date());
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <>
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism mx-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: {formatTime(currentTime)}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold  lg:text-7xl">
              {formatTime(currentTime)}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {formatDate(currentTime)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeClock;
