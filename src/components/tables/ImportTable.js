import React from "react";
import EnhancedTableHead from "./EnhancedTableHead";
import ProgressBar from "./tableComponents/ProgressBar";
import { Link } from "react-router-dom";

import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  Checkbox,
  Typography,
  LinearProgress
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

const ImportTable = ({
  rows,
  order,
  orderBy,
  data,
  page,
  rowsPerPage,
  selected,
  //functions
  handleClick,
  handleSelectAllClick,
  handleRequestSort
}) => (
  <div class="table">
    <div>
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
            .map(n => {
              const isItemSelected = selected.indexOf(n.id) !== -1;
              return (
                <TableRow
                  hover
                  key={n.id}
                  onClick={event => handleClick(event, n.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isItemSelected} />
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    <Typography color="primary">
                      <Link to={"/settings/imports/addedit/" + n.id}>
                        {n.name}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{n.config}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{n.date}</Typography>
                  </TableCell>
                  <TableCell>
                    <ProgressBar completed={n.completed} buffer={n.buffer} />
                  </TableCell>
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
    {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={ data.length}
            rowsPerPage={ rowsPerPage}
            page={ page}
            backIconButtonProps={{
                'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
                'aria-label': 'Next Page',
            }}
            onChangePage={(event, page) =>  handleChangePage(event, page)}
            onChangeRowsPerPage={(e) => handleChangeRowsPerPage(e)}
        /> */}
  </div>
);

export default ImportTable;
