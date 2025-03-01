import { ThemeProvider } from "@/components/providers/theme-provider";
import { projectURL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";

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

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
        <script
          defer
          src="https://assets.onedollarstats.com/stonks.js"
          id="stonks"
        ></script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto w-full mb-16 max-w-screen-sm py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
