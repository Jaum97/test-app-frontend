import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import routesEnum from "src/modules/routes/enum";
import { TokenActions } from "src/store/ducks/token";
import { UserActions } from "src/store/ducks/user";
import { UsersActions } from "src/store/ducks/users";
import { UserToEditActions } from "src/store/ducks/userToEdit";

import {
  Container,
  ContainerAppTitle,
  ImageHolder,
  LogoWrapper,
  PageHeader,
  Title,
  UserAvatar,
  UserAvatarContainer,
  UserName,
  Wrapper,
} from "./Header.styles";

const logoSrc = require("../../../assets/logo.png");

function Header(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useTypedSelector(["user"]);

  const logout = () => {
    dispatch(UserActions.resetUser());
    dispatch(TokenActions.resetTokens());
    dispatch(UsersActions.resetUsers());
    dispatch(UserToEditActions.resetUserToEdit());

    history.push(routesEnum.LOGIN);
  };

  return (
    <Wrapper>
      <PageHeader>
        <ContainerAppTitle>
          <LogoWrapper onClick={logout}>
            <ImageHolder src={logoSrc?.default} alt="logo" />
          </LogoWrapper>
          <Title>{"Users Management Tool"}</Title>
        </ContainerAppTitle>
        <Container>
          <UserName>{user.name}</UserName>
          <UserAvatarContainer>
            <UserAvatar title=" " round name={user.name} size="56" />
          </UserAvatarContainer>
        </Container>
      </PageHeader>
    </Wrapper>
  );
}

export default Header;
