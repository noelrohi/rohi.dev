import { GoogleLogoIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

export function SignIn() {
  return (
    <section className="flex w-full flex-col gap-6">
      <div className="space-y-2">
        <div className="font-bold text-xl">Sign In</div>
        <div className="text-muted-foreground">to continue to guestbook</div>
      </div>
      <form className="flex w-full gap-4">
        <Button
          className="h-12 w-1/2 gap-2"
          variant={"outline"}
          formAction={async () => {
            "use server";
            await signIn("google", { redirectTo: "/guestbook" });
          }}
        >
          <GoogleLogoIcon /> Google
        </Button>
        <Button
          className="h-12 w-1/2 gap-2"
          variant={"outline"}
          formAction={async () => {
            "use server";
            await signIn("discord", { redirectTo: "/guestbook" });
          }}
        >
          <DiscordLogoIcon /> Discord
        </Button>
      </form>
    </section>
  );
}
