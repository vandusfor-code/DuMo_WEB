import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "text-[17px] font-semibold tracking-[-0.03em] text-ink",
        className,
      )}
    >
      Dumo
    </span>
  );
}
