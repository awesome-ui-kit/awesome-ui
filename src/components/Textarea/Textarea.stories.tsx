import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Textarea from "./Textarea";

export default {
  title: "Components/Form elements/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const NormalTextarea = Template.bind({});
NormalTextarea.args = {
  placeholder: "Some text",
};

export const BigTextarea = Template.bind({});
BigTextarea.args = {
  sizing: "big",
  placeholder: "Some text",
};

export const DisabledTextarea = Template.bind({});
DisabledTextarea.args = {
  disabled: true,
  placeholder: "Some text",
};
