"use server"

import { db } from "@/drizzle";
import { messages } from "@/drizzle/schema/message";
import { ratelimiter } from "@/lib/ratelimit";
import { guestMessageSchema } from "@/lib/validations";
import { currentUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod"

export const sendGuestMessage = async (input: z.infer<typeof guestMessageSchema>) => {
    const parsedValues = guestMessageSchema.parse(input)
    const user = await currentUser()
    if(!user) {
        throw new Error("Guest cannot send messages.")
    }
    const { message } = parsedValues;
    const values = { message, userId: user.id }
    const { limit, success } = await ratelimiter(1, "10 s").limit(user.id)
    if(!success) throw new Error("You have sent a message in the past 10 seconds, please try again later.")
    await db.insert(messages).values(values);
    revalidatePath("/guestbook");    
};

export const deleteMessage = async (id: number) => {
    await db.delete(messages).where(eq(messages.id, id))
    revalidatePath("/guestbook");
}