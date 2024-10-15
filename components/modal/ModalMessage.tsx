import React, { useState, useEffect } from "react";

const ModalMessage = React.memo(() => {
  const [isMessageOn, setIsMessageOn] = useState(true);
  useEffect(() => {
    setIsMessageOn(true);
    const timer = setTimeout(() => setIsMessageOn(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      className={`${
        isMessageOn ? "opacity-60" : "opacity-0"
      } transition z-50 absolute bottom-4 left-[50%] translate-x-[-50%] px-4 py-1 shadow-lg rounded-full bg-neutral-800 text-white text-sm font-bold text-nowrap`}
    >
      뒤로가기로 창을 닫을 수 있습니다
    </div>
  );
});

ModalMessage.displayName = "ModalMessage";

export default ModalMessage;
