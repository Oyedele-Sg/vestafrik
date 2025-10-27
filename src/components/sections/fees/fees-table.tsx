import { feeTable, formatRate, planLabels } from "@/lib/fees-data";

export function FeesTable() {
  return (
    <section id="fees-table" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-lg font-semibold mb-4">{feeTable.heading}</h2>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr className="text-muted-foreground">
                <th className="sticky left-0 bg-background text-left font-medium py-3 pe-4 border-b"></th>
                <th className="text-left font-medium py-3 px-4 border-b">
                  {planLabels.free}
                </th>
                <th className="text-left font-medium py-3 px-4 border-b">
                  {planLabels.plus}
                </th>
                <th className="text-left font-medium py-3 ps-4 border-b">
                  {planLabels.premium}
                </th>
              </tr>
            </thead>
            <tbody>
              {feeTable.rows.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <th
                    scope="row"
                    className="sticky left-0 bg-background text-left font-normal py-4 pe-4 border-b"
                  >
                    <div className="flex items-center gap-2">
                      <span>{row.label}</span>
                      {row.help ? (
                        <span
                          role="img"
                          aria-label={row.help}
                          className="text-muted-foreground cursor-help"
                          title={row.help}
                        >
                          ⓘ
                        </span>
                      ) : null}
                    </div>
                  </th>
                  <td className="py-4 px-4 border-b align-top">
                    {formatRate(row.rates.free)}
                  </td>
                  <td className="py-4 px-4 border-b align-top">
                    {formatRate(row.rates.plus)}
                  </td>
                  <td className="py-4 ps-4 border-b align-top">
                    {formatRate(row.rates.premium)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default FeesTable;
