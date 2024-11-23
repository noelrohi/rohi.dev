import type { IconProps } from "@radix-ui/react-icons/dist/types";
import * as React from "react";

export const XIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ fill = "currentColor", ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
      ref={ref}
    >
      <path
        fill={fill}
        d="M17.751 3h3.067l-6.7 7.625L22 21h-6.172l-4.833-6.293L5.464 21h-3.07l7.167-8.155L2 3h6.328l4.37 5.752zm-1.076 16.172h1.7L7.404 4.732H5.58z"
      />
    </svg>
  ),
);

export const CalIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ fill = "currentColor", ...props }, ref) => (
    <svg
      width="42"
      height="23"
      viewBox="0 0 42 20"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
      fill={fill}
    >
      <title>Book with Cal.com</title>
      <path
        d="M10.0582 20.817C4.32115 20.817 0 16.2763 0 10.6704C0 5.04589 4.1005 0.467773 10.0582 0.467773C13.2209 0.467773 15.409 1.43945 17.1191 3.66311L14.3609 5.96151C13.2025 4.72822 11.805 4.11158 10.0582 4.11158C6.17833 4.11158 4.04533 7.08268 4.04533 10.6704C4.04533 14.2582 6.38059 17.1732 10.0582 17.1732C11.7866 17.1732 13.2577 16.5566 14.4161 15.3233L17.1375 17.7151C15.501 19.8453 13.2577 20.817 10.0582 20.817Z"
        fill={fill}
      />
      <path
        d="M29.0159 5.88577H32.7302V20.461H29.0159V18.3308C28.2436 19.8444 26.9564 20.8534 24.4925 20.8534C20.5575 20.8534 17.4131 17.4339 17.4131 13.2295C17.4131 9.02504 20.5575 5.60547 24.4925 5.60547C26.9381 5.60547 28.2436 6.61453 29.0159 8.12811V5.88577ZM29.1262 13.2295C29.1262 10.9498 27.5632 9.06242 25.0993 9.06242C22.7272 9.06242 21.1826 10.9684 21.1826 13.2295C21.1826 15.4344 22.7272 17.3965 25.0993 17.3965C27.5449 17.3965 29.1262 15.4905 29.1262 13.2295Z"
        fill={fill}
      />
      <path d="M35.3604 0H39.0746V20.4427H35.3604V0Z" fill={fill} />
    </svg>
  ),
);
