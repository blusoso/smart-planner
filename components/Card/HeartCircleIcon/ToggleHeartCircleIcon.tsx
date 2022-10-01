import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { HeartCircleIcon } from "../../Icon/HeartCircleIcon";

const HEART_ICON_CIRCLE_SIZE = "2.3em";
const HEART_ICON_SIZE = "1.4em";

type ToggleHeartCircleIconProps = {
  isFavorite: boolean;
  circleSize?: string;
  iconWidth?: string;
};

const ToggleHeartCircleIcon = ({
  isFavorite = false,
  circleSize,
  iconWidth,
}: ToggleHeartCircleIconProps) => {
  const themeContext = useContext(ThemeContext);
  const [isLike, setIsLike] = useState(isFavorite);

  const toggleFavoriteButton = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <HeartCircleIcon
        color={isLike ? themeContext.lightGreenColor : themeContext.greenColor}
        backgroundColor={
          isLike ? themeContext.greenColor : themeContext.lightGreenColor
        }
        isOutline={!isLike}
        circleSize={circleSize || HEART_ICON_CIRCLE_SIZE}
        iconWidth={iconWidth || HEART_ICON_SIZE}
        onClick={toggleFavoriteButton}
      />
    </>
  );
};

export default ToggleHeartCircleIcon;
