import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#050505" />
        <path
          d="M8 8.5h7.2c4.1 0 6.8 2.5 6.8 6.4 0 3.9-2.7 6.5-6.8 6.5H11.2V23.5H8V8.5Z"
          fill="#F5F7F6"
        />
        <path
          d="M11.2 18.2h3.7c2.2 0 3.6-1.3 3.6-3.3s-1.4-3.2-3.6-3.2h-3.7v6.5Z"
          fill="#050505"
        />
        <path
          d="M7 24.2C11.2 21.4 15.4 14.2 20.8 10.8C24.6 8.4 27.8 10.6 30 14"
          stroke="#C8F54A"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[16px] font-medium tracking-[-0.04em] text-ink">
        Du<span className="text-lime">M</span>o
      </span>
    </span>
  );
}
