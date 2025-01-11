// client/app/page.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarField from "../../components/StarField";

export default function LandingPage() {
  const [launched, setLaunched] = useState(false);
  const [exhaust, setExhaust] = useState<ExhaustParticle[]>([]);

  const handleLaunch = () => {
    setLaunched(true);

    // Spawn exhaust every 20ms for ~10 seconds
    const interval = setInterval(() => {
      setExhaust((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), x: 0, y: 0 },
      ]);
    }, 20);

    // Stop spawning after 10s
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Star Field */}
      <div className="absolute inset-0 z-0">
        <StarField count={100} />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center h-screen text-center p-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Space Explorer
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Journey through the cosmos with our Next.js &amp; Tailwind-powered
          portal.
        </motion.p>

        {/* Launch Button */}
        <motion.button
          className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition text-white font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLaunch}
        >
          Launch
        </motion.button>
      </section>

      {/* Floating Planet (top-left) */}
      <motion.img
        src="/planet.png"
        alt="Planet"
        className="absolute w-50 h-50 top-0 left-0"
        initial={{ x: -300, y: 50, rotate: -30, opacity: 0.7 }}
        animate={{ x: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      {/* Rocket (bottom-center) */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        initial={{ y: 400 }}
        animate={launched ? { y: -2000 } : { y: 400 }}
        transition={{ duration: 6, ease: "easeIn" }}
      >
        {/* Larger Rocket */}
        <img
          src="/StarShip.png"
          alt="Rocket"
          className="h-64 md:h-96" // bigger rocket size
        />

        {/* Exhaust Particles */}
        <AnimatePresence>
          {exhaust.map((particle) => (
            <ExhaustParticle
              key={particle.id}
              particle={particle}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}

/** Type for an exhaust particle. */
type ExhaustParticle = {
  id: number;
  x: number;
  y: number;
};

/**
 * Single small "exhaust" particle that moves downward and fades out.
 */
function ExhaustParticle({ particle }: { particle: ExhaustParticle }) {
  return (
    <motion.div
      className="
        absolute
        left-1/2
        transform
        -translate-x-1/2
        w-10
        h-10
        bg-yellow-400
        rounded-full
        z-10
      "
      initial={{ y: 0, opacity: 1, scale: 1 }}
      animate={{ y: 150, opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      style={{
        bottom: "-2.5rem", // place under the rocket nozzle
      }}
    />
  );
}
