import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/icons/favicon.jpg",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="noise-layer" />
        <div className="fixed inset-0 -z-10 grid-mask" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
