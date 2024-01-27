import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { fontMono, fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohi.dev"),
  title: {
    default: "Noel Rohi",
    template: "%s | Noel Rohi",
  },
  description: "a developer, weeb, and k-drama enthusiast.",
  openGraph: {
    title: "Noel Rohi",
    description: "a developer, weeb, and k-drama enthusiast.",
    url: "https://leerob.io",
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
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
