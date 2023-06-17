import { Metadata } from "next"
import Link from "next/link"
import { Calendar, Linkedin, Mail, Twitter } from "lucide-react"

import { siteConfig as site } from "@/config/site"
import { capitalize } from "@/lib/utils"
import Heading from "@/components/Heading"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Links",
  description: "Contact information | Social Media Links",
}

export default function Links() {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <Heading>Links</Heading>
        <p className="max-w-[700px] text-muted-foreground">
          My contact info and social media links.
        </p>
      </div>
      <ul className="py-4">
        {Object.entries(site.contacts).map(([name, link]) => (
          <li className="max-w-sm">
            <Link href={link} key={name} target="_blank" rel="noopener noreferrer">
              <div className="flex justify-between">
                {capitalize(name)}
                {name === "email" ? (
                  <Icons.email />
                ) : name === "linkedin" ? (
                  <Icons.linkedin />
                ) : name === "twitter" ? (
                  <Icons.twitter />
                ) : (
                  <Icons.calcom />
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
