export function HomeAcquisition() {
  return (
    <section className="shell py-24 sm:py-32">
      <h2 className="heading max-w-[14ch] text-[36px] sm:text-[52px]">
        La operación empieza antes del chat.
      </h2>
      <div className="mt-14">
        <svg viewBox="0 0 1100 220" className="hidden h-auto w-full lg:block" fill="none" aria-hidden="true">
          <path
            d="M40 40 C 180 40 220 120 360 130 C 500 140 540 70 700 80 C 840 90 900 170 1060 180"
            stroke="#C8F54A"
            strokeOpacity="0.35"
            strokeWidth="1.4"
          />
        </svg>
        <div className="mt-2 flex flex-col gap-4 text-[18px] tracking-[-0.03em] lg:flex-row lg:justify-between">
          {["Meta", "Google", "Landing", "WhatsApp", "DuMo", "Leads", "Ventas"].map((item) => (
            <span key={item} className={item === "DuMo" ? "text-lime" : "text-muted"}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
