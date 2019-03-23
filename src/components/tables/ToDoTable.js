import React from "react";
import RoundedButton from "../customMaterialComponents/RoundedButton";
import EnhancedTableHead from "./EnhancedTableHead";
import {
  Typography,
  Tooltip,
  Zoom,
  Badge,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";

const buttonStyle = {
  marginTop: 10,
  marginBottom: 10
};

const buttonStyle2 = {
  marginRight: 10,
  left: 20
};

const badgeStyle = {
  left: -20
};
const removePaddingLeft = {
  paddingLeft: 0
};

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
  selected,
  originalOffered,
  //functions
  handleMessageOpen,
  handleDoneClick,
  handleSelectAllClick,
  handleRequestSort,
  handleCheckClick
}) => (
  <div class="table">
    <div>
      <Table aria-labelledby="tableTitle">
        <EnhancedTableHead
          numSelected={selected.length}
          rows={rows}
          order={order}
          orderBy={orderBy}
          // onSelectAllClick={(event) =>  handleSelectAllClick(event) }
          rowCount={data.length}
          onRequestSort={(event, property) =>
            handleRequestSort(event, property)
          }
        />
        <TableBody>
          {stableSort(data, getSorting(order, orderBy)).map((n, index) => {
            const isItemSelected = selected.indexOf(n.id) !== -1;
            return (
              <TableRow
                hover
                key={n.id}
                // onClick={event => handleClick(event, n.id)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                // selected={ isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    style={removePaddingLeft}
                    checked={isItemSelected}
                    onClick={event => handleCheckClick(event, n.id)}
                  />
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  <RoundedButton
                    circled
                    style={{ ...buttonStyle, ...removePaddingLeft }}
                    variant={n.done ? "contained" : "outlined"}
                    color={n.done ? "secondary" : "primary"}
                    onClick={event => handleDoneClick(event, n)}
                  >
                    <i class="material-icons ">check</i>
                  </RoundedButton>
                </TableCell>
                <TableCell>
                  <Typography color="primary">
                    {" "}
                    {n.code} / {n.name}{" "}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{n.requested}</Typography>
                </TableCell>
                <TableCell>
                  <Typography noWrap>
                    {n.sectionB > originalOffered[n.id - 1].sectionA
                      ? "Add " +
                        (n.sectionA - originalOffered[n.id - 1].sectionA) +
                        " sections."
                      : "Remove " +
                        (originalOffered[n.id - 1].sectionA - n.sectionA) +
                        " sections."}
                  </Typography>
                </TableCell>
                <TableCell>
                  <div class="todo-type-icon-wrapper">
                    <Tooltip
                      style={removePaddingLeft}
                      title={
                        n.type === "Addition"
                          ? "Reduced seats offered this term have made this materially optional and historically underfilled course an Addition Candidate"
                          : "Ongoing over-supply of seats in this course have led to low historical fill rates and section Efficiency Candidate(s)"
                      }
                      TransitionComponent={Zoom}
                    >
                      <div>
                        <i class="material-icons">info_outline</i>
                      </div>
                    </Tooltip>
                    <Typography noWrap>
                      {n.sectionB > originalOffered[n.id - 1].sectionA
                        ? "Addition Candidate"
                        : "Reduction Candidate"}{" "}
                    </Typography>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    style={badgeStyle}
                    color="secondary"
                    badgeContent={Math.floor(Math.random() * 5)}
                  >
                    <RoundedButton
                      style={buttonStyle2}
                      variant="outlined"
                      circled
                      color="primary"
                      onClick={handleMessageOpen}
                    >
                      <i class="material-icons material-icons-primary">
                        comment
                      </i>
                    </RoundedButton>
                  </Badge>
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
  </div>
);

export default SimpleTable;
