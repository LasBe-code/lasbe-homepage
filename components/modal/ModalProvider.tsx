import { createContext, useEffect, useMemo, useState } from "react";
import { Modal } from "./Modal";
import {
  ModalValueType,
  ModalSetType,
  ModalProviderType,
  OpenModalPropsType,
} from "./types";
import { useCallback } from "react";

export const ModalValueContext = createContext<ModalValueType | null>(null);
export const ModalSetContext = createContext<ModalSetType | null>(null);

export const ModalProvider = ({ children, options }: ModalProviderType) => {
  const modalInitData: ModalValueType = useMemo(
    () => ({
      isOpen: false,
      animation: "open-modal",
      title: "",
      content: null,
      options: options
        ? { useAnimation: true, ...options }
        : { useAnimation: true },
    }),
    [options]
  );
  const [modalValue, setModalValue] = useState<ModalValueType>(modalInitData);
  const openModal = useCallback(
    ({ title, content, options }: OpenModalPropsType) => {
      setModalValue((prev) => ({
        ...prev,
        title,
        content,
        isOpen: true,
        options: { ...prev.options, ...options },
      }));
      window.history.pushState(null, "", window.location.href);
    },
    []
  );

  const closeModal = useCallback(() => {
    setModalValue((prev) => ({ ...prev, animation: "close-modal" }));
    setTimeout(() => {
      setModalValue(modalInitData);
    }, 170);
  }, [modalInitData]);

  const modalSet = useMemo(
    () => ({ openModal, closeModal }),
    [closeModal, openModal]
  );

  useEffect(() => {
    const handlePopState = () => {
      closeModal();
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      removeEventListener("popstate", handlePopState);
    };
  }, [closeModal]);

  return (
    <ModalSetContext.Provider value={modalSet}>
      <ModalValueContext.Provider value={modalValue}>
        <>
          {children}
          <Modal />
        </>
      </ModalValueContext.Provider>
    </ModalSetContext.Provider>
  );
};
