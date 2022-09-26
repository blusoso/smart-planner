import styled from "styled-components";

type CommonImageStyledProps = {
  borderRadius?: string;
  isCircle?: boolean;
};

export const CommonImageStyled = styled.img<CommonImageStyledProps>`
  border-radius: ${({ borderRadius, isCircle }) =>
    borderRadius || (isCircle && "100%")};
`;
