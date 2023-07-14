import { Button } from "@cjrojasb/personal-ui-package";
import Panel from "components/shared/Panel";
import { useState } from "react";

interface CounterPageProps {
  initialCount: number;
}

function CounterPage({ initialCount }: CounterPageProps) {
  const [count, setCount] = useState<number>(initialCount);
  const [valueToAdd, setValueToAdd] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => prev - 1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    console.log("value", value);
  };

  return (
    <Panel>
      <h2 className="mb-3">
        Count is <span className="font-bold">{count}</span>
      </h2>
      <div className="flex justify-start items-center gap-2">
        <Button variation="primary" rounded onClick={increment}>
          Increment
        </Button>
        <Button variation="secondary" rounded onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
        />
        <Button variation="primary">Add</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
