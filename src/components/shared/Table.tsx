import React, { Fragment } from "react";

interface TableProps<TData, TConfig> {
  config: TConfig[];
  configKey: (item: TConfig) => string;
  configLabel: (item: TConfig) => string;
  configHeader?: (item: TConfig) => React.ReactNode;
  renderConfig: (rowData: TData, item: TConfig) => React.ReactNode;
  configCustomHeader?: (item: TConfig) => boolean;
  data: TData[];
  dataKey: (rowData: TData) => string;
}

function Table<TData, TConfig>({
  config,
  configHeader,
  configKey,
  data,
  configLabel,
  dataKey,
  renderConfig,
  configCustomHeader,
}: TableProps<TData, TConfig>) {
  const renderedHeadRows = (
    <tr className="border-b-2">
      {config.map((item) =>
        configCustomHeader && configCustomHeader(item) ? (
          <Fragment key={configKey(item)}>
            {configHeader && configHeader(item)}
          </Fragment>
        ) : (
          <th key={configKey(item)} className="p-2">{configLabel(item)}</th>
        )
      )}
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
