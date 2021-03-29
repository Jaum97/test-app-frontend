import { colors } from "src/modules/styles/colors";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeader = styled.th`
  color: #373837;
  cursor: pointer;
  font-size: 0.875em;
  justify-content: space-between;
  padding: 16px 16px 8px 16px;
  text-align: left;
`;

export const TableHeaderRow = styled.tr`
  ${TableHeader} {
    &:first-child {
      border-right: 2px solid #eeeeee;
    }
  }
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TableBody = styled.tbody``;

export const TableCell = styled.td`
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
  color: ${colors.darkGrey};
  font-size: 0.875rem;
  font-weight: 700;
  padding: 16px;
`;

export const CellContentWrapper = styled.div<{ desc: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ desc }) => (desc ? "space-between" : "flex-end")};
`;

export const CellIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 12px;
  opacity: 0%;
  padding-right: 16px;
`;

export const TableBodyRow = styled.tr`
  &:hover {
    background: #c1dfe290;
    border-radius: 8px;

    ${TableCell} {
      border-bottom: 1px solid transparent;
      color: #4c99b0;
      &:first-child {
        border-radius: 6px 0px 0px 6px;
      }
      &:last-child {
        border-radius: 0px 6px 6px 0px;
      }
      ${CellContentWrapper} {
        ${CellIcon} {
          opacity: 100%;
        }
      }
    }
  }
`;
