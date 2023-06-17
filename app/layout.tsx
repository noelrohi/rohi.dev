import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { me, siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    description : siteConfig.description,
    locale: 'en-US',
    siteName: me.name,
    title: me.name,
    type: 'website',
    url: origin,
  },
  twitter: {
    card: 'summary_large_image',
    creator: `@${me.tag}`,
    site: `@${me.tag}`,
  },
  icons: {
    icon: "/me.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className="mx-auto my-4 max-w-[80ch] px-4 sm:my-8 md:my-14">
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </div>
          <Analytics />
        </body>
      </html>
    </>
  )
}
