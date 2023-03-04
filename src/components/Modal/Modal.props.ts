import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IStyle } from '../../types/IStyle';

export interface ModalProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'style'
  > {
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  title: string;
  onClose: () => void;
  style?: IStyle;
}
