import { Meta, Story } from "@storybook/react";
import CommonImage, { CommonImageProps } from "./CommonImage";

export default {
  title: "App/CommonImage",
  component: CommonImage,
} as Meta;

const Template: Story<CommonImageProps> = (args) => <CommonImage {...args} />;

export const Avatar = Template.bind({});

Avatar.args = {
  src: "/images/avatar.png",
  alt: "avatar",
  w: "52px",
  h: "52px",
  isCircle: true,
};
