import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

export const ratelimit = {
    twiceADay: () => {
        return new Ratelimit({
            redis: kv,
            limiter: Ratelimit.fixedWindow(2, "1 d"),
        })
    },
    twicePerMinute: () => {
        return new Ratelimit({
            redis: kv,
            limiter: Ratelimit.fixedWindow(1, "30 s"),
        })
    }

}