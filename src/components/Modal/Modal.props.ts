import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "primary" | "success" | "danger" | "warning" | "info";
  title: string;
  onClose: () => void;
}
