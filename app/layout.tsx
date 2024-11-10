// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from '../components/Navbar';
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import siteConfig from '@/lib/metadata';

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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.siteName}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: siteConfig.robots,
  openGraph: {
    ...siteConfig.openGraph,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  alternates: {
    canonical: siteConfig.url,
  }
};

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
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}