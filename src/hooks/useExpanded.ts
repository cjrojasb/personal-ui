import { useState } from 'react';

function useExpanded() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const isExpanded = (activeIndex: number) => activeIndex === expanded;

  const handleExpand = (activeIndex: number) =>
    setExpanded(activeIndex === expanded ? null : activeIndex);

  return {
    expanded,
    isExpanded,
    handleExpand,
  };
}

export default useExpanded;
