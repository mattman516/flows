import React from "react";

import {
  TableSortLabel,
  TableHead,
  TableCell,
  TableRow,
  Checkbox,
  Tooltip
} from "@material-ui/core";

const checkboxStyle = {
  paddingLeft: 0
};

const EnhancedTableHead = ({
  onSelectAllClick,
  rows,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort
}) => (
  <TableHead>
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          style={checkboxStyle}
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={numSelected === rowCount}
          onChange={onSelectAllClick}
        />
      </TableCell>
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
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={event => onRequestSort(event, row.id)}
              >
                {row.label}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        );
      }, this)}
    </TableRow>
  </TableHead>
);

export default EnhancedTableHead;
