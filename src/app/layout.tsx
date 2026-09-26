import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GVK | Creative Developer",
  description: "Computer science student, builder, and creative developer exploring AI, web, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script src="https://cdn-cookieyes.com/client_data/55b4573d87ba9671bad84882/script.js" strategy="beforeInteractive" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-T7DN6W1WXQ" strategy="beforeInteractive" />
      <Script id="google-analytics" strategy="beforeInteractive">
        {"window.dataLayer = window.dataLayer || [];\nfunction gtag(){window.dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-T7DN6W1WXQ');"}
      </Script>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0B0F14] text-[#E5E7EB] min-h-screen relative selection:bg-[#6366F1]/30`}
      >
        {/* Global animated gradient background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6366F1]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#22C55E]/5 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
