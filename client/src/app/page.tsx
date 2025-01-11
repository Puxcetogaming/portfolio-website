// client/app/page.tsx
"use client";
import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen p-4 bg-gradient-to-b from-blue-100 to-white">
        <h1 className="text-6xl font-extrabold mb-4 text-blue-900">Iliyan Slavchov</h1>
        <p className="text-xl mb-6 max-w-xl text-center">
          Front-End Developer specializing in creating beautiful, responsive
          interfaces with Next.js and Tailwind CSS.
        </p>
        <button className="px-8 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl transition">
          Explore Portfolio
        </button>
      </section>
    </main>
  );
}
