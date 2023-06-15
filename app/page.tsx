/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import Link from "next/link"

import { me, siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Projects } from "@/components/Projects"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex flex-row items-center justify-between gap-4">
        <div>
          <Image
            src="/me.png"
            width={640}
            height={500}
            alt={siteConfig.name}
          />
        </div>
        <div>
          <div>
            <div>
              <div className="text-xl leading-none sm:text-2xl sm:leading-none">
                Hi there,
              </div>
              <h1 className="text-xl font-extrabold leading-tight sm:text-2xl sm:leading-tight md:text-4xl md:leading-tight" >
                I'm{" "}
                <span className="animate-heading bg-gradient-to-r from-red-500 to-amber-400 bg-[length:200%] bg-clip-text text-transparent">
                  {me.name}
                </span>
              </h1>
            </div>
          </div>
          <div className="pt-2 text-sm opacity-90 dark:opacity-80">
            I'm a Software Engineer based in Philippines, building full-stack
            web applications with React, Node.js, TypeScript, and MySQL. I like
            to play games & watch anime and kdrama.
          </div>
          <div className="text-sm opacity-90 dark:opacity-80 ">
            I'm currently working at{" "}
            <Link href="https://www.capex.com.ph/" className="underline decoration-blue-500 decoration-wavy">Cargo Padala Express</Link>{" "}
            as a Web Application Developer (FullStack).
          </div>
        </div>
      </section>

      <Projects />
    </section>
  )
}

// import { Link } from '@/components/Link';
// import { Projects } from '@/components/Projects';
// import { fullname } from '@/lib/constants';
// import Image from 'next/image';

// const Home = async () => {

//   return (
//     <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-8 md:mt-14">
//
//     </div>
//   );
// };

// export default Home;
