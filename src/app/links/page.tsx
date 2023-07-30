import { Metadata } from "next";
import Link from "next/link";
import { siteConfig as site, siteConfig } from "@/config/site";
import { MailForm } from "@/app/links/form";
import Heading from "@/components/heading";
import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { capitalize } from "@/lib/utils";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Links",
  description: "Social Media Links",
};

export default function LinksPage() {
  return (
    <>
      <div className="flex flex-col max-w-fit gap-2">
        <Heading>Links</Heading>
        <p className="text-muted-foreground">Contact and Social Media Links</p>
      </div>
      <div className="flex gap-4 py-4">
        {Object.entries(site.contacts).map(([name, link]) => {
          // @ts-expect-error
          const IconComponent = Icons[name];
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
            </IconTooltip>
          );
        })}
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or contact via form
          </span>
        </div>
      </div>
      <MailForm />
    </>
  );
}

const IconTooltip = ({
  content,
  children,
}: {
  content: string;
  children: React.ReactNode;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
