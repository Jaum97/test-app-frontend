import { ButtonPrimary } from "../Components/ButtonPrimary";
import { WhiteSection } from "../Components/WhiteSection";
import {
  ButtonWrapper,
  Center,
  ColumnContainer,
  Content,
  Input,
  InputContainer,
  InputTitle,
  UserInfoContainer,
  Wrapper,
} from "./CreateUser.styles";
import { IViewProps } from "./CreateUser.types";

function CreateUser(props: IViewProps): JSX.Element {
  const { isEdit, inputsWithError, user, saveUser, updateUser } = props;

  const isInvalid = (x: string) => inputsWithError.includes(x);

  const prefix = isEdit ? "Editing" : "Create a new";

  const title = `${prefix} user${isEdit ? `: ${user.name}` : ""}`;

  return (
    <Content>
      <Wrapper>
        <WhiteSection title={title}>
          <UserInfoContainer>
            <ColumnContainer>
              <Center>
                <InputContainer>
                  <InputTitle invalid={isInvalid("name")}>
                    {"User name"}
                  </InputTitle>
                  <Input
                    invalid={isInvalid("name")}
                    onChange={updateUser("name")}
                    placeholder="Insert username"
                    value={user.name}
                  />
                </InputContainer>
              </Center>
              <Center>
                <InputContainer>
                  <InputTitle invalid={isInvalid("email")}>
                    {"Email"}
                  </InputTitle>
                  <Input
                    invalid={isInvalid("email")}
                    onChange={updateUser("email")}
                    placeholder="Insert email"
                    value={user.email}
                  />
                </InputContainer>
              </Center>
              <Center>
                <InputContainer>
                  <InputTitle invalid={isInvalid("password")}>
                    {"Password"}
                  </InputTitle>
                  <Input
                    invalid={isInvalid("password")}
                    onChange={updateUser("password")}
                    placeholder={`${isEdit ? "New" : "Insert"} password`}
                    value={user.password}
                  />
                </InputContainer>
              </Center>
            </ColumnContainer>
          </UserInfoContainer>
          <ButtonWrapper>
            <ButtonPrimary onClick={saveUser}>SAVE</ButtonPrimary>
          </ButtonWrapper>
        </WhiteSection>
      </Wrapper>
    </Content>
  );
}

export default CreateUser;
