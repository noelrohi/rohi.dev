"use server"

import { z } from "zod"

import { absoluteUrl } from "../utils"
import { emailBodySchema } from "../validations"

export async function send(values: z.infer<typeof emailBodySchema>) {
  const data = await fetch(absoluteUrl("/api/send"), {
    body: JSON.stringify(values),
    method: "POST",
  }).then((res) => res.json())
  return data
}
