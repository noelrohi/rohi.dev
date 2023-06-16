"use client"

import { useEffect, useState } from "react"

import { ItemCard } from "."
import { getAge } from "@/lib/utils"

export default function AgeCard() {
    

  const [age, setAge] = useState(getAge())
  const [mounted, setMounted] = useState(false)

  setInterval(() => {
    setAge(getAge())
  }, 10)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ItemCard title="My Age" value={age} link="/" />
  )
}
