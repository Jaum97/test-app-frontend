import styled from "styled-components";
import { colors } from "../styles/colors";
import { Row } from "../styles/grid";

import { IInputStyledProps } from "./CreateUser.types";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

export const Content = styled(Row)`
  justify-content: center;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  margin: 0px 16px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  padding: 16px 0px;
`;

export const SquadInfoContainer = styled(RowContainer)`
  @media (max-width: 992px) {
    flex-direction: row-reverse;
    width: auto;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const TeamInfoContainer = styled(RowContainer)`
  @media (max-width: 992px) {
    flex-direction: row;
    width: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 100%; */
  @media (max-width: 560px) {
    width: auto;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 8px;

  padding: 0px 64px;

  @media (max-width: 768px) {
    max-width: 80%;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    &:first-child {
      padding-left: 8rem;
    }
    &:last-child {
      padding-right: 8rem;
    }
  }
`;

export const Title = styled.h1`
  color: ${colors.grey};
  font-size: 24px;
`;

export const InputContainer = styled.div`
  margin: 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;




export const Spacer = styled.div`
  width: 32px;
`;

export const InputTitle = styled.h2<IInputStyledProps>`
  color: ${({ invalid: i }) => (i ? colors.secondary : colors.darkGrey)};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled.input<IInputStyledProps>`
  padding: 6px 12px;
  width: 100%;
  border: solid 1px ${({ invalid: i }) => (i ? colors.secondary : "#d1d1d1")};
  color: #d1d1d1;
  border-radius: 3px;
  &:valid {
    color: ${colors.darkGrey};
  }
  @media (max-width: 560px) {
    padding: 6px 0px;
  }
`;
