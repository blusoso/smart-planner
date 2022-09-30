import React from "react";
import TabBar from "../TabBar/TabBar";

export const user = {
  name: "Sopita Jullaprasertsak",
  avatar: "/assets/images/avatar.png",
};

type LayoutProps = {
  children: JSX.Element;
  isTabBar?: boolean;
};

const Layout = ({ children, isTabBar = true }: LayoutProps) => {
  return (
    <>
      <main className="container mb-20">{children}</main>
      {isTabBar && <TabBar user={user} />}
    </>
  );
};

export default Layout;
