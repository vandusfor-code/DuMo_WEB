export function HomeIntelligence() {
  return (
    <section id="ia" className="shell py-24 sm:py-32">
      <h2 className="heading max-w-[12ch] text-[36px] sm:text-[52px]">
        La IA entiende la conversación.
      </h2>
      <div className="dumo-frame mt-12 grid overflow-hidden lg:grid-cols-2">
        <div className="border-b border-line p-6 lg:border-r lg:border-b-0">
          <p className="text-[12px] text-muted">WhatsApp · 10:43</p>
          <p className="mt-5 text-[15px] leading-7 text-muted">
            Quiero saber qué oferta tienen para portabilidad.
          </p>
          <p className="mt-4 text-[15px] leading-7">
            Te ayudo a revisar las opciones disponibles para tu número.
          </p>
        </div>
        <div className="p-6">
          <p className="text-[12px] tracking-[0.16em] text-lime uppercase">AI signal</p>
          <p className="mt-4 text-[22px] tracking-[-0.03em]">High purchase intent</p>
          <p className="mt-6 text-[14px] text-muted">
            Next best action <span className="text-ink">Send offer</span>
          </p>
        </div>
      </div>
    </section>
  );
}
