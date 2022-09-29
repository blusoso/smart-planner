import styled from "styled-components";
import { FlexCenter } from "../Mixin/Mixin.styled";

type AvatarGroupedWrapperProps = {
  margin?: string;
};

export const AvatarGroupedWrapper = styled.div<AvatarGroupedWrapperProps>`
  display: flex;
  margin: 0 -${({ margin }) => margin || "0.5em"};
`;

type AvatarInGroupProps = {
  w?: string;
  h?: string;
  margin?: string;
  fontSize?: string;
};

const AVATAR_WIDTH = "3rem";
const AVATAR_HEIGHT = "3rem";

export const AvatarInGroup = styled.img<AvatarInGroupProps>`
  display: inline-block;
  width: ${({ w }) => w || AVATAR_WIDTH};
  height: ${({ h }) => h || AVATAR_HEIGHT};
  border-radius: 100%;
  border: 2px solid white;
`;

export const RestOfAvatar = styled(FlexCenter)<AvatarInGroupProps>`
  width: ${({ w }) => w || AVATAR_WIDTH};
  height: ${({ h }) => h || AVATAR_HEIGHT};
  border-radius: 100%;
  border: 2px solid white;
  background: ${({ theme }) => theme.greenColor};
  color: white;
  font-size: ${({ fontSize }) => fontSize || "0.9rem"};
`;
