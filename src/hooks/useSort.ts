import { useState } from "react";
import { OrderTypes } from "types/orderTypes";

interface UseSortProps<TData, TConfig> {
  data: TData[];
  config: TConfig[];
}

function useSort<TData, TConfig>(data: TData[], config: TConfig[]) {
  const [sortOrder, setSortOrder] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);
  const { ASC, DESC } = OrderTypes;
  let sortedData = data;

  const handleSortingValues = (
    orderType: string | null,
    sortBy: string | null
  ) => {
    setSortOrder(orderType);
    setSortBy(sortBy);
  };

  const handleSortingClick = (label: string) => {
    if (sortBy && label !== sortOrder) {
      handleSortingValues(ASC, label);
    }

    switch (sortOrder) {
      case null:
        handleSortingValues(ASC, label);
        break;
      case ASC:
        handleSortingValues(DESC, label);
        break;
      default:
        handleSortingValues(null, null);
        break;
    }
  };

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

  return {
    sortOrder,
    sortBy,
    handleSortingClick,
    sortedData,
  };
}

export default useSort;
