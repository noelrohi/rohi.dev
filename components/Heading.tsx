import { ReactNode } from "react"

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
      {children}
    </h1>
  )
}
