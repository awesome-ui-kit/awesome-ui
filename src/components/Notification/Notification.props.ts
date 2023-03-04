import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IStyle } from '../../types/IStyle';

export interface NotificationProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'style'
  > {
  color?: 'success' | 'danger' | 'warning' | 'info';
  title: string;
  onClose: () => void;
  style?: IStyle;
}
