import { Button } from "@cjrojasb/personal-ui-package";
import Modal from "components/shared/Modal";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Button
        variation="info"
        className="text-lg"
        onClick={() => setShowModal(!showModal)}
      >
        Ver Modal
      </Button>
      {showModal && <Modal onClick={handleClose} />}
    </div>
  );
}

export default ModalPage;
