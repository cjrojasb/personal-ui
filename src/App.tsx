import "./index.css";
import { MdDelete } from "react-icons/md";
import Button from "./components/shared/buttons/Button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Button
          variation="primary"
          onClick={() => console.log("onClick")}
          className="mb-6"
        >
          <MdDelete />
          Primary
        </Button>
      </div>
      <div>
        <Button variation="secondary">Secondary</Button>
      </div>
      <div>
        <Button variation="info">Info</Button>
      </div>
      <div>
        <Button variation="success">Success</Button>
      </div>
      <div>
        <Button variation="warning">Warning</Button>
      </div>
      <div>
        <Button variation="danger">Danger</Button>
      </div>
    </>
  );
}

export default App;
