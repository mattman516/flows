import React from "react";
import styled from 'styled-components';
import {withStyles} from '@material-ui/core/styles'


import {
  TableSortLabel,
  TableHead,
  TableCell,
  TableRow,
  Checkbox,
  Tooltip
} from "@material-ui/core";

const TableHeaderWrapper = styled.div`
  font-weight: bold;
  letter-spacing: 2px;
`;



const styles = theme => ({
  root: {
    '&:hover': {
      color: theme.palette.primary.main
    },
    '&:focus': {
      color: theme.palette.primary.main
    }
  },
  active: {
    color: theme.palette.primary.main
  }
});

const CustomTableSortLabel = withStyles(styles)(TableSortLabel);

// const checkboxStyle = {
//   paddingLeft: 0
// };

const EnhancedTableHead = ({
  // onSelectAllClick,
  rows,
  order,
  orderBy,
  // numSelected,
  onRequestSort
}) => (
  <TableHead>
    <TableRow>
      {/* <TableCell padding="checkbox">
        <Checkbox
          style={checkboxStyle}
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={numSelected === rowCount}
          onChange={onSelectAllClick}
        />
      </TableCell> */}
      {rows.map(row => {
        return (
          <TableCell
            key={row.id}
            numeric={row.numeric}
            padding={row.disablePadding ? "none" : "default"}
            sortDirection={orderBy === row.id ? order : false}
          >
            <Tooltip
              title="Sort"
              placement={row.numeric ? "bottom-end" : "bottom-start"}
              enterDelay={300}
            >
              <CustomTableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={event => onRequestSort(event, row.id)}
              >
                <TableHeaderWrapper>{row.label}</TableHeaderWrapper>
              </CustomTableSortLabel>
            </Tooltip>
          </TableCell>
        );
      }, this)}
    </TableRow>
  </TableHead>
);

export default EnhancedTableHead;
