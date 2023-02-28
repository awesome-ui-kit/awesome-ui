import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  color?: "primary" | "success" | "danger" | "warning" | "info";
  size?: "small" | "normal";
}
