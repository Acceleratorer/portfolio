import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";


export const metadata = {
  title: "Tan Le — Accelra Portfolio",
  description:
    "Computer Science student at UIT building AI, Data, MLOps, and Web systems.",
  icons: {
    icon: "/icons/favicon.jpg",
  },
  openGraph: {
    title: "Tan Le — Accelra Portfolio",
    description:
      "AI, Data Science, MLOps, Web, and competitive programming projects.",
    images: ["/og-cover.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
