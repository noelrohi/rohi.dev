import { getAge } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

export const me = {
  tag: "gneiru",
  name: "Noel Rohi Garcia",
  discordID: "666483486735073312",
}

export const siteConfig = {
  name: "Rohi",
  url: "https://rohi.dev",
  description: `${parseInt(getAge())} y/o Software engineer based in Philippines`,
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
    github: "https://github.com/gneiru"
  },
}
