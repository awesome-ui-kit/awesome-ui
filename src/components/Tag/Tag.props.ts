import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IStyle } from '../../types/IStyle';

export interface TagProps
  extends Omit<
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    'style'
  > {
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'small' | 'normal';
  style?: IStyle;
}
