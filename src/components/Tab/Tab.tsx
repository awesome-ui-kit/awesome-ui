import React from 'react';
import '../../assets/styles/index.scss';
import { TabProps } from './Tab.props';
import cn from 'classnames';
import './Tab.scss';

const Tab = ({ active = false, className, children, ...props }: TabProps) => {
  return (
    <button
      className={cn('aw-ui-tab', className, {
        'aw-ui-tab-active': active,
      })}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
export default Tab;
