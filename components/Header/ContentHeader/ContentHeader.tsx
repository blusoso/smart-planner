import React from "react";

export type ContentHeaderProps = {
  title: string;
  link?: React.ReactNode;
  onClick?: () => void;
};

const ContentHeader = ({ title, link, onClick }: ContentHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <h2>{title}</h2>
      <div className="text-xs" onClick={onClick}>
        {link}
      </div>
    </div>
  );
};

export default ContentHeader;
