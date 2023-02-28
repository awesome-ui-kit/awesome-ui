import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface SwitchProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "type"
  > {
  color?: "primary" | "success" | "danger" | "warning" | "info";
  label?: string;
  active: boolean;
}
