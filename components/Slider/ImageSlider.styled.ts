import styled from "styled-components";

type FullBackgroundProps = {
  img: string;
  height?: string;
};

export const FullBackground = styled.div<FullBackgroundProps>`
  background-image: ${({ img }) => `url("${img}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;

  width: 100%;
  height: ${({ height }) => height || "400px"};
`;

export const ArrowButton = styled.button`
  background: ${({ theme }) => theme.lightGreenColor} !important;
  opacity: 0.6 !important;

  &:active {
    opacity: 0.8 !important;
  }
`;

export const SlidePagination = styled.ul`
  bottom: 2.3em;
`;
