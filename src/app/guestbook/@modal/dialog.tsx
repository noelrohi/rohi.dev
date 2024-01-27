"use client";

import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import * as React from "react";

type Props = React.ComponentPropsWithoutRef<typeof DialogContent>;

export function ModalDialog({ children, ...props }: Props) {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  React.useEffect(() => {
    if (!open) {
      router.back();
    }
  }, [open, router]);
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent {...props}>{children}</DialogContent>
    </Dialog>
  );
}
