import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NotificationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "success" | "danger" | "warning" | "info";
  title: string;
  onClose: () => void;
}
