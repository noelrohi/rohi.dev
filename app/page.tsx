import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { me, siteConfig } from "@/config/site"
import { Projects } from "@/components/Projects"

export const runtime = "edge"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        <Image
          src="/me.png"
          alt={siteConfig.name}
          width={640}
          height={400}
          className="hidden aspect-auto h-auto w-auto object-cover transition-all hover:scale-105 md:block"
          unoptimized
        />
        <div className="md:col-span-2">
          <div>
            <div className="text-3xl leading-none sm:text-4xl sm:leading-tight">
              Hi there,
            </div>
            <h1 className="text-3xl font-extrabold leading-none sm:text-4xl sm:leading-tight">
              I&rsquo;m{" "}
              <span className="animate-heading bg-gradient-to-r from-red-500 to-amber-400 bg-[length:200%] bg-clip-text text-transparent">
                {me.name}
              </span>
            </h1>
          </div>
          <Balancer>
            <div className="pt-2 text-xs opacity-90 dark:opacity-80 md:text-sm">
              I&rsquo;m a Software Engineer based in Philippines, building
              full-stack web applications with React, Node.js, TypeScript, and
              MySQL. I like to play games & watch anime and kdrama.
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
          </Balancer>
        </div>
      </section>
      <Suspense fallback={<>Loading projects ...</>}>
        <Projects />
      </Suspense>
    </section>
  )
}
