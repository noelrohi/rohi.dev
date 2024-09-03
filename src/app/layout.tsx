import { Navbar } from "@/components/navbar";
import { ModeToggle } from "@/components/theme-toggle";
import { projectURL } from "@/lib/consts";
import { fontMono, fontSans } from "@/lib/fonts";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Confetti } from "@/components/confetti";

export const metadata: Metadata = {
  metadataBase: new URL(projectURL),
  title: {
    default: "Noel Rohi",
    template: "%s | Noel Rohi",
  },
  description: "a developer, weeb, and k-drama enthusiast.",
  openGraph: {
    title: "Noel Rohi",
    description: "a developer, weeb, and k-drama enthusiast.",
    url: projectURL,
    siteName: "Noel Rohi",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Noel Rohi",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          fontSans.variable,
          fontMono.variable,
          "relative min-h-screen bg-background py-4 font-sans antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-4 max-w-3xl flex-1 lg:mx-auto">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <ModeToggle className="fixed right-4 bottom-4 rounded-lg bg-transparent" />
        </ThemeProvider>
        <Analytics />
        <Confetti />
      </body>
    </html>
  );
}
