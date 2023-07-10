import { Button } from "@cjrojasb/personal-ui-package";
import { ComponentPropsWithoutRef } from "react";

export interface ModalProps extends ComponentPropsWithoutRef<"button"> {}

function Modal({ ...rest }: ModalProps) {
  return (
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white">
        <h1>Modal</h1>
        <Button {...rest} variation="secondary">
          Cerrar
        </Button>
      </div>
    </div>
  );
}

export default Modal;
