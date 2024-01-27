import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";

export default function SignIn() {
  return (
    <form className="w-full space-y-4">
      <div className="font-bold text-xl">Sign In Below</div>
      <div className="flex gap-4">
        <Button
          className="w-full"
          formAction={async () => {
            "use server";
            await signIn("google");
          }}
        >
          Google
        </Button>
        <Button
          className="w-full"
          formAction={async () => {
            "use server";
            await signIn("google");
          }}
        >
          Discord
        </Button>
      </div>
    </form>
  );
}
