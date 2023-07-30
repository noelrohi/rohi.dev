"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { guestBook as formSchema } from "@/lib/validations";

import { Icons } from "@/components/icons";
import { me } from "@/config/site";
import { saveGuestbookEntry } from "../_actions";

type Inputs = z.infer<typeof formSchema>;

export function GuestbookForm() {
  const [sending, setIsSending] = useState(false);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      entry: "",
    },
  });

  async function onSubmit(values: Inputs) {
    setIsSending(true);
    try {
      await saveGuestbookEntry(values.entry);
    } catch (error) {
      toast.error("Uh-oh! Something went wrong.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 relative max-w-sm"
      >
        <FormField
          control={form.control}
          name="entry"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={"Your message ..."} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="absolute -top-8 right-0"
          type="submit"
          variant="ghost"
          disabled={sending}
        >
          {sending ? (
            <Icons.loader className={"animate-spin"} />
          ) : (
            <Icons.send />
          )}
        </Button>
      </form>
    </Form>
  );
}
