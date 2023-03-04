import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface TabProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'type'
  > {
  active?: boolean;
}
