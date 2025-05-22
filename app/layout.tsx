import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Navbar } from "./components";
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
  title: "PostFlow | Write it, tweak it, share it — all in one place",
  description:
    "PostFlow helps you easily write, edit, and share posts with a clean dashboard and simple public view",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-accent-foreground`}
      >
        <Navbar />
        <main className="pt-32 pb-2 inset-0 m-auto p-0 w-full max-w-[1536px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
