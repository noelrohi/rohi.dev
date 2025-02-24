interface Project {
  href: string;
  title: string;
  description: string;
  status: "wip" | "maintained" | "archived";
}

interface WorkExperience {
  company: string;
  status?: string;
  position: string;
}

export const projects = [
  {
    title: "agent directory",
    description: "agent directory.",
    href: "https://agents.noelrohi.com",
    status: "maintained",
  },
  {
    title: "thr",
    description: "threads clone.",
    href: "https://thr.rohi.dev",
    status: "archived",
  },
  {
    title: "anirohi",
    description: "anime watching platform.",
    href: "https://ani.rohi.dev",
    status: "archived",
  },
  {
    title: "kd",
    description: "kdrama watching platform.",
    href: "https://kd.rohi.dev",
    status: "archived",
  },
] satisfies Project[];

export const workExperience = [
  {
    company: "ScaleForge",
    status: "Present",
    position: "Frontend Engineer",
  },
  {
    company: "CaPEx",
    position: "Web Developer",
  },
] satisfies WorkExperience[];

export const projectURL = "https://noelrohi.com";
