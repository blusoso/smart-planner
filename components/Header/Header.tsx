import React from "react";
import CommonImage from "../CommonImage/CommonImage";
import { HeaderWrapper, WelcomeUser } from "./Header.styled";

export type UserInfo = {
  name: string;
  avatar: string;
};

export type HeaderProps = {
  user: UserInfo;
};

const IMAGE_SIZE = "60px";

const Header = ({ user }: HeaderProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <CommonImage
        src={user.avatar}
        alt="logo"
        w={IMAGE_SIZE}
        h={IMAGE_SIZE}
        isCircle
      />
      <WelcomeUser className="w-7/12 px-1">
        <p className="sub-p">Welcome back 👋</p>
        <h1>{user.name}</h1>
      </WelcomeUser>
      <CommonImage
        className="ml-auto"
        src={user.avatar}
        alt="avatar"
        w={IMAGE_SIZE}
        h={IMAGE_SIZE}
        isCircle
      />
    </div>
  );
};

export default Header;
