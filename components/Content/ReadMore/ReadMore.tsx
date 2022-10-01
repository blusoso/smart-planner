import React, { useState } from "react";
import { ReadMoreStyle } from "./ReadMore.styled";

type ReadMoreProps = {
  children: string;
};

const ReadMore = ({ children }: ReadMoreProps) => {
  const content: string = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const sliceContent = (content: string) => {
    return content.slice(0, 150);
  };

  return (
    <>
      {isReadMore ? sliceContent(content) : content}
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
    </>
  );
};

export default ReadMore;
