import { Button } from "@cjrojasb/personal-ui-package";

function ButtonsPage() {
  return (
    <>
      <div>
        <Button
          onClick={() => alert("onClick")}
          variation="primary"
          className="text-sm"
        >
          Primary
        </Button>
      </div>
    </>
  );
}

export default ButtonsPage;
