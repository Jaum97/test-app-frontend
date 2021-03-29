import { ButtonPrimary } from "../Components/ButtonPrimary";
import { InputField } from "../Components/InputField";
import { WhiteSection } from "../Components/WhiteSection";
import { Column } from "../styles/grid";
import { Center } from "../styles/Styles.components";
import {
  ButtonWrapper,
  GradientSectionContainer,
  LoginBody,
} from "./SignUp.styles";
import { IViewProps } from "./SignUp.types";

function Login(props: IViewProps): JSX.Element {
  const {
    username,
    email,
    password,
    updateUsername,
    updateEmail,
    updatePassword,
    createNewUser,
    inputsWithError,
  } = props;

  const isInvalid = (x: string) => inputsWithError.includes(x);

  return (
    <GradientSectionContainer>
      {" "}
      <Center>
        <Column lg="12">
          <WhiteSection title="Create your user">
            <LoginBody>
              <InputField
                id="username"
                hasError={isInvalid("username")}
                label="Username"
                onChange={updateUsername}
                secondary
                value={username}
              />
              <InputField
                id="email"
                hasError={isInvalid("email")}
                label="Email"
                onChange={updateEmail}
                secondary
                value={email}
              />
              <InputField
                id="password"
                hasError={isInvalid("password")}
                type="password"
                label="Password"
                onChange={updatePassword}
                secondary
                value={password}
              />
              <ButtonWrapper>
                <ButtonPrimary gradient onClick={createNewUser}>
                  CREATE
                </ButtonPrimary>
              </ButtonWrapper>
            </LoginBody>
          </WhiteSection>
        </Column>
      </Center>
    </GradientSectionContainer>
  );
}

export default Login;
