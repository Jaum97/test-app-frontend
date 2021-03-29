import { IViewProps } from "./Dashboard.types";
import React from "react";
import { Placeholder } from "./Dashboard.styles";
import UsersTable from "./UsersTable/UsersTable.view";
import { WhiteSection } from "../Components/WhiteSection";
import {
  Content,
  Wrapper,
  TeamInfoContainer,
  ColumnContainer,
  Center,
} from "../CreateUser/CreateUser.styles";

function Dashboard(props: IViewProps): JSX.Element {
  const { users, editUser, addNewUser, removeUser } = props;

  return (
    <Content>
      <Wrapper>
        <WhiteSection title="Users" onClick={addNewUser}>
          <TeamInfoContainer>
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
          </TeamInfoContainer>
        </WhiteSection>
      </Wrapper>
    </Content>
  );
}

export default Dashboard;
