import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { SignIn } from "./form";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <SignIn />
      <Link
        href="/guestbook"
        className={cn(buttonVariants(), "flex w-fit items-center gap-2")}
      >
        <ArrowLeftIcon /> Go back to view entries
      </Link>
    </div>
  );
}
