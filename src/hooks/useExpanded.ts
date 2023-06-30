import { useState } from "react";

function useExpanded() {
  const [expanded, setExpanded] = useState<number>(0);

  return {
    expanded,
    setExpanded,
  };
}

export default useExpanded;
