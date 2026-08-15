import { cn } from "@/lib/cn";

const tones = {
  new: "bg-indigo-50 text-brand",
  progress: "bg-sky-50 text-sky-700",
  offer: "bg-amber-50 text-amber-800",
  sale: "bg-violet-50 text-violet-700",
  success: "bg-emerald-50 text-success",
  muted: "bg-slate-100 text-ink-muted",
} as const;

type StatusBadgeProps = {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
};

export function StatusBadge({
  children,
  tone = "muted",
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium tracking-[-0.01em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
