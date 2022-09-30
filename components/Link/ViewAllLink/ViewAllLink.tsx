import React from "react";
import { ReactSVG } from "react-svg";
import { ViewAllLinkButton } from "./ViewAllLink.styled";

export type ViewAllLinkProps = {
  onClick?: () => void;
};

const ViewAllLink = ({ onClick }: ViewAllLinkProps) => {
  return (
    <ViewAllLinkButton
      className="small-font flex items-center"
      onClick={onClick}
    >
      <span className="mr-1">View All</span>
      <ReactSVG src="/assets/icons/arrow-forward.svg" />
    </ViewAllLinkButton>
  );
};

export default ViewAllLink;
