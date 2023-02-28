import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Components/Form elements/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const NormalInput = Template.bind({});
NormalInput.args = {
  placeholder: "Some text",
};

export const BigInput = Template.bind({});
BigInput.args = {
  sizing: "big",
  placeholder: "Some text",
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  disabled: true,
  placeholder: "Some text",
};
