"use client";

import { ModalProvider } from "./modal";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <>{children}</>
    </ModalProvider>
  );
}
