import { ScrollHorizontal } from "./../../Mixin/Mixin.styled";
import styled from "styled-components";

export const SelectCategoryContainer = styled(ScrollHorizontal)`
  margin-right: -1.2em;
  position: relative;
`;

export const GradientOverlay = styled.div`
  z-index: 2;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
`;
