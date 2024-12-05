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
    title: "thr",
    description: "threads clone.",
    href: "https://thr.rohi.dev",
    status: "archived",
  },
  {
    title: "anirohi",
    description: "anime watching platform.",
    href: "https://ani.rohi.dev",
    status: "maintained",
  },
  {
    title: "kd",
    description: "kdrama watching platform.",
    href: "https://kd.rohi.dev",
    status: "maintained",
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

export const projectURL = "https://rohi.dev";
