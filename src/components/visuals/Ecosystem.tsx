const nodes = [
  "Empresa",
  "Campaña",
  "Prospectos",
  "Asesores",
  "Conversión",
  "Clientes",
];

export function Ecosystem() {
  return (
    <div aria-hidden="true">
      <div className="hidden lg:block">
        <div className="relative pl-6">
          <div className="absolute top-2 bottom-2 left-[5px] w-px bg-line" />
          <span className="travel-y absolute left-[2px] h-2 w-2 rounded-full bg-ink" />
          <ol className="space-y-7">
            {nodes.map((node, index) => {
              const last = index === nodes.length - 1;
              return (
                <li key={node} className="relative">
                  <span
                    className={`absolute top-2 -left-[21px] h-1.5 w-1.5 rounded-full ${
                      last ? "bg-brand" : "bg-ink"
                    }`}
                  />
                  <p
                    className={`text-[15px] tracking-[-0.02em] ${
                      last ? "font-medium text-ink" : "text-ink-muted"
                    }`}
                  >
                    {node}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="relative pt-1">
          <div className="absolute top-[13px] right-2 left-2 h-px bg-line" />
          <span className="travel-x absolute top-[10px] h-2 w-2 rounded-full bg-ink" />
          <ol className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-6">
            {nodes.map((node, index) => {
              const last = index === nodes.length - 1;
              return (
                <li key={node} className="text-center">
                  <span
                    className={`mx-auto mb-3 block h-1.5 w-1.5 rounded-full ${
                      last ? "bg-brand" : "bg-ink"
                    }`}
                  />
                  <p
                    className={`text-[12px] tracking-[-0.02em] ${
                      last ? "font-medium text-ink" : "text-ink-muted"
                    }`}
                  >
                    {node}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
