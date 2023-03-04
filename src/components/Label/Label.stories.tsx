import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './Label';
import Input from '../Input';

export default {
  title: 'Components/Form elements/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const TemplateNormal: ComponentStory<typeof Label> = (args) => (
  <>
    <Label {...args} /> <Input placeholder="Your name" />
  </>
);

export const NormalLabel = TemplateNormal.bind({});
NormalLabel.args = {
  children: 'Name',
};

const TemplateBig: ComponentStory<typeof Label> = (args) => (
  <>
    <Label {...args} /> <Input placeholder="Your name" sizing="big" />
  </>
);

export const BigLabel = TemplateBig.bind({});
BigLabel.args = {
  children: 'Name',
  size: 'big',
};
