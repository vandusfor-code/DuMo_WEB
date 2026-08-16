import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("text-[18px] font-medium tracking-[-0.04em] text-ink", className)}>
      Dumo
    </span>
  );
}
