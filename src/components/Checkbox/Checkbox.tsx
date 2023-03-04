import React from 'react';
import '../../assets/styles/index.scss';
import { CheckboxProps } from './Checkbox.props';
import cn from 'classnames';
import './Checkbox.scss';

const Checkbox = ({
  fieldId,
  label,
  color = 'primary',
  view = 'classic',
  className,
  ...props
}: CheckboxProps) => {
  return (
    <div
      className={cn('aw-ui-checkbox-input-wrapper', className)}
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
        className={`aw-ui-checkbox-input visually-hidden aw-ui-checkbox-input-${view}`}
        type="checkbox"
        {...props}
      />
      <label className="aw-ui-checkbox-label" htmlFor={fieldId}>
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
