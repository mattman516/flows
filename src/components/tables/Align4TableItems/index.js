import React from "react";
import styled from "styled-components";
import {
  Zoom,
  Typography,
  TableRow,
  Tooltip,
  TableCell,
  Hidden,
  withStyles
} from "@material-ui/core";

// import StatusButtons2 from "./StatusButtons2";
import StatusButtons1 from "./StatusButtons1";

import ArrowForward from "@material-ui/icons/ArrowForward";
import TrendUp from "@material-ui/icons/TrendingUp";
import TrendDown from "@material-ui/icons/TrendingDown";
import CommentIcon from "@material-ui/icons/Comment";
import { StyledLink } from "../../customMaterialComponents/StyledLink";
import Spinner from "./Spinner";
import MobileItem from "./MobileItem";

const TitleTypography = withStyles({
  root: {
    maxWidth: "30vw"
  }
})(Typography);

const CellRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--dark-grey);
  * {
    padding: 0px 2px;
  }
`;

const AdditionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #89b14b;
  color: var(--white);
  border-radius: 3px;
  width: 20px;
  height: 20px;
  font-size: 12pt;
`;
const ReductionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff5521;
  color: var(--white);
  border-radius: 3px;
  width: 20px;
  height: 20px;
  font-size: 12pt;
`;
const CommentWrapper = styled.div`
  margin-right: 10px;
  margin-left: 0px;
  font-size: 12pt;
  color: var(--highlight-color);
`;
const Addition = () => (
  <AdditionWrapper>
    <Tooltip
      title="Reduced seats offered this term have made this materially optional and historically underfilled course an Addition Candidate"
      TransitionComponent={Zoom}
    >
      <TrendUp fontSize="inherit" />
    </Tooltip>
  </AdditionWrapper>
);
const Reduction = () => (
  <ReductionWrapper>
    <Tooltip
      title="Ongoing over-supply of seats in this course have led to low historical fill rates and section Efficiency Candidate(s)"
      TransitionComponent={Zoom}
    >
      <TrendDown fontSize="inherit" />
    </Tooltip>
  </ReductionWrapper>
);
const Comment = () => (
  <CommentWrapper>
    <Tooltip title="There are new messages!" TransitionComponent={Zoom}>
      <CommentIcon fontSize="small" />
    </Tooltip>
  </CommentWrapper>
);

export const LineItem = ({
  item,
  candidateType,
  isItemSelected,
  changed,
  handleValueChange,
  // handleCheckClick,
  handleCourseOpen,
  handleStateChange,
  handleResetValue
}) => (
  <TableRow
    hover
    key={item.id}
    role="checkbox"
    aria-checked={isItemSelected}
    tabIndex={-1}
    selected={isItemSelected}
  >
    {/* <TableCell padding="none">
      <Checkbox
        checked={isItemSelected}
        onClick={event => handleCheckClick(event, item.id)}
      />
    </TableCell> */}
    <TableCell padding="none">
      {candidateType === "Addition Candidate" ? <Addition /> : <Reduction />}
    </TableCell>
    <TableCell padding="none">
      <CellRow>
        {/* <Badge
          invisible={item.messages.length === 0}
          badgeContent={<CommentIcon fontSize="inherit" color="primary"/>}
        > */}
        <StyledLink to={"/align4/Course/" + item.id}>
          <TitleTypography
            color="primary"
            noWrap
            onClick={event => handleCourseOpen && handleCourseOpen(event, item)}
          >
            {item.code} / {item.name}
          </TitleTypography>
        </StyledLink>
        {/* </Badge> */}
        {item.messages > 0 && <Comment />}
      </CellRow>
    </TableCell>
    <TableCell padding="none">
      <CellRow>
        <Typography color="inherit">{item.seatAOriginal} </Typography>
        <ArrowForward color="primary" fontSize="small" />
        <Typography color="primary">
          <strong>{item.seatB}</strong>
        </Typography>
      </CellRow>
    </TableCell>
    <TableCell padding="none">
      <CellRow>
        <Typography color="inherit">{item.sectionAOriginal} </Typography>
        <ArrowForward color="primary" fontSize="small" />
        <Typography color="primary">
          <strong>{item.sectionB}</strong>
        </Typography>
      </CellRow>
    </TableCell>
    <TableCell padding="none">
      <Spinner
        item={item}
        handleValueChange={handleValueChange}
        changed={changed}
      />
    </TableCell>
    <TableCell padding="none">
      <StatusButtons1 item={item} handleStateChange={handleStateChange} />
    </TableCell>
  </TableRow>
);

export const LineItem1 = ({ item }) => <div>{item.code}</div>;
