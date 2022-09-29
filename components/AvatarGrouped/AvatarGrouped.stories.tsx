import { Meta, Story } from "@storybook/react";
import AvatarGrouped, { AvatarGroupedProps } from "./AvatarGrouped";

export default {
  title: "App/Avatar",
  component: AvatarGrouped,
} as Meta;

const Template: Story<AvatarGroupedProps> = (args) => (
  <AvatarGrouped {...args} />
);

export const AvatarGroup = Template.bind({});

AvatarGroup.args = {
  avatarList: [
    "/assets/images/avatar.png",
    "/assets/images/avatar-2.png",
    "/assets/images/avatar-3.png",
    "/assets/images/avatar-4.png",
    "/assets/images/avatar-5.png",
  ],
};
