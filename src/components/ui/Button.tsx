import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary: "bg-brand text-white hover:bg-[#4b4cd4]",
  secondary: "text-ink hover:text-ink/65",
  ghost: "text-ink-muted hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center text-[15px] font-medium tracking-[-0.02em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variant === "primary" && "h-12 px-6",
    variant === "secondary" && "h-12 underline-offset-[6px] hover:underline",
    variants[variant],
    className,
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
