import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { IStyle } from '../../types/IStyle';

export interface SwitchProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'type' | 'style'
  > {
  active: boolean;
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  label?: string;
  size?: 'small' | 'normal';
  style?: IStyle;
}
