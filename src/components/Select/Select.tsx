import React from "react";
import "../../assets/styles/index.css";
import { SelectProps } from "./Select.props";
import cn from "classnames";
import "./Select.scss";
import { IOption } from "./types";

const Select = ({
  color = "grey",
  options,
  className,
  children,
  ...props
}: SelectProps) => {
  const borderColor =
    color === "grey" ? `var(--grey-500)` : `var(--${color}-main)`;

  return (
    <select
      className={cn("aw-ui-select")}
      style={
        {
          "--border-color": borderColor,
        } as React.CSSProperties
      }
      {...props}
    >
      {options.length !== 0 &&
        options.map((option: IOption) => (
          <option value={option.value}>{option.label}</option>
        ))}
    </select>
  );
};
export default Select;
