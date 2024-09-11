import { useEffect, useState } from "react";

export default function Report() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const storedReport =
      JSON.parse(localStorage.getItem("@product_report")) || [];
    setReport(storedReport);
  }, []);

  return (
    <div className="p-5">
      <h1 className="mb-4 text-xl font-bold text-yellow-400">
        Relatório de Produtos
      </h1>

      {report.length === 0 ? (
        <p>Nenhuma operação no estoque...</p>
      ) : (
        <div className="space-y-4">
          {report.map((entry, index) => (
            <div
              key={index}
              className="p-4 space-y-2 border rounded-lg shadow-md bg-black/70"
            >
              <p className="font-semibold text-yellow-400">
                Operação:{" "}
                {entry.actionType === "deleted" ? "Exclusão" : "Edição"}
              </p>
              <p className="text-yellow-300">
                Produto: {entry.product.title} (ID: {entry.product.id})
              </p>
              <p className="text-sm text-gray-400">
                Horário: {entry.timestamp}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
