import React from 'react';
import '../../assets/styles/index.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';
import './Input.scss';

const Input = ({
  color = 'grey',
  sizing = 'normal',
  fieldType = 'text',
  style,
  className,
  ...props
}: InputProps) => {
  const borderColor =
    color === 'grey' ? `var(--grey-500)` : `var(--${color}-main)`;

  return (
    <input
      className={cn(`aw-ui-input aw-ui-input-${sizing}`, className)}
      style={
        {
          '--border-color': borderColor,
          ...style,
        } as React.CSSProperties
      }
      type={fieldType}
      {...props}
    />
  );
};
export default Input;
