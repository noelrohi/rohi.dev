import * as React from "react"

interface EmailTemplateProps {
  firstName: string
  message: string
}

export function EmailTemplate({ firstName, message }: EmailTemplateProps) {
  return (
    <>
      Hi {firstName}, {message}
    </>
  )
}
