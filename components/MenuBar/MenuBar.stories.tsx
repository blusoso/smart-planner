import { Meta, Story } from "@storybook/react";
import MenuBar, { MenuBarProps } from "./MenuBar";

export default {
  title: "App/MenuBar",
  component: MenuBar,
} as Meta;

const Template: Story<MenuBarProps> = (args) => <MenuBar {...args} />;

export const MenuBarMobile = Template.bind({});

MenuBarMobile.args = {
  user: { name: "Sopita Jullaprasertsak", avatar: "/assets/images/avatar.png" },
};
