import { cn } from "@/lib/utils";

export const headingClasses = {
  h1: "scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl",
  h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
} as const;

export function H1({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 {...props} className={cn(headingClasses.h1, className)}>
      {children}
    </h1>
  );
}

export function H2({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 {...props} className={cn(headingClasses.h2, className)}>
      {children}
    </h2>
  );
}
export function H3({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 {...props} className={cn(headingClasses.h3, className)}>
      {children}
    </h3>
  );
}
export function H4({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h4">) {
  return (
    <h4 {...props} className={cn(headingClasses.h4, className)}>
      {children}
    </h4>
  );
}
