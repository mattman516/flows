import React from "react";
import styled from "styled-components";
import EnhancedTableHead from "./EnhancedTableHead";
import LineItem  from "../../../apps/align3/containers/views/LineItemContainer";
import { EmptyRow } from "../Align3TableItem/EmptyRow";
import { Container, Draggable } from "react-smooth-dnd";

import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

const StyledDraggable = styled(Draggable)`
  width: 100%;
`;

const emptyRows = (rowsPerPage, data, page) => {
  return rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
};

const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

const getSorting = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
};

const EnhancedTable = ({
  id,
  rows,
  order,
  orderBy,
  data,
  originalOffered,
  page,
  rowsPerPage,
  selected,
  //functions
  handleCheckClick,
  handleCourseOpen,
  handleSelectAllClick,
  handleRequestSort,
  handleValueChange,
  handleMessageOpen,
  handleResetValue,
  handleDragEnd
}) => (
  <div class="table">
    <Table aria-labelledby="tableTitle">
      <EnhancedTableHead
        numSelected={selected.length}
        rows={rows}
        order={order}
        orderBy={orderBy}
        onSelectAllClick={event => handleSelectAllClick(event)}
        rowCount={data.length}
        onRequestSort={(event, property) => handleRequestSort(event, property)}
      />
      <TableBody>
        <Container
          groupName="col"
          onDrop={e => handleDragEnd(e,id)}
          onDragStart={e => console.log("drag started", e)}
          onDragEnd={e => console.log("drag end ", e)}
          onDragLeave={e => console.log("drag leave" + id, e)}
          onDragEnter={e => console.log("drag enter" + id, e)}
          getChildPayload={index => data[index]}
          dragClass="card-ghost"
        >
          {data.length > 0 &&
            stableSort(data, getSorting(order, orderBy)).map((n, index) => {
              const isItemSelected = selected.indexOf(n.id) !== -1;
              const originalItemVals = originalOffered.find(x => x.id === n.id);
              const candidateType =
                originalItemVals["sectionA"] > n["sectionB"]
                  ? "Reduction Candidate"
                  : "Addition Candidate";
              return (
                <Draggable>
                  <LineItem
                    key={index}
                    item={n}
                    handleCheckClick={handleCheckClick}
                    handleCourseOpen={handleCourseOpen}
                    isItemSelected={isItemSelected}
                    handleValueChange={handleValueChange}
                    changed={n.changed}
                    candidateType={candidateType}
                    handleMessageOpen={handleMessageOpen}
                    handleResetValue={handleResetValue}
                  />
                </Draggable>
              );
            })}
        </Container>
          {data.length === 0 && <EmptyRow />}
      </TableBody>
    </Table>
  </div>
);

export default EnhancedTable;
