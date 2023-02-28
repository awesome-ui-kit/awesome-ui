import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { IOption } from "./types";

export interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  color?: "grey" | "primary" | "success" | "danger" | "info";
  options: IOption[];
}
