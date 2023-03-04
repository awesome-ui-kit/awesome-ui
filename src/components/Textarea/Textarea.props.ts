import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { IStyle } from '../../types/IStyle';

export interface TextareaProps
  extends Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    'style'
  > {
  color?: 'grey' | 'primary' | 'success' | 'danger' | 'info';
  sizing?: 'normal' | 'big';
  style?: IStyle;
}
