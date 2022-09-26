import { Meta, Story } from "@storybook/react";
import CommonImage, { CommonImageProps } from "./CommonImage";

export default {
  title: "App/CommonImage",
  component: CommonImage,
} as Meta;

const Template: Story<CommonImageProps> = (args) => <CommonImage {...args} />;

export const Avatar = Template.bind({});

Avatar.args = {
  src: "https://sv1.picz.in.th/images/2022/09/26/pwlhs0.png",
  alt: "avatar",
  w: "52px",
  h: "52px",
  isCircle: true,
};
