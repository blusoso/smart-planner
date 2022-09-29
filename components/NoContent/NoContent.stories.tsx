import { Meta, Story } from "@storybook/react";
import NoContent, { NoContentProps } from "./NoContent";

export default {
  title: "App/NoContent",
  component: NoContent,
} as Meta;

const Template: Story<NoContentProps> = (args) => <NoContent {...args} />;

export const NoContentBox = Template.bind({});

NoContentBox.args = {
  title: "Plan your trip now",
  subTitle: "You don’t have any trip",
};
