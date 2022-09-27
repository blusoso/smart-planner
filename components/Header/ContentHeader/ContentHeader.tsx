import React from "react";

export type ContentHeaderProps = {
  title: string;
  link?: React.ReactNode;
  onClick?: () => void;
};

const ContentHeader = ({ title, link, onClick }: ContentHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h2>{title}</h2>
      <div onClick={onClick}>{link}</div>
    </div>
  );
};

export default ContentHeader;
