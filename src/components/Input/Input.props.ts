import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IStyle } from '../../types/IStyle';

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type' | 'style'
  > {
  color?: 'grey' | 'primary' | 'success' | 'danger' | 'info';
  sizing?: 'normal' | 'big';
  fieldType?:
    | 'text'
    | 'number'
    | 'tel'
    | 'email'
    | 'password'
    | 'search'
    | 'url'
    | 'date'
    | 'time'
    | 'datetime'
    | 'datetime-local'
    | 'week';
  style?: IStyle;

  // TODO "color"| "file"| "range"
}
