import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

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
const italianaRegular = localFont({
  src: "./fonts/Italiana-Regular.ttf",
  variable: "--font-italiana-regular",
  weight: "100 900",
});
const instrumentSerifRegular = localFont({
  src: "./fonts/InstrumentSerif-Regular.ttf",
  variable: "--font-instrument-serif-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}
          ${geistMono.variable}
          ${italianaRegular.variable}
          ${instrumentSerifRegular.variable}
          antialiased `}
      >
        <Navbar>{children}</Navbar>
        <Footer />
      </body>
    </html>
  );
}
