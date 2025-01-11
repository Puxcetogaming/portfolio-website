"use client";

import React, { useEffect, useState } from "react";

export default function StarField({ count = 50 }) {
  const [stars, setStars] = useState<
    { x: number; y: number; size: number; delay: number; opacity: number; }[]
  >([]);

  useEffect(() => {
    const newStars = Array.from({ length: count }).map(() => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 2;
      const size = Math.random() * 4 + 2;
      const opacity = Math.random() * 0.5 + 0.5;

      return { x, y, size, delay, opacity };
    });
    setStars(newStars);
  }, [count]);

  return (
    <>
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            // or a bright color
            backgroundColor: "#fff",
            boxShadow: "0 0 4px #ffffff", // a glow effect
            animationDelay: `${star.delay}s`,
          }}
          
        />
      ))}
    </>
  );
}
