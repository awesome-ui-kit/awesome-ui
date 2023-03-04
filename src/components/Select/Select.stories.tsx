import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
  title: 'Components/Form elements/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const options = [
  { value: 1, label: 'one' },
  { value: 2, label: 'two' },
  { value: 3, label: 'three' },
];

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const MainSelect = Template.bind({});
MainSelect.args = {
  options: options,
};

MainSelect.storyName = 'Select';

export const DisabledSelect = Template.bind({});
DisabledSelect.args = {
  disabled: true,
  options: options,
};
