import { useEffect, useState } from "react";
import { useModalValue } from "./useModalValue";
import "./modal.css";
import ModalTopBar from "./ModalTopBar";

export const Modal = () => {
  const [isMessageOn, setIsMessageOn] = useState(true);
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

  useEffect(() => {
    setTimeout(() => setIsMessageOn(false), 5000);
  }, []);

  return modalData.isOpen ? (
    <div className="modal-container">
      <div className="modal-dimmer" style={modalData?.options?.dimmer} />
      <div
        className={`relative modal-content ${
          modalData?.options?.useAnimation && modalData.animation
        }`}
        style={modalData?.options?.body}
      >
        <ModalTopBar />
        <div className="overflow-auto pt-10">{modalData?.content}</div>
        <div
          className={`${
            isMessageOn ? "opacity-80" : "opacity-0"
          } transition z-50 absolute bottom-4 left-[50%] translate-x-[-50%] px-4 py-1 shadow-lg rounded-full bg-neutral-800 text-white text-sm font-bold text-nowrap`}
        >
          뒤로가기로 창을 닫을 수 있습니다
        </div>
      </div>
    </div>
  ) : null;
};
