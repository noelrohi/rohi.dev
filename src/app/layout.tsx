import "@/styles/globals.css";

// import { Analytics } from "@vercel/analytics/react";

import { me, siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Wakatime",
    "Lastfm",
    "MyAnimeList",
  ],
  authors: {
    name: me.tag,
  },
  creator: me.tag,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: me.name,
    description: siteConfig.description,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className="mx-auto mt-4 max-w-[100ch] sm:mt-8 md:mt-14">
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex flex-col">
                <SiteHeader />
                <div className="flex-1">
                  <section className="container pb-8 pt-6 md:py-10">
                    {children}
                  </section>
                </div>
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </div>
          <Toaster />
          {/* <Analytics /> */}
        </body>
      </html>
    </>
  );
}
