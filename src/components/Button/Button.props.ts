import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "primary" | "success" | "danger" | "warning" | "info";
  size?: "normal" | "big";
  view?: "main" | "secondary" | "outline" | "text";
  shape?: "square" | "round";
  fullWidth?: boolean;
}
