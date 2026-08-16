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
  primary: "bg-lime text-bg hover:bg-[#d6ff6a]",
  secondary:
    "border border-line bg-transparent text-ink hover:border-muted hover:bg-surface",
  ghost: "text-muted hover:text-ink",
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
    "inline-flex h-10 items-center justify-center rounded-xl px-4 text-[14px] font-medium tracking-[-0.02em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if (href) {
    if (href.startsWith("/") || href.startsWith("#")) {
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
