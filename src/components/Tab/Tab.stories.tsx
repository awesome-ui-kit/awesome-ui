import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tab from "./Tab";

export default {
  title: "Components/Page elements/Tab",
  component: Tab,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "var(--grey-400)",
          height: 500,
          padding: 10,
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const MainTab = Template.bind({});
MainTab.args = {
  children: "Tab",
};
MainTab.storyName = "Tab";

export const ActiveTab = Template.bind({});
ActiveTab.args = {
  active: true,
  children: "Tab",
};

export const DisabledTab = Template.bind({});
DisabledTab.args = {
  active: true,
  disabled: true,
  children: "Tab",
};

const TemplateTabsGroup: ComponentStory<typeof Tab> = (args) => (
  <>
    <Tab active {...args} />
    <Tab {...args} />
    <Tab {...args} />
    <Tab {...args} />
    <Tab {...args} />
  </>
);

export const TabsGroup = TemplateTabsGroup.bind({});
TabsGroup.args = {
  children: "Tab",
};
