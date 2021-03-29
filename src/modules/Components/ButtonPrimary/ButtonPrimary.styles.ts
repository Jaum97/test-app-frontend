import { colors } from "src/modules/styles/colors";
import { createLinearGrad } from "src/utils/styles";
import styled from "styled-components";

import { IProps } from "./ButtonPrimary.types";

export const Button = styled.button<IProps>`
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 500;
  padding: 12px 48px;
  border: none;
  background: ${({ gradient: g }) =>
    g
      ? createLinearGrad(
          colors.alternatePrimary,
          colors.alternateSecondary + " 65%"
        )
      : colors.primary};
  min-height: 48px;
  outline: 0;
  object-fit: contain;
  border-radius: 28px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: all 0.3;
  &:hover {
    &:not([disabled]) {
      opacity: 0.8;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    background: ${colors.lightGrey};
    color: ${colors.white};
  }
`;

const S = {
  Button,
};

export default S;
