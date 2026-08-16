const pipeline = [
  { label: "Nuevo", state: "idle" },
  { label: "Contactado", state: "idle" },
  { label: "Oferta", state: "active" },
  { label: "Venta", state: "idle" },
  { label: "Activado", state: "done" },
];

export function ProductSurface() {
  return (
    <div className="bg-paper text-ink">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <p className="text-[13px] font-medium tracking-[-0.02em]">Operación</p>
        <p className="caption">Interfaz demostrativa</p>
      </div>
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-line px-5 py-5 lg:border-r lg:border-b-0">
          <p className="label">Pipeline</p>
          <ul className="mt-5 space-y-3">
            {pipeline.map((item) => (
              <li key={item.label} className="flex items-center justify-between">
                <span className="text-[15px]">{item.label}</span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    item.state === "done"
                      ? "bg-success"
                      : item.state === "active"
                        ? "bg-brand"
                        : "bg-line"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 py-5">
          <p className="label">Conversación</p>
          <p className="mt-5 text-[15px] leading-7 text-ink-muted">
            Necesito entender si el servicio aplica.
          </p>
          <p className="mt-3 text-[15px] leading-7">
            Revisamos elegibilidad y presentamos la oferta.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="label">Asignación</p>
              <p className="mt-2 text-[15px]">CM</p>
            </div>
            <div>
              <p className="label">Estado</p>
              <p className="mt-2 text-[15px]">Oferta presentada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
