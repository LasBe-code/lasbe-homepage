import { useModal } from "./useModal";

export default function ModalDimmer() {
  const { closeModal } = useModal();
  return <div className="modal-dimmer cursor-pointer" onClick={closeModal} />;
}
