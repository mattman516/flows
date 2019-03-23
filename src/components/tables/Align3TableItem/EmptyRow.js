import React from "react";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const EmptyRowWrapper = styled.div`
  background-color: #eee;
  padding: 10px;
  -moz-box-shadow: inset 0 1px 5px #ccc;
  -webkit-box-shadow: inset 0 1px 5px #ccc;
  box-shadow: inset 0 1px 8px #ccc;
  color: #aaa;
  text-align: center;
`;
const Border = styled.div`
  border: 1px dashed;
  border-radius: 5px;
  color: inherit;
  padding: 10px;
`;

export const EmptyRow = ({}) => (
    <EmptyRowWrapper>
      <Border>
        <Typography variant="label" color="inherit">
          NO ITEMS
        </Typography>
      </Border>
    </EmptyRowWrapper>
);
