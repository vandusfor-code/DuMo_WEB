const rows = [
  ["Meta", "$500K", "700", "14", "$35.714"],
  ["Google", "$200K", "80", "10", "$20.000"],
  ["Organic", "—", "35", "5", "$0"],
];

export function HomeAnalytics() {
  return (
    <section className="shell py-24 sm:py-32">
      <h2 className="heading max-w-[12ch] text-[36px] sm:text-[52px]">
        ¿De dónde vienen tus ventas?
      </h2>
      <div className="dumo-frame mt-12 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-[14px]">
          <thead className="text-[12px] text-muted">
            <tr>
              {["Fuente", "Inversión", "Leads", "Ventas", "CPA"].map((col) => (
                <th key={col} className="px-5 pt-5 pb-3 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-line">
                {row.map((cell, index) => (
                  <td key={cell} className={`px-5 py-4 ${index === 3 ? "text-lime" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-5 py-4 text-[12px] text-muted">Datos demostrativos</p>
      </div>
    </section>
  );
}
