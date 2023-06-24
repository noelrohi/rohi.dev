import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"
import { z } from "zod"

import { me } from "@/config/site"
import { myEnv } from "@/lib/utils"
import { emailBodySchema } from "@/lib/validations"

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

      <Preview>{`${messageBy} has sent you a message.`}</Preview>

      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-10 w-[465px] p-5">
            <Section className="mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={userImage}
                alt="Logo Example"
                className="mx-auto my-0"
              />
            </Section>

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
