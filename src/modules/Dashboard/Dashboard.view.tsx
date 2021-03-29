import React from "react";

import { WhiteSection } from "../Components/WhiteSection";
import {
  Center,
  ColumnContainer,
  Content,
  UserInfoContainer,
  Wrapper,
} from "../CreateUser/CreateUser.styles";
import { Placeholder } from "./Dashboard.styles";
import { IViewProps } from "./Dashboard.types";
import UsersTable from "./UsersTable/UsersTable.view";

function Dashboard(props: IViewProps): JSX.Element {
  const { users, editUser, addNewUser, removeUser } = props;

  return (
    <Content>
      <Wrapper>
        <WhiteSection title="Users" onClick={addNewUser}>
          <UserInfoContainer>
            <ColumnContainer>
              <Center>
                {users.length ? (
                  <UsersTable
                    users={users}
                    editUser={editUser}
                    removeUser={removeUser}
                  />
                ) : (
                  <Placeholder>{"No users registred yet"}</Placeholder>
                )}
              </Center>
            </ColumnContainer>
          </UserInfoContainer>
        </WhiteSection>
      </Wrapper>
    </Content>
  );
}

export default Dashboard;
