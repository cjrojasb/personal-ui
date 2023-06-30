import { MdDelete } from "react-icons/md";
import Button from "components/shared/Button";

function ButtonsPage() {
  return (
    <>
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

export default ButtonsPage;
