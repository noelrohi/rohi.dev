"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { send } from "@/lib/actions/form"
import { cn } from "@/lib/utils"
import { emailBodySchema } from "@/lib/validations"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

import { Icons } from "../icons"

const formSchema = emailBodySchema

export function MailForm() {
  const { toast } = useToast()
  const [sending, setIsSending] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      messageBy: "",
      emailAddress: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true)
    const data = await send(values)
    console.log(data)
    setIsSending(false)
    form.reset()
    toast({
      title: data.message,
    })
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
                <Input placeholder="Rohi" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="nrohi@example.com" {...field} />
              </FormControl>
              <FormDescription>Your Email Address.</FormDescription>
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
                <Input {...field} />
              </FormControl>
              <FormDescription>Message you want to send.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={sending}>
          <Icons.loader
            className={cn(
              "mr-2 hidden h-4 w-4",
              sending && "block animate-spin"
            )}
          />
          {`${sending ? "Sending" : "Send Mail"}`}
        </Button>
      </form>
    </Form>
  )
}
