import { Button } from "@/components/ui/button";
import { ModalDialog } from "../dialog";
import { signIn } from "@/lib/auth";

export default function Modal() {
  return (
    <ModalDialog>
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
            await signIn("discord", { redirectTo: "/guestbook" });
          }}
        >
          Sign in with Discord
        </Button>
      </form>
    </ModalDialog>
  );
}
