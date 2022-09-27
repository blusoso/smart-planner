import styled from "styled-components";

type CommonImageStyledProps = {
  borderRadius?: string;
  isCircle?: boolean;
  width?: string;
  height?: string;
};

export const CommonImageStyled = styled.img<CommonImageStyledProps>`
  border-radius: ${({ borderRadius, isCircle }) =>
    borderRadius || (isCircle && "100%")};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;
