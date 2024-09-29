import { useEffect } from "react";
import { useModalValue } from "./useModalValue";
import "./modal.css";
import ModalTopBar from "./ModalTopBar";

export const Modal = () => {
  const modalData = useModalValue();
  useEffect(() => {
    if (modalData.isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!modalData.isOpen) {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("margin-right");
    }
  }, [modalData.isOpen]);

  return modalData.isOpen ? (
    <div className="modal-container">
      <div className="modal-dimmer" style={modalData?.options?.dimmer} />
      <div
        className={`modal-content ${
          modalData?.options?.useAnimation && modalData.animation
        }`}
        style={modalData?.options?.body}
      >
        <ModalTopBar />
        <div className="w-[350px] md:w-[750px] p-6">{modalData?.content}</div>
      </div>
    </div>
  ) : null;
};
