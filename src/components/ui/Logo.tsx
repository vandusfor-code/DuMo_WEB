import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("text-[19px] font-medium tracking-[-0.045em] text-ink", className)}>
      Dumo
    </span>
  );
}
