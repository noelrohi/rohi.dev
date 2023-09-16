"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contact } from "@/lib/validations";

import { contactMail } from "@/app/_actions";
import { me } from "@/config/site";
import { Icons } from "@/components/icons";
import { Textarea } from "@/components/ui/textarea";

const formSchema = contact;

export function MailForm() {
  const [sending, setIsSending] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      messageBy: "",
      emailAddress: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);
    try {
      const response = await contactMail(values);
      form.reset();
      if (typeof response === "string") return toast.error(response);
      return toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Uh-oh! Something went wrong.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="messageBy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder={me.tag} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder={`${me.tag}@example.com`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={sending}>
          {sending ? (
            <Icons.loader className="mr-2 animate-spin" />
          ) : (
            <Icons.send className="mr-2" />
          )}
          {sending ? "Sending" : "Send"}
        </Button>
      </form>
    </Form>
  );
}
