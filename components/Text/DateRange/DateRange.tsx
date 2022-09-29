import React from "react";
import TextWithIcon from "../TextWithIcon/TextWithIcon";
import CalendarIcon from "../../Icon/CalendarIcon";

type DateRangeProps = {
  dateRange: string;
  className?: string;
  fontSize?: string;
};

const DateRange = ({ dateRange, className, fontSize }: DateRangeProps) => {
  return (
    <>
      <TextWithIcon
        className={className}
        icon={<CalendarIcon isOutline iconWidth="1.125em" />}
        text={dateRange}
        fontSize={fontSize}
      />
    </>
  );
};

export default DateRange;
