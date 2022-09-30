import React, { useState } from "react";
import { format, addDays } from "date-fns";
import Button, { BUTTON_TYPE } from "../Button/Button";
import { DateText, MiniCalendarWrapper } from "./MiniCalendar.styled";

export type MiniCalendarProps = {
  className?: string;
};

const NUM_OF_DAYS = 10;
const FORMAT_DATE = "dd/MM/yyyy";

const MiniCalendar = ({ className = "" }: MiniCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  let dateList: Date[] = [new Date()];
  for (let i: number = 1; i <= NUM_OF_DAYS - 1; i++) {
    const nextDay: Date = addDays(new Date(), i);
    dateList.push(nextDay);
  }

  const handleSelectDateButton = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <MiniCalendarWrapper className={className}>
      {dateList.map((date, index) => {
        const isSelected =
          format(selectedDate, FORMAT_DATE) === format(date, FORMAT_DATE);

        return (
          <React.Fragment key={`date-box--${index}`}>
            <Button
              type={
                isSelected
                  ? BUTTON_TYPE.SECONDARY_OUTLINE
                  : BUTTON_TYPE.SECONDARY
              }
              className={index === dateList.length - 1 ? "mr-4" : ""}
              minWidth="3.85em"
              padding="1em 0"
              borderRadius="2em"
              onClick={() => handleSelectDateButton(date)}
            >
              <>
                <p className="text-xs m-0">{format(date, "E")}</p>
                <DateText isSelected={isSelected}>{format(date, "d")}</DateText>
              </>
            </Button>
          </React.Fragment>
        );
      })}
    </MiniCalendarWrapper>
  );
};

export default MiniCalendar;
