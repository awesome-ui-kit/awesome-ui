import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type' | 'id'
  > {
  label: string;
  fieldId: string;
  color?: 'primary' | 'success' | 'danger' | 'info';
  view?: 'classic' | 'modern';
}
