import { z } from "zod";

export const contact = z.object({
  messageBy: z
    .string()
    .min(2, { message: "Name must be atleast 2 characters." }),
  emailAddress: z
    .string()
    .email({ message: "Email must be a valid email address." }),
  message: z
    .string()
    .min(30, { message: "Message must be atleast 30 characters." }),
});

export const guestBook = z.object({
  entry: z.string().min(1, { message: "Message must be atleast 1 character." }),
});
