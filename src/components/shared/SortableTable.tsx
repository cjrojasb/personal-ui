import React, { useState } from "react";
import Table from "./Table";
import { MdOutlineArrowDownward, MdOutlineArrowUpward } from "react-icons/md";

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

const OrderTypes = {
  ASC: "asc",
  DESC: "desc",
};

function SortableTable<TData, TConfig>(props: TableProps<TData, TConfig>) {
  const [sortOrder, setSortOrder] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);
  const { config, data } = props;
  const { ASC, DESC } = OrderTypes;
  let sortedData = data;

  const getIcons = (
    label: string,
    sortBy: string | null,
    sortOrder: string | null
  ): JSX.Element => {
    let icons: JSX.Element | null = null;
    if (label !== sortBy) {
      icons = (
        <>
          <MdOutlineArrowUpward />
          <MdOutlineArrowDownward />
        </>
      );
    }
    
    if (sortOrder === null) {
      icons = (
        <>
          <MdOutlineArrowUpward />
          <MdOutlineArrowDownward />
        </>
      );
    } else if (sortOrder === ASC) {
      icons = <MdOutlineArrowUpward />;
    } else if (sortOrder === DESC) {
      icons = <MdOutlineArrowDownward />;
    }

    return <div>{icons}</div>;
  };

  const handleOrderValues = (
    orderType: string | null,
    sortBy: string | null
  ) => {
    setSortOrder(orderType);
    setSortBy(sortBy);
  };

  const handleClick = (label: string) => {
    if (sortBy && label !== sortOrder) {
      handleOrderValues(ASC, label);
    }

    switch (sortOrder) {
      case null:
        handleOrderValues(ASC, label);
        break;
      case ASC:
        handleOrderValues(DESC, label);
        break;
      default:
        handleOrderValues(null, null);
        break;
    }
  };

  const updateConfig = config.map((column: any) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          onClick={() => handleClick(column.label)}
          className="cursor-pointer hover:bg-gray-100 p-2"
        >
          <div className="flex items-center gap-2">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  if (sortOrder && sortBy) {
    const { sortValue }: any = config.find(
      ({ label }: any) => label === sortBy
    );
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === ASC ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} data={sortedData} config={updateConfig} />;
}

export default SortableTable;
