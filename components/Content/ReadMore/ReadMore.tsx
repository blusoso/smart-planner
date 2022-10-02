import React, { useState } from "react";
import { ReadMoreStyle } from "./ReadMore.styled";

type ReadMoreProps = {
  children: string;
};

const LIMIT_STRING = 150;

const ReadMore = ({ children }: ReadMoreProps) => {
  const content: string = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const sliceContent = (content: string) => {
    return content.slice(0, LIMIT_STRING);
  };

  const renderContent = () => {
    return isReadMore ? sliceContent(content) : content;
  };

  const renderReadMore = () => {
    return (
      <ReadMoreStyle onClick={toggleReadMore}>
        {isReadMore ? (
          <>
            <span>...</span>
            <span>read more</span>
          </>
        ) : (
          <span>show less</span>
        )}
      </ReadMoreStyle>
    );
  };

  return (
    <>
      {renderContent()}
      {content.length > LIMIT_STRING && renderReadMore()}
    </>
  );
};

export default ReadMore;
