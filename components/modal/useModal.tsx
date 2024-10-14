import { useContext } from "react";
import { ModalSetContext } from "./ModalProvider";

export const useModal = () => {
  const value = useContext(ModalSetContext);
  if (!value) {
    throw new Error("ModalProvider를 최상위 컴포넌트(예: App)에 감싸주세요.");
  }
  return value;
};
