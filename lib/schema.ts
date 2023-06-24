import { z } from "zod"

export const emailBodySchema = z.object({
  username: z.string().optional(),
  userImage: z.string().optional(),
  messageBy: z.string(),
  emailAddress: z.string(),
  message: z.string(),
})
