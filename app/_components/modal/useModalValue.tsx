import { useContext } from "react";
import { ModalValueContext } from "./modalProvider";

export const useModalValue = () => {
  const contextValue = useContext(ModalValueContext);
  if (!contextValue) {
    throw new Error("ModalProvider를 최상위 컴포넌트(예: App)에 감싸주세요.");
  }
  return contextValue;
};
