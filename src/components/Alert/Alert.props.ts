import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NotificationProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  text: string;
  color?: "primary" | "success" | "danger" | "warning" | "info";
  size?: "small" | "normal";
}
