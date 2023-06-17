export type SiteConfig = typeof siteConfig

export const me = {
  tag: "gneiru",
  name: "Noel Rohi Garcia",
  discordID: "666483486735073312",
}

export const siteConfig = {
  name: "gneiru",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Links",
      href: "/links",
    },
  ],
  links: {
    twitter: "https://twitter.com/gneiru",
    github: "https://github.com/gneiru",
    docs: "https://ui.shadcn.com",
  },
  contacts: {
    email: "mailto:n@rohi.dev",
    twitter: "https://twitter.com/gneiru",
    linkedin: "https://linkedin.com/in/gneiru",
    calcom: "https://calcom.com/gneiru",
  },
}
