import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "SmartPost - Automated Instagram Posting for Agencies",
  description: "Empower your agency with SmartPost. Connect client Instagram accounts and maintain consistent daily posting automatically. Perfect for agencies managing multiple social media accounts.",
  keywords: ["Instagram automation", "social media management", "agency tools", "automated posting", "Instagram scheduler", "content management"],
  authors: [{ name: "SmartPost" }],
  openGraph: {
    title: "SmartPost - Automated Instagram Posting for Agencies",
    description: "Connect client Instagram accounts and maintain consistent daily posting automatically.",
    type: "website",
    url: "https://smartpost.co.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartPost - Automated Instagram Posting for Agencies",
    description: "Connect client Instagram accounts and maintain consistent daily posting automatically.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
