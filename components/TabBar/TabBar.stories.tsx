import { Meta, Story } from "@storybook/react";
import TabBar, { TabBarProps } from "./TabBar";

export default {
  title: "App/TabBar",
  component: TabBar,
} as Meta;

const Template: Story<TabBarProps> = (args) => <TabBar {...args} />;

export const TabBarMobile = Template.bind({});

TabBarMobile.args = {
  user: { name: "Sopita Jullaprasertsak", avatar: "/assets/images/avatar.png" },
};
