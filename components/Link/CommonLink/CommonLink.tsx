import React from "react";
import { CommonLinkStyle } from "./CommonLink.styled";

type CommonLinkProps = {
  label?: string;
  onClick?: () => void;
};

const CommonLink = ({ label, onClick }: CommonLinkProps) => {
  return (
    <CommonLinkStyle className="small-font" onClick={onClick}>
      {label}
    </CommonLinkStyle>
  );
};

export default CommonLink;
