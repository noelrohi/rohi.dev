import * as React from "react";
import type { IconProps } from "@radix-ui/react-icons/dist/types";

export const GoogleLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ fill = "currentColor", ...props }, ref) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        fill={fill}
        d="M22.132 10.033a.5.5 0 0 0-.492-.41h-9.418a.5.5 0 0 0-.5.498v3.869a.5.5 0 0 0 .5.5h4.735a4.136 4.136 0 0 1-1.627 2.103a5.55 5.55 0 0 1-3.108.87A5.434 5.434 0 0 1 7.1 13.682v-.002a5.416 5.416 0 0 1 0-3.48v-.002a5.434 5.434 0 0 1 5.12-3.781a4.93 4.93 0 0 1 3.48 1.357a.5.5 0 0 0 .7-.007l2.868-2.869a.5.5 0 0 0-.013-.72a10.135 10.135 0 0 0-7.032-2.738A10.451 10.451 0 0 0 2.84 7.225a10.51 10.51 0 0 0 0 9.43a10.453 10.453 0 0 0 9.383 5.785a10.034 10.034 0 0 0 6.952-2.552l.005-.002a10.296 10.296 0 0 0 3.143-7.719c0-.716-.064-1.43-.19-2.134m-9.91-7.593a9.153 9.153 0 0 1 5.962 2.127l-2.16 2.16a5.937 5.937 0 0 0-3.802-1.31a6.407 6.407 0 0 0-5.817 3.818l-2.48-1.924a9.453 9.453 0 0 1 8.297-4.87m-9.5 9.5a9.427 9.427 0 0 1 .753-3.71l2.573 1.994a6.387 6.387 0 0 0 0 3.431L3.476 15.65a9.552 9.552 0 0 1-.754-3.71m9.5 9.5a9.454 9.454 0 0 1-8.298-4.871l2.481-1.924a6.406 6.406 0 0 0 5.817 3.818a6.67 6.67 0 0 0 3.355-.847l.11.085l2.363 1.836a9.19 9.19 0 0 1-5.828 1.903m6.582-2.584l-2.378-1.846a5.092 5.092 0 0 0 1.669-2.929a.5.5 0 0 0-.491-.59h-4.882v-2.869h8.492c.072.512.108 1.028.108 1.545a9.42 9.42 0 0 1-2.518 6.69"
      />
    </svg>
  ),
);

export const LoadingIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ fill = "currentColor", ...props }, ref) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        fill={fill}
        fillOpacity=".9"
        d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75v-2.437A7.312 7.312 0 1 1 19.313 12h2.437c0-5.384-4.366-9.75-9.75-9.75"
      />
    </svg>
  ),
);

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
