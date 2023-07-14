import { MdOutlineArrowDownward, MdOutlineArrowUpward } from "react-icons/md";
import { OrderTypes } from "types/orderTypes";

function useSortIcons() {
  const { ASC, DESC } = OrderTypes;

  const getSortIcons = (
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

  return {
    getSortIcons,
  };
}

export default useSortIcons;
