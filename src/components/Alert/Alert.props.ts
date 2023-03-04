import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IStyle } from '../../types/IStyle';

export interface NotificationProps
  extends Omit<
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    'style'
  > {
  text: string;
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'small' | 'normal';
  style?: IStyle;
}
