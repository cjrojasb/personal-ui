import { useReducer } from "react";
import { Button } from "@cjrojasb/personal-ui-package";
import Panel from "components/shared/Panel";

interface CounterPageProps {
  initialCount: number;
}

interface CounterState {
  count: number;
  valueToAdd: number;
}

enum CountererActionKind {
  INCREMENT_COUNT = "increment-count",
  DECREMENT_COUNT = "decrement-count",
  ADD_VALUE_COUNT = "add-value-count",
  SET_VALUE_TO_ADD = "set-value-to-add",
}

interface CounterAction {
  type: CountererActionKind;
  payload: number;
}

const reducer = (state: CounterState, action: CounterAction) => {
  const { type, payload } = action;
  const {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    ADD_VALUE_COUNT,
    SET_VALUE_TO_ADD,
  } = CountererActionKind;

  switch (type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + payload };

    case DECREMENT_COUNT:
      return { ...state, count: state.count - payload };

    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: payload };

    case ADD_VALUE_COUNT:
      return { ...state, count: payload, valueToAdd: 0 };

    default:
      return state;
  }
};

function CounterPage({ initialCount }: CounterPageProps) {
  const {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    ADD_VALUE_COUNT,
    SET_VALUE_TO_ADD,
  } = CountererActionKind;
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () =>
    dispatch({
      type: INCREMENT_COUNT,
      payload: 1,
    });

  const decrement = () =>
    dispatch({
      type: DECREMENT_COUNT,
      payload: 1,
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { valueToAdd, count } = state;
    console.log("valueToAdd", valueToAdd);
    dispatch({
      type: ADD_VALUE_COUNT,
      payload: valueToAdd + count,
    });
  };

  return (
    <div className="w-2/4">
      <Panel>
        <h2 className="mb-3">
          Count is <span className="font-bold">{state.count}</span>
        </h2>
        <div className="flex justify-start items-center gap-2">
          <Button variation="primary" rounded onClick={increment}>
            Increment
          </Button>
          <Button variation="secondary" rounded onClick={decrement}>
            Decrement
          </Button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Add a lot!</label>
          <input
            className="p-1 m-3 bg-gray-50 border border-gray-300"
            onChange={handleChange}
            type="number"
            value={state.valueToAdd || ""}
          />
          <Button variation="primary" disabled={!state.valueToAdd}>
            Add
          </Button>
        </form>
      </Panel>
    </div>
  );
}

export default CounterPage;
