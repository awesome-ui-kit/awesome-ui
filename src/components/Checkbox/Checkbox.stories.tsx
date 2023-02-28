import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Form elements/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const MainCheckbox = Template.bind({});
MainCheckbox.args = {
  label: "Label example",
  fieldId: "example-id",
  value: "example-value",
  name: "example",
};
MainCheckbox.storyName = "Checkbox";

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  label: "Label example",
  fieldId: "example-id",
  value: "example-value",
  name: "example",
  disabled: true,
};
