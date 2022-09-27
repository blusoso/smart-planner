import React from "react";
import { Menu, MenuBarContainer, PlusCircle } from "./MenuBar.styled";
import { ReactSVG } from "react-svg";
import CommonImage from "../CommonImage/CommonImage";
import { UserInfo } from "../Header/Header";

export type MenuBarProps = {
  user: UserInfo;
};

const ICON_SIZE = "28px";

const MenuBar = ({ user }: MenuBarProps) => {
  const onIconClick = () => {
    console.log("first");
  };

  const MENU_LIST = [
    {
      name: "home",
      icon: <ReactSVG src="/assets/icons/home-outline.svg" />,
      isActive: true,
      isMain: false,
      onClick: onIconClick(),
    },
    {
      name: "map",
      icon: <ReactSVG src="/assets/icons/map-outline.svg" />,
      isActive: false,
      isMain: false,
      onClick: onIconClick(),
    },
    {
      name: "plus",
      icon: (
        <PlusCircle>
          <ReactSVG src="/assets/icons/plus.svg" />
        </PlusCircle>
      ),
      isActive: false,
      isMain: true,
      onClick: onIconClick(),
    },
    {
      name: "bell",
      icon: <ReactSVG src="/assets/icons/bell-outline.svg" />,
      isActive: false,
      isMain: false,
      onClick: onIconClick(),
    },
    {
      name: "avatar",
      icon: (
        <CommonImage
          src={user.avatar}
          alt="avatar"
          w="38px"
          h="38px"
          isCircle
        />
      ),
      isActive: false,
      isMain: false,
      onClick: onIconClick(),
    },
  ];

  return (
    <MenuBarContainer className="grid grid-cols-5">
      {MENU_LIST.map((menu) => (
        <Menu
          key={menu.name}
          iconSize={ICON_SIZE}
          isActive={menu.isActive}
          isMain={menu.isMain}
        >
          {menu.icon}
          {menu.isActive && (
            <ReactSVG
              className="icon-pointer-active"
              src="/assets/icons/triangle.svg"
            />
          )}
        </Menu>
      ))}
    </MenuBarContainer>
  );
};

export default MenuBar;
