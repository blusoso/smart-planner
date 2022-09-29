import React, { useState } from "react";
import { format, addDays } from "date-fns";
import Button, { BUTTON_TYPE } from "../Button/Button";
import { DateText, MiniCalendarWrapper } from "./MiniCalendar.styled";

export type MiniCalendarProps = {};

const NUM_OF_DAYS = 10;

const MiniCalendar = ({}: MiniCalendarProps) => {
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
    <MiniCalendarWrapper>
      {dateList.map((date, index) => {
        const isSelected =
          format(selectedDate, "dd/MM/yyyy") === format(date, "dd/MM/yyyy");

        return (
          <React.Fragment key={`date-box--${index}`}>
            <Button
              type={
                isSelected
                  ? BUTTON_TYPE.SECONDARY_OUTLINE
                  : BUTTON_TYPE.SECONDARY
              }
              className={index === dateList.length - 1 ? "mr-4" : ""}
              minWidth="4.5em"
              padding="1em"
              borderRadius="2em"
              onClick={() => handleSelectDateButton(date)}
            >
              <>
                <p style={{ fontWeight: 500 }}>{format(date, "E")}</p>
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
