import { Meta, Story } from "@storybook/react";
import MiniCalendar, { MiniCalendarProps } from "./MiniCalendar";

export default {
  title: "App/Calendar",
  component: MiniCalendar,
} as Meta;

const Template: Story<MiniCalendarProps> = (args) => <MiniCalendar {...args} />;

export const MiniCalendarSingleLine = Template.bind({});

MiniCalendarSingleLine.args = {};
