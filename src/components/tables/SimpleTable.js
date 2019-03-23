import React from "react";
import EnhancedTableHead from "./EnhancedTableHead";
import MobileTableRowColapse from "./tableComponents/MobileTableRowColapse";

import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  Checkbox,
  Typography,
  Hidden,
  List
} from "@material-ui/core";

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

const SimpleTable = ({
  rows,
  order,
  orderBy,
  data,
  page,
  rowsPerPage,
  selected,
  //functions
  // handleChangeRowsPerPage,
  // handleChangePage,
  handleClick,
  handleSelectAllClick,
  handleRequestSort
}) => (
  <div>
    <Hidden xsDown>
      <div class="table">
        <Table aria-labelledby="tableTitle">
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
            {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((n, key) => {
                const isItemSelected = selected.indexOf(n.id) !== -1;
                return (
                  <TableRow
                    hover
                    key={key}
                    onClick={event => handleClick(event, n.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                  >
                    <TableCell padding="none">
                      <Checkbox checked={isItemSelected} />
                    </TableCell>
                    {Object.keys(n).map(key => (
                      <TableCell>
                        <Typography>{n[key]}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            {((rowsPerPage, data, page) => emptyRows(rowsPerPage, data, page)) >
              0 && (
              <TableRow
                style={{
                  height:
                    49 *
                    ((rowsPerPage, data, page) =>
                      emptyRows(rowsPerPage, data, page))
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Hidden>
    <Hidden smUp>
      <div class="table">
        <List>
          {stableSort(data, getSorting(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((n, key) => {
              return <MobileTableRowColapse item={n} key={key} rowInfo={rows} />;
            })}
          {((rowsPerPage, data, page) => emptyRows(rowsPerPage, data, page)) >
            0 && (
            <TableRow
              style={{
                height:
                  49 *
                  ((rowsPerPage, data, page) =>
                    emptyRows(rowsPerPage, data, page))
              }}
            >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </List>
      </div>
    </Hidden>
  </div>
);

export default SimpleTable;
