import { Meta, Story } from "@storybook/react";
import ProgressBar, { ProgressBarProps } from "./ProgressBar";

export default {
  title: "App/ProgressBar",
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const MainProgressBar = Template.bind({});

MainProgressBar.args = {
  percent: 33.33,
};
