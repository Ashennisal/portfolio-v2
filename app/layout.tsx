import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashen Nisal | AI Specialist",
  description: "Portfolio of an AI-specialized Software Engineer",
  icons: {
    icon: [
      {
        url: "/icon.png", // This points to your new A logo
        type: "image/png",
      },
    ],
    // This adds the "Apple Touch Icon" which often handles 
    // glowing/transparent icons better on mobile
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
