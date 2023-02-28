import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface LinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  color?: "primary" | "success" | "danger" | "warning" | "info";
  size?: "normal" | "big";
  view?: "main" | "secondary" | "outline" | "text";
  disabled?: boolean;
}
