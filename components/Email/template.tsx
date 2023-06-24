import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"
import { z } from "zod"

import { me, siteConfig } from "@/config/site"
import { emailBodySchema } from "@/lib/validations"
import { myEnv } from "@/lib/utils"

type EmailBodyProps = z.infer<typeof emailBodySchema>

export const EmailTemplate = ({
  username = me.name,

  userImage = `${myEnv.NEXT_PUBLIC_APP_URL}/me.png`,

  messageBy,

  emailAddress,

  message,
}: EmailBodyProps) => {
  return (
    <Html>
      <Head />

      <Preview>A message from your Personal Site</Preview>

      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-10 w-[465px] p-5">
            <Section className="mt-8">
              <Img
                src={userImage + "/me.png"}
                width="80"
                height="80"
                alt="Logo Example"
                className="mx-auto my-0"
              />
            </Section>

            <Heading className="mx-0 my-8 p-0 text-center text-2xl font-normal">
              Message from {siteConfig.url}
            </Heading>

            <Text className="text-sm">Hello {username},</Text>

            <Text className="text-sm">
              <strong>{messageBy}</strong> (
              <Link
                href={`mailto:${emailAddress}`}
                className="text-blue-600 no-underline"
              >
                {emailAddress}
              </Link>
              ) has sent you a <strong>message</strong> .
            </Text>

            <Hr className="mx-0 my-6 w-full border border-solid border-[#eaeaea]" />

            <Text className="text-sm">{message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
