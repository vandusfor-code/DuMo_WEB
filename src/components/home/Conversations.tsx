import { Reveal } from "@/components/ui/Reveal";

const rows = [
  ["Juan Pérez", "WhatsApp", "¿El servicio aplica?", "4 min", "CM"],
  ["Laura Díaz", "Web", "Quiero revisar la oferta", "12 min", "DR"],
  ["Andrés R.", "Campaña", "Necesito más detalle", "21 min", "LV"],
];

export function HomeConversations() {
  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <h2 className="heading max-w-[12ch] text-[36px] sm:text-[52px]">
          Todas tus conversaciones. En un solo lugar.
        </h2>
      </Reveal>
      <Reveal delay={0.08} className="mt-12">
        <div className="panel overflow-hidden">
          <div className="flex gap-2 border-b border-line px-4 py-3 text-[12px] text-muted">
            {["WhatsApp", "Facebook", "Instagram", "Web"].map((channel) => (
              <span key={channel} className="rounded-md px-2 py-1">
                {channel}
              </span>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-[13px]">
              <thead className="text-muted">
                <tr>
                  {["Lead", "Canal", "Mensaje", "Hora", "Asesor"].map((col) => (
                    <th key={col} className="px-4 pt-4 pb-3 font-medium">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]} className="border-t border-line">
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
