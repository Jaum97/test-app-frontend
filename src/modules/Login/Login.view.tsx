import { ButtonPrimary } from "../Components/ButtonPrimary";
import { InputField } from "../Components/InputField";
import { WhiteSection } from "../Components/WhiteSection";

import { Column } from "../styles/grid";
import { Center } from "../styles/Styles.components";

import {
  ButtonWrapper,
  GradientSectionContainer,
  LoginBody,
  SingupWrapper,
} from "./Login.styles";
import { IViewProps } from "./Login.types";

function Login(props: IViewProps): JSX.Element {
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
