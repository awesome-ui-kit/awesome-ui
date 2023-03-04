import React from 'react';
import '../../assets/styles/index.scss';
import { RadioProps } from './Radio.props';
import cn from 'classnames';
import './Radio.scss';

const Radio = ({
  fieldId,
  label,
  color = 'primary',
  className,
  ...props
}: RadioProps) => {
  return (
    <div
      className={cn('aw-ui-radio-input-wrapper', className)}
      style={
        {
          '--main': `var(--${color}-main)`,
          '--background': `var(--${color}-background)`,
          '--border': `var(--${color}-border)`,
          '--hover': `var(--${color}-hover)`,
          '--pressed': `var(--${color}-pressed)`,
          '--focused': `var(--${color}-focused)`,
        } as React.CSSProperties
      }
    >
      <input
        id={fieldId}
        className="aw-ui-radio-input visually-hidden"
        type="radio"
        {...props}
      />
      <label className="aw-ui-radio-label" htmlFor={fieldId}>
        {label}
      </label>
    </div>
  );
};
export default Radio;
