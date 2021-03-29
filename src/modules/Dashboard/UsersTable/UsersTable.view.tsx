import { useState } from "react";
import { User } from "src/modules/User/User.model";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CellContentWrapper,
  CellIcon,
  HeaderContentWrapper,
  TableBody,
  TableBodyRow,
  TableCell,
  TableHeader,
  TableHeaderRow,
  TableWrapper,
} from "./UsersTable.styles";
import { IProps, ISortBy } from "./UsersTable.types";

function UsersTable(props: IProps): JSX.Element {
  const { users, editUser, removeUser } = props;

  const DEFAULT_SORTING: ISortBy = {
    header: "name",
    order: "asc",
  };

  const [sortBy, setSortBy] = useState(DEFAULT_SORTING);
  const [list, setList] = useState(users);

  const sortFn = (a: User, b: User) => {
    const { header, order } = sortBy;

    const first = order === "asc" ? a : b;
    const second = order === "asc" ? b : a;

    return first[header].localeCompare(second[header]);
  };

  const sortRowsBy = (field: ISortBy["header"]) => () => {
    const { header, order: oldOrder } = sortBy;

    const shouldChangeOrder = header === field;

    if (shouldChangeOrder) {
      const order = oldOrder === "asc" ? "desc" : "asc";

      setSortBy((s) => ({ ...s, order }));

      return;
    }

    setSortBy({ header: field, order: "asc" });
  };

  const getIcon = (field: ISortBy["header"]) => {
    const { header, order } = sortBy;

    const isBeignSorted = header === field;

    if (!isBeignSorted) return "sort";

    return order === "asc" ? "sort-up" : "sort-down";
  };

  const remove = (item: User) => () => {
    const { id } = item;

    setList((l) => l.filter((t) => t.id !== id));

    removeUser(id)();
  };

  return (
    <TableWrapper>
      <thead>
        <TableHeaderRow>
          <TableHeader onClick={sortRowsBy("name")}>
            <HeaderContentWrapper>
              {"Name"}
              <FontAwesomeIcon icon={getIcon("name")} />
            </HeaderContentWrapper>
          </TableHeader>
          <TableHeader onClick={sortRowsBy("email")}>
            <HeaderContentWrapper>
              {"Email"}
              <FontAwesomeIcon icon={getIcon("email")} />
            </HeaderContentWrapper>
          </TableHeader>
        </TableHeaderRow>
      </thead>
      <TableBody>
        {list.sort(sortFn).map((item, i) => (
          <TableBodyRow key={i}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <CellContentWrapper desc={Boolean(item.name)}>
                <div>
                  <CellIcon
                    onClick={remove(item)}
                    icon="trash"
                    data-tip="Delete"
                  />
                  {/* <CellIcon onClick={share} icon="share-alt" data-tip="Share" /> */}
                  <CellIcon
                    onClick={editUser(item.id)}
                    icon="pencil-alt"
                    data-tip="Edit"
                  />
                </div>
              </CellContentWrapper>
            </TableCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
}

export default UsersTable;
