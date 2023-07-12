"use client"
import { Button } from './ui/button'
import { Icons } from './icons'
import { useTransition } from 'react'
import { Message } from '@/drizzle/schema/message'
import { toast } from 'sonner'
import { deleteMessage } from '@/app/_actions/message'

export default function DeleteButton({ id }: { id: Message["id"] }) {
    const [isPending, startTransition] = useTransition()
    const handleDelete = () =>
        startTransition(async () => {
            toast.promise(deleteMessage(id), {
                loading: 'Deleting message...',
                success: () => {
                    return `Message successfully deleted!`;
                },
                error: "Something went wrong, try again later."
                ,
            });
        })
    return (
        <Button size={"icon"} variant={"destructive"} onClick={handleDelete} disabled={isPending}> {isPending ? <Icons.loader className='animate-spin' /> : <Icons.trash />}</Button >
    )
}
