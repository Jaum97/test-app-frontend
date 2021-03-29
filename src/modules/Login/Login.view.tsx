import { IViewProps } from "./Login.types";
import React, { useState } from "react";
import {
  ButtonWrapper,
  GradientSectionContainer,
  LoginBody,
  SingupWrapper,
} from "./Login.styles";
import { Column } from "../styles/grid";
import { Center } from "../styles/Styles.components";
import { WhiteSection } from "../Components/WhiteSection";
import { InputField } from "../Components/InputField";
import { ButtonPrimary } from "../Components/ButtonPrimary";
import { pipe, path, curry, omit } from "ramda";
import { attemptLogin } from "./Login.service";
import { useHistory } from "react-router-dom";
import routesEnum from "../routes/enum";
import { useDispatch } from "react-redux";
import { TokenActions } from "src/store/ducks/token";
import { UserActions } from "src/store/ducks/user";
import { displayError } from "src/utils/cogoToast";

function Login(props: IViewProps): JSX.Element {
  // eslint-disable-next-line no-empty-pattern
  const {
    updateLogin,
    login,
    updatePassword,
    password,
    tryLogin,
    signup,
  } = props;

  return (
    <GradientSectionContainer>
      {" "}
      <Center>
        <Column lg="12">
          <WhiteSection title="Login to continue!">
            <LoginBody>
              <InputField
                id="login"
                label="Username or Email"
                onChange={updateLogin}
                secondary
                value={login}
              />
              <InputField
                id="password"
                type="password"
                label="Password"
                onChange={updatePassword}
                secondary
                value={password}
              />
              <ButtonWrapper>
                <ButtonPrimary gradient onClick={tryLogin}>
                  LOGIN
                </ButtonPrimary>
              </ButtonWrapper>
              <SingupWrapper onClick={signup}>Signup</SingupWrapper>
            </LoginBody>
          </WhiteSection>
        </Column>
      </Center>
    </GradientSectionContainer>
  );
}

export default Login;
