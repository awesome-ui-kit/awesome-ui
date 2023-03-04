import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { IStyle } from '../../types/IStyle';

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'style'
  > {
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'normal' | 'big';
  view?: 'main' | 'secondary' | 'outline' | 'text';
  shape?: 'square' | 'round';
  fullWidth?: boolean;
  style?: IStyle;
}
