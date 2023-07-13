import { Metadata } from "next"
import Link from "next/link"
import { siteConfig as site } from "@/config/site"
import { MailForm } from "@/components/Email/form"
import Heading from "@/components/Heading"
import { Icons } from "@/components/icons"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { capitalize } from "@/lib/utils"


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
      <div className="flex gap-4 py-4" >
        {Object.entries(site.contacts).map(([name, link]) => {
          // @ts-expect-error
          const IconComponent = Icons[name]
          return (
            <IconTooltip key={name} content={capitalize(name)}>
              <Link
                href={link}
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={capitalize(name)}
              >
                <IconComponent />
              </Link>
            </IconTooltip>)
        }
        )}
      </div>
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
    </section >
  )
}


const IconTooltip = ({ content, children }: { content: string, children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}