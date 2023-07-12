import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function UserAvatar({ name, src }: { name: string, src: string }) {
    return (
        <Avatar>
            <AvatarImage src={src} alt={name} />
            <AvatarFallback>{name.charAt(0) + name.charAt(1)}</AvatarFallback>
        </Avatar>
    )
}
