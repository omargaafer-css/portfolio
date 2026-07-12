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
  title: "Omar Mohamed Abdelghani | Backend & Full-Stack Engineer",
  description: "Personal portfolio of Omar Mohamed Abdelghani, a Computer Science student at ElSewedy University of Technology, specializing in secure, scalable backend architectures, AI applications, and cybersecurity.",
  keywords: [
    "Omar Mohamed Abdelghani",
    "Software Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "ElSewedy University of Technology",
    "SpecSense AI",
    "EdgeMon",
    "Python Developer",
    "Laravel Developer",
    "Cybersecurity Engineer",
  ],
  authors: [{ name: "Omar Mohamed Abdelghani" }],
  openGraph: {
    title: "Omar Mohamed Abdelghani | Backend & Full-Stack Engineer",
    description: "Personal portfolio of Omar Mohamed Abdelghani. Discover backend projects, AI applications, and secure system architectures.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Mohamed Abdelghani | Backend & Full-Stack Engineer",
    description: "Personal portfolio showcasing secure backend software engineering, machine learning IDS systems, and modern web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased selection:bg-primary-custom selection:text-white`}
      >
        <div className="relative min-h-screen flex flex-col dot-grid">
          <div className="absolute inset-0 gradient-radial pointer-events-none" />
          <main className="relative z-10 flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
