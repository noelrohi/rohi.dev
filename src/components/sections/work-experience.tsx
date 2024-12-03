import { ShellSection } from "@/components/ui/shell";
import { workExperience } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WorkExperience() {
  return (
    <ShellSection index={3} title="Work Experience">
      {workExperience.map((work, index) => (
        <div
          key={index}
          className={cn(
            "w-full justify-between items-center flex border-input",
          )}
        >
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <div className="text-[15px] leading-4">{work.position}</div>
              {work.status && (
                <div className="inline-flex items-center rounded-full border border-input px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs font-normal text-muted-foreground">
                  {work.status}
                </div>
              )}
            </div>
            <div className="text-muted-foreground text-sm">{work.company}</div>
          </div>
        </div>
      ))}
    </ShellSection>
  );
}
