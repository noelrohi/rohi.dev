import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";

export default function Modal() {
  return (
    <form className="w-full">
      <Button
        formAction={async () => {
          "use server";
          await signIn("google");
        }}
      >
        Sign in with Google
      </Button>
      <Button
        formAction={async () => {
          "use server";
          await signIn("google");
        }}
      >
        Sign in with Discord
      </Button>
    </form>
  );
}
