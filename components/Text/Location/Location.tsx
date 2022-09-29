import React from "react";
import PinOutlineIcon from "../../Icon/PinOutlineIcon";
import TextWithIcon from "../TextWithIcon/TextWithIcon";

type LocationProps = {
  city: string;
  country: string;
  className?: string;
  fontSize?: string;
};

const Location = ({ city, country, className, fontSize }: LocationProps) => {
  return (
    <>
      <TextWithIcon
        className={className}
        icon={<PinOutlineIcon iconWidth="1.125em" />}
        text={`${city}, ${country}`}
        fontSize={fontSize}
      />
    </>
  );
};

export default Location;
