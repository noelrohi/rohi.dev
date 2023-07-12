import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

type Unit = "ms" | "s" | "m" | "h" | "d";
type Duration = `${number} ${Unit}` | `${number}${Unit}`;

export function ratelimiter (tokens: number, window: Duration){
    return new Ratelimit({
            redis: kv,
            limiter: Ratelimit.fixedWindow(tokens, window),
        })
}