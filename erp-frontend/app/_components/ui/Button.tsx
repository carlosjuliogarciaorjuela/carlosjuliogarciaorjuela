"use clients";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-blue-200 text-white hover:bg-blue-300",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
        ghost: "text-gray-600 hover:bg-gray-100",
      },
      size: {
        default: "px-4 py-2",
        lg: "px-6 py-3 text-base",
        sm: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends LinkProps, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

const Button = ({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
