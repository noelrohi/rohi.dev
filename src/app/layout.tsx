import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/providers/theme";
import { ModeToggle } from "@/components/theme-toggle";
import { projectURL } from "@/lib/consts";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

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
        className={cn(
          fontSans.variable,
          fontMono.variable,
          "relative min-h-screen bg-background font-sans antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative mx-4 min-h-screen max-w-3xl lg:mx-auto">
            <Navbar />
            <main className="flex-1 pb-4 lg:pb-12">{children}</main>
          </div>
          <ModeToggle className="fixed right-4 bottom-4" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
