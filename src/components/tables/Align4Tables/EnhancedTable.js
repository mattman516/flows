import React from "react";
import styled from "styled-components";
import EnhancedTableHead from "./EnhancedTableHead";
import { LineItem } from "../Align4TableItems";
import MobileItem from "../Align4TableItems/MobileItem";
// import { Container, Draggable } from "react-smooth-dnd";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Hidden
} from "@material-ui/core";

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
  handleDragEnd,
  handleStateChange
}) => (
  <div class="table">
    <Table aria-labelledby="tableTitle">
      <Hidden xsDown>
        <EnhancedTableHead
          numSelected={selected.length}
          rows={rows}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={event => handleSelectAllClick(event)}
          rowCount={data.length}
          onRequestSort={(event, property) =>
            handleRequestSort(event, property)
          }
        />
        <TableBody>
          {data.length > 0 &&
            stableSort(data, getSorting(order, orderBy)).map((n, index) => {
              const isItemSelected = selected.indexOf(n.id) !== -1;
              const originalItemVals = originalOffered.find(x => x.id === n.id);
              const candidateType =
                originalItemVals["sectionA"] > n["sectionB"]
                  ? "Reduction Candidate"
                  : "Addition Candidate";
              return (
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
                  handleStateChange={handleStateChange}
                />
              );
            })}
        </TableBody>
      </Hidden>
      <Hidden smUp>
        <TableBody>
          {data.length > 0 &&
            stableSort(data, getSorting(order, orderBy)).map((n, index) => {
              const isItemSelected = selected.indexOf(n.id) !== -1;
              const originalItemVals = originalOffered.find(x => x.id === n.id);
              const candidateType =
                originalItemVals["sectionA"] > n["sectionB"]
                  ? "Reduction Candidate"
                  : "Addition Candidate";
              return (
                <MobileItem
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
                  handleStateChange={handleStateChange}
                />
              );
            })}
        </TableBody>
      </Hidden>
    </Table>
  </div>
);

export default EnhancedTable;
