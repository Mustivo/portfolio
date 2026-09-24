import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PersonJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} (Stiven) | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Official portfolio of Mwizerwa Steven (Mwizerwa Stiven / Mustivo) — IT Engineer & Full-Stack Web Developer based in Kigali, Rwanda. Specialist in modern web architecture, Next.js, React, Node.js, and cloud systems.",
  keywords: [
    "Mwizerwa Steven",
    "Mwizerwa Stiven",
    "Mustivo",
    "Steven Mwizerwa",
    "Stiven Mwizerwa",
    "IT Engineer Rwanda",
    "IT Engineer Kigali",
    "Software Developer Rwanda",
    "Full Stack Developer Kigali",
    "Web Developer Rwanda",
    "Next.js Developer Kigali",
    "React Developer Rwanda",
    "TypeScript Developer Rwanda",
    "InzuHub",
    "ZoraShop",
    "Bright Vision Training Center",
    "Software Engineer Kigali Rwanda",
    "Portfolio Mwizerwa Steven",
    "Mwizerwa Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description:
      "Explore software engineering projects, web architectures, and IT systems built by Mwizerwa Steven (Kigali, Rwanda).",
    images: [
      {
        url: "/images/avatar.jpg",
        width: 800,
        height: 800,
        alt: `${siteConfig.name} - ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description:
      "Explore software engineering projects, web architectures, and IT systems built by Mwizerwa Steven (Kigali, Rwanda).",
    images: ["/images/avatar.jpg"],
    creator: "@Mustivo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: siteConfig.googleVerification || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <PersonJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased selection:bg-sky-500/20 selection:text-sky-600 dark:selection:text-sky-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
