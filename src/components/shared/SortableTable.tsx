import React from "react";
import Table from "./Table";
import useSort from "hooks/useSort";
import useSortIcons from "hooks/useSortIcons";

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

function SortableTable<TData, TConfig>(props: TableProps<TData, TConfig>) {
  const { config, data } = props;
  const { sortOrder, sortBy, handleSortingClick, sortedData } = useSort(
    data,
    config
  );
  const { getSortIcons } = useSortIcons();

  const updateConfig = config.map((column: any) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          onClick={() => handleSortingClick(column.label)}
          className="cursor-pointer hover:bg-gray-100 p-2"
        >
          <div className="flex items-center gap-2">
            {getSortIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updateConfig} />;
}

export default SortableTable;
