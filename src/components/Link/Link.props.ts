import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import { IStyle } from '../../types/IStyle';

export interface LinkProps
  extends Omit<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    'style'
  > {
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'normal' | 'big';
  view?: 'main' | 'secondary' | 'outline' | 'text';
  disabled?: boolean;
  style?: IStyle;
}
