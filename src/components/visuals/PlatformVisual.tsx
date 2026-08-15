import { StatusBadge } from "@/components/ui/StatusBadge";

const nav = ["Prospectos", "Asesores", "Campañas", "Operación"];

const rows = [
  ["Nuevo prospecto recibido", "Movilidad", "CM"],
  ["Prospecto asignado", "Portabilidad", "DR"],
  ["Oferta enviada", "Movilidad", "LV"],
  ["Venta completada", "Movilidad", "CM"],
  ["Servicio activado", "Portabilidad", "DR"],
];

export function PlatformVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.25)]">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-[13px] font-medium text-ink">Dumo Platform</p>
        <StatusBadge tone="muted">Interfaz demostrativa</StatusBadge>
      </div>
      <div className="grid md:grid-cols-[168px_1fr]">
        <aside className="hidden border-r border-line bg-canvas p-3 md:block">
          <p className="mb-3 px-2 text-[10px] font-medium uppercase tracking-[0.14em] text-ink-muted">
            Operación
          </p>
          <ul className="space-y-1">
            {nav.map((item, index) => (
              <li
                key={item}
                className={`rounded-md px-2.5 py-2 text-[13px] ${
                  index === 0 ? "bg-white font-medium text-ink shadow-sm" : "text-ink-muted"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-ink">Oportunidades en curso</p>
              <p className="text-[12px] text-ink-muted">
                Prospectos, estados, seguimientos y campañas en un solo lugar.
              </p>
            </div>
            <div className="flex gap-2">
              <StatusBadge tone="new">Nuevo</StatusBadge>
              <StatusBadge tone="progress">Contactado</StatusBadge>
              <StatusBadge tone="success">Activado</StatusBadge>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-line">
            {rows.map(([event, campaign, advisor], index) => (
              <div
                key={event}
                className={`grid grid-cols-[1fr_auto] items-center gap-3 px-3 py-3 sm:grid-cols-[1.4fr_1fr_auto] ${
                  index < rows.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <p className="text-[13px] text-ink">{event}</p>
                <p className="hidden text-[12px] text-ink-muted sm:block">{campaign}</p>
                <p className="text-[12px] text-ink-muted">{advisor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
