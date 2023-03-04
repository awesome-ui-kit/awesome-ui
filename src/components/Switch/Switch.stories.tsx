import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './Switch';

export default {
  title: 'Components/Page elements/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const ActiveSwitch = Template.bind({});
ActiveSwitch.args = {
  active: true,
};

ActiveSwitch.storyName = 'Switch';

export const SwitchWithLabel = Template.bind({});
SwitchWithLabel.args = {
  active: false,
  label: 'Switch',
};

export const DisabledSwitch = Template.bind({});
DisabledSwitch.args = {
  active: false,
  disabled: true,
};
