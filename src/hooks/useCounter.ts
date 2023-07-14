import { useState } from "react";

function useCounter(initialCount: number) {
  const [count, setCount] = useState<number>(initialCount);

  const increment = setCount((prev) => prev + 1);

  const decrement = setCount((prev) => prev - 1);

  return {
    count,
    increment,
    decrement,
  };
}

export default useCounter;
