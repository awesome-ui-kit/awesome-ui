import React from 'react';
import '../../assets/styles/index.scss';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';
import './Textarea.scss';

const Textarea = ({
  color = 'grey',
  sizing = 'normal',
  style,
  className,
  ...props
}: TextareaProps) => {
  const borderColor =
    color === 'grey' ? `var(--grey-500)` : `var(--${color}-main)`;

  return (
    <textarea
      className={cn(`aw-ui-textarea aw-ui-textarea-${sizing}`, className)}
      style={
        {
          '--border-color': borderColor,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};
export default Textarea;
