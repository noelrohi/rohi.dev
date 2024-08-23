import { XIcon } from "@/components/icons";
import {
  DesktopIcon,
  GitHubLogoIcon,
  LaptopIcon,
  LinkedInLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export const projectURL = "https://rohi.dev";

export const links: Array<{
  path: `/${string}`;
  label: string;
  hidden?: boolean;
}> = [
  {
    path: "/",
    label: "About",
  },
  { path: "/blog", label: "Blog" },
  { path: "/guestbook", label: "Guestbook" },
  { path: "/activity", label: "activity", hidden: true },
  { path: "/uses", label: "Uses" },
];

type Icon = typeof GitHubLogoIcon;

export const socials: Array<{
  href: string;
  icon: Icon;
}> = [
  {
    href: "https://github.com/noelrohi",
    icon: GitHubLogoIcon,
  },
  {
    href: "https://www.linkedin.com/in/noelrohi/",
    icon: LinkedInLogoIcon,
  },
  {
    href: "https://x.com/noelrohi",
    icon: XIcon,
  },
];

type Experience = {
  jobTitle: string;
  company: string;
  presentJob: boolean;
};

export const experiences = [
  {
    jobTitle: "Frontend Engineer",
    company: "ScaleForge",
    presentJob: true,
  },
  {
    jobTitle: "Web Developer",
    company: "CaPEx",
    presentJob: false,
  },
] satisfies Array<Experience>;

type Project = {
  title: string;
  description: string;
  url: string;
  icon: Icon;
};

export const projects = [
  {
    title: "Anirohi",
    description:
      "An app to help you find your next anime to watch. Integrated with Anilist.",
    url: "https://ani.rohi.dev",
    icon: DesktopIcon,
  },
  {
    title: "K-Next",
    description: "An app to help you find your next K-drama to watch.",
    url: "https://kd.rohi.dev",
    icon: LaptopIcon,
  },
  {
    title: "rohi.dev",
    description: "A personal website built with Next.js.",
    url: "https://rohi.dev",
    icon: PersonIcon,
  },
] satisfies Array<Project>;
