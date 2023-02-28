import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "Components/Page elements/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const PrimaryAlert = Template.bind({});
PrimaryAlert.args = {
  color: "primary",
  text: "Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique tristique vestibulum senectus.",
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  color: "info",
  text: "Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique tristique vestibulum senectus.",
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  color: "success",
  text: "Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique tristique vestibulum senectus.",
};

export const DangerAlert = Template.bind({});
DangerAlert.args = {
  color: "danger",
  text: "Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique tristique vestibulum senectus.",
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  color: "warning",
  text: "Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique tristique vestibulum senectus.",
};
