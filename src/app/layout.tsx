import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MouseSpotlight from "@/components/MouseSpotlight";
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
  title: "Elouan Bahri",
  description:
    "Elouan Bahri — ENSAE Paris engineer & UC Berkeley MFE candidate, building toward a career in portfolio management and quantitative investing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
        <MouseSpotlight />
        {children}
      </body>
    </html>
  );
}
