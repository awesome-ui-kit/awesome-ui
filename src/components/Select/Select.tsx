import React from 'react';
import '../../assets/styles/index.scss';
import { SelectProps } from './Select.props';
import cn from 'classnames';
import './Select.scss';
import { IOption } from './types';

const Select = ({
  color = 'grey',
  sizing = 'normal',
  options,
  style,
  className,
  ...props
}: SelectProps) => {
  const borderColor =
    color === 'grey' ? `var(--grey-500)` : `var(--${color}-main)`;

  return (
    <select
      className={cn(`aw-ui-select aw-ui-select-${sizing}`, className)}
      style={
        {
          '--border-color': borderColor,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {options.length !== 0 &&
        options.map((option: IOption) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};
export default Select;
