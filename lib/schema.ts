import { z } from "zod"

export const emailBodySchema = z.object({
  username: z.string().optional(),
  userImage: z.string().optional(),
  messageBy: z.string().min(2, {message: "Name must be atleast 2 characters."}),
  emailAddress: z.string().email({message: "Email must be a valid email address."}),
  message: z.string().min(30, {message: "Message must be atleast 30 characters."}),
})
