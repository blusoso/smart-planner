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
    <>
      {/* <HeaderWrapper> */}
      <div className="flex flex-wrap gap-2">
        <CommonImage
          src={user.avatar}
          alt="logo"
          w={IMAGE_SIZE}
          h={IMAGE_SIZE}
          isCircle
        />
        <WelcomeUser className="w-7/12 px-2">
          <p>Welcome back 👋</p>
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
        {/* </HeaderWrapper> */}
      </div>
    </>
  );
};

export default Header;
