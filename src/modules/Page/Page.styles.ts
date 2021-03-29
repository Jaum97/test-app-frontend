import styled from "styled-components";
import { colors } from "../styles/colors";

const Main = styled.main`
  bottom: 40px;
  overflow-y: scroll;
  /* padding: 24px; */
  position: fixed;
  top: 78px;
  right: 0;
  left: 0;
  background-color: ${colors.daisy};
  width: 100%;
`;

const Footer = styled.footer`
  align-content: center;
  background-color: ${colors.lightGrey};
  bottom: 0;
  color: ${colors.darkGrey};
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  text-align: center;
`;

const S = {
  Main,
  Footer,
};

export default S;
