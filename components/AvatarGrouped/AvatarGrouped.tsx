import React from "react";
import { shuffle, sliceArr } from "../../utils/array";
import {
  AvatarGroupedWrapper,
  AvatarInGroup,
  RestOfAvatar,
} from "./AvatarGrouped.styled";

export type AvatarGroupedProps = {
  avatarList: string[];
  w?: string;
  h?: string;
  margin?: string;
  fontSize?: string;
};

const AVATAR_AMOUNT = 3;

const AvatarGrouped = ({
  avatarList,
  w,
  h,
  margin,
  fontSize,
}: AvatarGroupedProps) => {
  const avatarListShuffled = shuffle(avatarList);
  const newAvatarList = sliceArr(avatarListShuffled, AVATAR_AMOUNT);

  return (
    <div className="flex">
      {newAvatarList.map((avatar, index) => (
        <AvatarGroupedWrapper key={`avatar--${index}`} margin={margin}>
          <AvatarInGroup src={avatar} alt={`avatar--${index}`} w={w} h={h} />
        </AvatarGroupedWrapper>
      ))}
      {avatarList.length > AVATAR_AMOUNT && (
        <RestOfAvatar w={w} h={h} fontSize={fontSize}>
          +{avatarList.length - AVATAR_AMOUNT}
        </RestOfAvatar>
      )}
    </div>
  );
};

export default AvatarGrouped;
