import { Button } from "@cjrojasb/personal-ui-package";
import { useState } from "react";
import Modal from "components/shared/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => setShowModal(false);

  const modalRendered = (
    <Modal
      onClose={handleClose}
      actionBar={
        <Button variation="warning" onClick={handleClose}>
          Cerrar
        </Button>
      }
    >
      <h1>Hola este es un modal</h1>
    </Modal>
  );

  return (
    <div className="relative">
      <Button
        variation="info"
        className="text-lg"
        onClick={() => setShowModal(!showModal)}
      >
        Ver Modal
      </Button>
      {showModal && modalRendered}
    </div>
  );
}

export default ModalPage;
