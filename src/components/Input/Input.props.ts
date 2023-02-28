import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "type"
  > {
  color?: "grey" | "primary" | "success" | "danger" | "info";
  sizing?: "normal" | "big";
  fieldType?:
    | "text"
    | "number"
    | "tel"
    | "email"
    | "password"
    | "search"
    | "url"
    | "date"
    | "time"
    | "datetime"
    | "datetime-local"
    | "week";
  // TODO
  // | "color"
  // | "file"
  // | "range"
}
