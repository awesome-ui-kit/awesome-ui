import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Radio from "./Radio";

export default {
  title: "Components/Form elements/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const MainRadio = Template.bind({});
MainRadio.args = {
  label: "Label example",
  fieldId: "example-id",
  value: "example-value",
  name: "example",
};
MainRadio.storyName = "Radio";

export const DisabledRadio = Template.bind({});
DisabledRadio.args = {
  label: "Label example",
  fieldId: "example-id",
  value: "example-value",
  name: "example",
  disabled: true,
};
