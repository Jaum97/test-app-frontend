import { propEq } from "ramda";
import { createElement, useEffect } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { UsersActions } from "src/store/ducks/users";
import { UserToEditActions } from "src/store/ducks/userToEdit";
import { displayError, displaySuccess } from "src/utils/cogoToast";

import routesEnum from "../routes/enum";
import { User } from "../User/User.model";
import { deleteUser, fetchUsers } from "./Dashboard.services";
import { IViewProps } from "./Dashboard.types";
import View from "./Dashboard.view";

const appendLocalId = (u: User) => ({ ...u, id: u._id });

function DashboardContainer(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();

  const { removeOneUser: RemoveUserFromStore } = UsersActions;

  const { users, user } = useTypedSelector(["users", "user"], shallowEqual);

  console.log({ users });

  const getUsers = () => {
    if (!user?._id) return;

    (async () => {
      const users = await fetchUsers(user._id);

      if (!users?.length) return;

      const payload = users.map(appendLocalId);

      dispatch(UsersActions.setUsers(payload));
    })();
  };

  const addNewUser = () => {
    dispatch(UserToEditActions.setUserToEdit(new User()));

    history.push(routesEnum.CREATE_USER);
  };

  const editUser = (id: string) => () => {
    const userToEdit = users.find(propEq("id", id));

    console.log({ userToEdit, id });

    if (!userToEdit) return;

    dispatch(UserToEditActions.setUserToEdit(userToEdit));

    history.push(routesEnum.CREATE_USER);
  };

  const removeUser = (id: string) => () => {
    const userToRemove = users.find((u) => u.id === id);

    if (!userToRemove) return displayError("Failed to delete user");
    (async () => {
      await deleteUser(id);

      displaySuccess("User deleted!");
    })();

    dispatch(RemoveUserFromStore(userToRemove));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getUsers, [user]);

  const viewProps: IViewProps = {
    users,
    editUser,
    addNewUser,
    removeUser,
  };

  return createElement(View, viewProps);
}

export default DashboardContainer;
