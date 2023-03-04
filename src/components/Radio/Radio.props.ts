import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface RadioProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type' | 'id'
  > {
  label: string;
  fieldId: string;
  color?: 'primary' | 'success' | 'danger' | 'info';
}
