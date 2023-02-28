import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  color?: "grey" | "primary" | "success" | "danger" | "info";
  sizing?: "normal" | "big";
}
