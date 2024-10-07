import { useEffect } from "react";
import { useModal } from "./useModal";
import { useModalValue } from "./useModalValue";

const colorList = ["bg-[#ff5444]", "bg-[#ffb81e]", "bg-[#56c547]"];

export default function ModalTopBar() {
  const { closeModal } = useModal();
  const { title, isOpen } = useModalValue();

  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        window.history.pushState(null, document.title, window.location.href);
        closeModal();
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      removeEventListener("popstate", handlePopState);
    };
  }, [isOpen, closeModal]);

  return (
    <header className="absolute z-20 flex items-center gap-2 w-full p-3 bg-[#e2dbd7] shadow-sm">
      {colorList.map((data) => (
        <button
          key={`modal-top-button-${data}`}
          onClick={closeModal}
          className={`p-2 ${data} rounded-full hover:brightness-75`}
        />
      ))}
      <h1 className="flex flex-1 justify-center items-center text-sm font-bold">
        {title}
      </h1>
    </header>
  );
}
