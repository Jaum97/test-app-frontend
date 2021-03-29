import { createLinearGrad } from "src/utils/styles";
import styled from "styled-components";

import { colors } from "../../styles/colors";

export const SectionContainer = styled.div`
  align-items: center;
  background: ${colors.white};
  border-radius: 12px;
  box-shadow: 2px 2px 4px #00000015;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* margin: 16px; */
  padding: 16px;
  /* width: 100%; */
`;

export const SectionHeader = styled.div`
  align-items: center;
  border-bottom: 2px solid ${colors.daisy};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 16px;
  width: 100%;
`;

export const SectionTitle = styled.h1`
  color: #0e598f;
  font-size: 24px;
  padding-bottom: 16px;
  font-weight: 700;
`;

export const AddUserButton = styled.div`
  align-items: center;
  background: ${createLinearGrad(
    colors.secondary,
    colors.primary + " 65%",
    "to bottom"
  )};
  border-radius: 6px;
  box-shadow: 0px 2px 4px ${colors.secondary};
  display: flex;
  flex-direction: column;
  height: 36px;
  justify-content: center;
  margin-bottom: 16px;
  width: 36px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const UserButtonText = styled.p`
  color: white;
  font-size: 24px;
`;
