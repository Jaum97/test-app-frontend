import { createLinearGrad } from "src/utils/styles";
import styled from "styled-components";

import { colors } from "../styles/colors";

export const GradientSectionContainer = styled.div`
  background: ${createLinearGrad(colors.secondary, colors.primary)};
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  /* width: 100%; */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

// export const TeamFormationContainer = styled(GradientSectionContainer)`
// 	flex-direction: column;
// 	justify-content: space-between;
// 	margin: 16px 0px;
// 	min-height: 740px;
// 	padding: 16px 0px;
// `
