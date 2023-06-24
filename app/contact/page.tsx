import { Metadata } from "next"
import Link from "next/link"

import { siteConfig as site } from "@/config/site"
import { capitalize } from "@/lib/utils"
import { MailForm } from "@/components/Email/form"
import Heading from "@/components/Heading"
import { Icons } from "@/components/icons"

export const runtime = "edge"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information | Social Media Links",
}

export default function ContactPage() {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <Heading>Contact</Heading>
        <p className="max-w-[700px] text-muted-foreground">
          My contact info and social media links.
        </p>
      </div>
      <ul className="py-4">
        {Object.entries(site.contacts).map(([name, link]) => (
          <li className="max-w-sm" key={name}>
            <Link
              href={link}
              key={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-4">
                {name === "email" ? (
                  <Icons.email />
                ) : name === "linkedin" ? (
                  <Icons.linkedin />
                ) : name === "twitter" ? (
                  <Icons.twitter />
                ) : name === "github" ? (
                  <Icons.github />
                ) : (
                  <Icons.calcom />
                )}
                {capitalize(name)}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or send mail via form
          </span>
        </div>
      </div>
      <MailForm />
    </section>
  )
}
