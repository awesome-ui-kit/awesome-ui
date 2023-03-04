import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { IStyle } from '../../types/IStyle';
import { IOption } from './types';

export interface SelectProps
  extends Omit<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    'style'
  > {
  options: IOption[];
  color?: 'grey' | 'primary' | 'success' | 'danger' | 'info';
  sizing?: 'normal' | 'big';
  style?: IStyle;
}
