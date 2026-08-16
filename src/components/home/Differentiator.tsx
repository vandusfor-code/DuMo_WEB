const path = [
  "Publicidad",
  "Lead",
  "Conversación",
  "IA",
  "Asesor",
  "Oferta",
  "Venta",
  "Ganancia",
];

export function HomeDifferentiator() {
  return (
    <section className="shell py-24 sm:py-32">
      <h2 className="heading max-w-[10ch] text-[36px] sm:text-[52px]">
        No es otro CRM.
      </h2>
      <p className="mt-4 max-w-[36ch] text-[16px] text-muted">
        DuMo está diseñado alrededor de la operación comercial completa.
      </p>
      <div className="mt-14">
        {path.map((item, index) => (
          <p
            key={item}
            className={`py-2 text-[28px] tracking-[-0.04em] sm:text-[36px] ${
              index === path.length - 1 ? "text-lime" : "text-ink"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
