import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Mustivo"),
  title: {
    default: "Mwizerwa Stiven | Software & Web Developer",
    template: "%s | Mwizerwa Stiven",
  },
  description:
    "Personal portfolio of Mwizerwa Stiven (Mustivo) — Software & Web Developer from Kigali, Rwanda. Contributor to Open Source Kigali, builder of ZoraShop, InzuHub, and civic platforms.",
  keywords: [
    "Mwizerwa Stiven",
    "Mustivo",
    "Software Developer Rwanda",
    "Web Developer Kigali",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Open Source Kigali",
  ],
  authors: [{ name: "Mwizerwa Stiven", url: "https://github.com/Mustivo" }],
  creator: "Mwizerwa Stiven",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Mustivo",
    siteName: "Mwizerwa Stiven Portfolio",
    title: "Mwizerwa Stiven | Software & Web Developer",
    description:
      "Explore software engineering projects, Open Source Kigali initiatives, and web architectures built by Mwizerwa Stiven.",
    images: [
      {
        url: "/images/avatar.jpg",
        width: 400,
        height: 400,
        alt: "Mwizerwa Stiven - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mwizerwa Stiven | Software & Web Developer",
    description:
      "Explore software engineering projects, Open Source Kigali initiatives, and web architectures built by Mwizerwa Stiven.",
    images: ["/images/avatar.jpg"],
    creator: "@Mustivo",
  },
  robots: {
    index: true,
    follow: true,
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
