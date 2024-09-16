import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import LoadingSpinner from "../LoadingSpinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-blue-500 hover:bg-blue-400 transition ease-in-out duration-150 disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        primary: "bg-indigo-500 hover:bg-indigo-400",
        secondary: "bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400",
        danger: "bg-red-500 hover:bg-red-400",
      },
      size: {
        small: "text-xs px-2.5 py-1.5",
        medium: "text-sm px-3 py-2",
        large: "text-sm px-4 py-2.5",
      },
    },
    defaultVariants: {
      intent: "secondary",
      size: "medium",
    },
  },
);

const Button = forwardRef(({ loading, className, children, ...props }, ref) => {
  const buttonClasses = buttonVariants(props);

  return (
    <button
      type="button"
      className={cn(buttonClasses, className)}
      disabled={loading}
      ref={ref}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </button>
  );
});

export default Button;
