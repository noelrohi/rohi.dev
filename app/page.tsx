import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"

import { me, siteConfig } from "@/config/site"
import { Projects } from "@/components/Projects"

export const runtime = "edge"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex flex-row items-center justify-between gap-4">
        <div>
          <Image src="/me.png" width={640} height={500} alt={siteConfig.name} />
        </div>
        <div>
          <div>
            <div>
              <div className="text-xl leading-none sm:text-2xl sm:leading-none">
                Hi there,
              </div>
              <h1 className="text-xl font-extrabold leading-tight sm:text-2xl sm:leading-tight md:text-4xl md:leading-tight">
                I&rsquo;m{" "}
                <span className="animate-heading bg-gradient-to-r from-red-500 to-amber-400 bg-[length:200%] bg-clip-text text-transparent">
                  {me.name}
                </span>
              </h1>
            </div>
          </div>
          <div className="pt-2 text-xs opacity-90 dark:opacity-80 md:text-sm">
            I&rsquo;m a Software Engineer based in Philippines, building full-stack
            web applications with React, Node.js, TypeScript, and MySQL. I like
            to play games & watch anime and kdrama.
          </div>
          <div className="text-xs opacity-90 dark:opacity-80 md:text-sm ">
            I&rsquo;m currently working at{" "}
            <Link
              href="https://www.capex.com.ph/"
              className="underline decoration-blue-500 decoration-wavy"
            >
              Cargo Padala Express
            </Link>{" "}
            as a Web Application Developer (FullStack).
          </div>
        </div>
      </section>
      <Suspense fallback={<>Loading projects ...</>}>
        <Projects />
      </Suspense>
    </section>
  )
}
