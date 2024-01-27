"use client";

import { LoadingIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  children,
  disabled,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const { pending } = useFormStatus();
  return (
    <Button {...props} disabled={disabled || pending}>
      {pending ? <LoadingIcon className="mr-2 size-5 animate-spin" /> : null}
      {children}
    </Button>
  );
}
