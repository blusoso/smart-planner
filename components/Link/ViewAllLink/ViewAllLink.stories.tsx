import ViewAllLink, { ViewAllLinkProps } from "./ViewAllLink";
import { Meta, Story } from "@storybook/react";

export default {
  title: "App/Link",
  component: ViewAllLink,
} as Meta;

const Template: Story<ViewAllLinkProps> = (args) => <ViewAllLink {...args} />;

export const ViewAll = Template.bind({});

ViewAll.args = {
  onClick: () => console.log("view all"),
};
