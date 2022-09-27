import { Meta, Story } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

export default {
  title: "App/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});

MainHeader.args = {
  user: { name: "Sopita Jullaprasertsak", avatar: "/assets/images/avatar.png" },
};
