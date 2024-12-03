import { AboutMe } from "@/components/sections/about-me";
import { ContactMe } from "@/components/sections/contact-me";
import { ProfileHeader } from "@/components/sections/profile-header";
import { Projects } from "@/components/sections/projects";
import { WorkExperience } from "@/components/sections/work-experience";
import { Writing } from "@/components/sections/writing";

export default function Home() {
  return (
    <section className="items-center gap-8 container py-3 md:py-4 space-y-12">
      <ProfileHeader
        name="Noel Rohi Garcia"
        username="noelrohi"
        isActive={false}
      />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Writing />
      <ContactMe />
    </section>
  );
}
