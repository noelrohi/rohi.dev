import {
  SunIcon as Sun,
  MoonIcon as Moon,
  DiscordLogoIcon as Discord,
  ExternalLinkIcon as ExternalLink,
  TwitterLogoIcon as Twitter,
  EnvelopeClosedIcon as Mail,
  CalendarIcon as Calendar,
  LinkedInLogoIcon as LinkedIn,
  GitHubLogoIcon as Github,
  StarIcon as Star,
} from "@radix-ui/react-icons";

interface IconProps {
  className?: string;
}

export const Icons = {
  disc: (props: IconProps) => (
    <>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill="currentColor"
          d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm39.2 96a39.77 39.77 0 0 0-5.84-14l34.23-34.24a87.54 87.54 0 0 1 20 48.28Zm-15.2 8a24 24 0 1 1-24-24a24 24 0 0 1 24 24Zm-24 88a88 88 0 1 1 56.28-155.6L150 94.64A40 40 0 1 0 167.2 136h48.43A88.11 88.11 0 0 1 128 216Z"
        ></path>
      </svg>
    </>
  ),
  sun: Sun,
  discord: (props: IconProps) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
      ></path>
    </svg>
  ),
  fork: (props: IconProps) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M224 64a32 32 0 1 0-40 31v9a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-9a32 32 0 1 0-16 0v9a32 32 0 0 0 32 32h32v25a32 32 0 1 0 16 0v-25h32a32 32 0 0 0 32-32v-9a32.06 32.06 0 0 0 24-31ZM48 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16Zm96 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm48-112a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"
      ></path>
    </svg>
  ),
  external: ExternalLink,
  moon: Moon,
  twitter: Twitter,
  email: Mail,
  calcom: Calendar,
  linkedin: LinkedIn,
  logo: (props: IconProps) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 12a3 3 0 0 1 3-3h10a9 9 0 0 1 4.306 16.904l4.377 8.754a3 3 0 0 1-5.366 2.684L24.146 27H19v9a3 3 0 1 1-6 0V12Zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V26a1 1 0 0 1 1-1h6.764a1 1 0 0 1 .894.553l5.448 10.894a1 1 0 1 0 1.788-.894l-4.834-9.669a1 1 0 0 1 .525-1.377A7.003 7.003 0 0 0 26 11H16Zm1 3a1 1 0 0 1 1-1h8a5 5 0 0 1 0 10h-8a1 1 0 0 1-1-1v-8Zm2 1v6h7a3 3 0 1 0 0-6h-7Z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  github: Github,
  loader: (props: IconProps) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0Zm0-2a9.001 9.001 0 0 1 17.89 0h-2.016A7.002 7.002 0 0 0 5.07 11H3.055Z"
      ></path>
    </svg>
  ),
  close: (props: IconProps) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
      ></path>
    </svg>
  ),
  star: Star,
};
