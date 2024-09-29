import { useModal } from "./useModal";
import { useModalValue } from "./useModalValue";

export default function ModalTopBar() {
  const { closeModal } = useModal();
  const { title } = useModalValue();

  return (
    <div className="flex items-center gap-2 p-3 bg-[#e2dbd7]">
      <button
        onClick={closeModal}
        className="p-2 bg-[#ff5445] rounded-full hover:brightness-75"
      />
      <button
        onClick={closeModal}
        className="p-2 bg-[#ffb81e] rounded-full hover:brightness-75"
      />
      <button className="p-2 bg-[#56c547] rounded-full hover:brightness-75" />
      <div className="flex flex-1 justify-center items-center">{title}</div>
    </div>
  );
}
