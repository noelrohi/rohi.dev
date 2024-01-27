import { SignIn } from "../../signin/form";
import { ModalDialog } from "../dialog";

export default function Modal() {
  return (
    <ModalDialog className="max-w-sm">
      <SignIn />
    </ModalDialog>
  );
}
