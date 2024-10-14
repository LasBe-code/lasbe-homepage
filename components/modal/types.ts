export type ModalAnimationType = "open-modal" | "close-modal";

export type ModalContentsType = {
  title: string;
  content: React.ReactNode;
};

export type ModalOptionType = {
  dimmer?: React.CSSProperties;
  body?: React.CSSProperties;
  useAnimation?: boolean;
};
export type ModalValueType = {
  animation: ModalAnimationType;
  isOpen: boolean;
  title: string;
  options?: ModalOptionType;
} & ModalContentsType;

export type OpenModalPropsType = {
  options?: ModalOptionType;
} & ModalContentsType;
export type OpenModalType = (props: OpenModalPropsType) => void;

export type ModalSetType = {
  openModal: OpenModalType;
  closeModal: () => void;
};

export type ModalProviderType = {
  children: React.ReactElement;
  options?: ModalOptionType;
};
