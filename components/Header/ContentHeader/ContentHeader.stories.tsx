import { Meta, Story } from "@storybook/react";
import ContentHeader, { ContentHeaderProps } from "./ContentHeader";
import ViewAllLink from "../../Link/ViewAllLink/ViewAllLink";

export default {
  title: "App/Header",
  component: ContentHeader,
} as Meta;

const Template: Story<ContentHeaderProps> = (args) => (
  <ContentHeader {...args} />
);

export const ContentHeaderSection = Template.bind({});

ContentHeaderSection.args = {
  title: "Discover World 🌈",
  link: <ViewAllLink onClick={() => console.log("view all")} />,
};
