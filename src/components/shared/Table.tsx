import React from "react";

interface TableProps<TData, TConfig> {
  config: TConfig[];
  configKey: (item: TConfig) => string;
  configLabel: (item: TConfig) => string;
  renderConfig: (rowData: TData, item: TConfig) => React.ReactNode;
  data: TData[];
  dataKey: (rowData: TData) => string;
}

function Table<TData, TConfig>({
  data,
  dataKey,
  config,
  renderConfig,
  configKey,
  configLabel,
}: TableProps<TData, TConfig>) {
  const renderedHeadRows = (
    <tr className="border-b-2">
      {config.map((item) => (
        <th key={configKey(item)}>{configLabel(item)}</th>
      ))}
    </tr>
  );

  const renderedBodyRows = data.map((rowData) => (
    <tr className="border-b last:border-0" key={dataKey(rowData)}>
      {config.map((item) => (
        <td className="p-2" key={configKey(item)}>
          {renderConfig(rowData, item)}
        </td>
      ))}
    </tr>
  ));

  return (
    <table className="table-auto border-spacing-2">
      <thead>{renderedHeadRows}</thead>
      <tbody>{renderedBodyRows}</tbody>
    </table>
  );
}

export default Table;
