export function HomeOperatingLayer() {
  return (
    <section id="producto" className="shell py-24 sm:py-32">
      <h2 className="heading max-w-[12ch] text-[36px] sm:text-[52px]">
        DuMo operating layer
      </h2>
      <p className="mt-4 text-[16px] text-muted">Tecnología que sostiene la operación.</p>
      <div className="dumo-frame relative mt-12 overflow-hidden p-6 sm:p-8">
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 1000 360"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M80 180 C 220 80 360 80 500 180 C 640 280 780 280 920 180"
            stroke="#C8F54A"
            strokeOpacity="0.28"
            strokeWidth="1.3"
          />
        </svg>
        <div className="relative grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
          {["Leads", "Conversations", "AI", "Assignment", "Campaigns", "Sales", "Reporting"].map(
            (item) => (
              <p key={item} className="text-[15px] text-muted">
                {item}
              </p>
            ),
          )}
          <p className="text-[20px] tracking-[-0.04em] text-ink sm:col-start-4 sm:row-start-1 sm:justify-self-end">
            Du<span className="text-lime">M</span>o
          </p>
        </div>
      </div>
    </section>
  );
}
