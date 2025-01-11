// client/app/layout.tsx
import "./globals.css"; // tailwind imports
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Professional front-end landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Nav Bar or Header here */}
        {children}
        {/* Footer here */}
      </body>
    </html>
  );
}
