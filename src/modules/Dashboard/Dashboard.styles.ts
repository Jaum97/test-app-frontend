import styled from "styled-components";
import { colors } from "../styles/colors";

export const Placeholder = styled.div<{ height?: number }>`
  align-items: center;
  color: ${colors.darkGrey};
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: ${({ height: h }) => h || 120}px;
  justify-content: center;
  width: 100%;
`;
