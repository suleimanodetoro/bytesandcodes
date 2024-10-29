import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from '../components/Navbar';
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";  // Import the Toaster component

// Local fonts setup
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "NonProfit Organization",
  description: "Making a difference in the community.",
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Navbar Component */}
        <Navbar />
        
        {/* Children Components */}
        {children}
        
        {/* Footer Component */}
        <Footer />
        
        {/* Toaster Component */}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
