import React from "react";
import RoundedButton from "../../customMaterialComponents/RoundedButton";
import Spinner from "./Spinner";
import styled from "styled-components";
import { StyledLink } from "../../customMaterialComponents/StyledLink";
import {
  Typography,
  Tooltip,
  TableRow,
  Badge,
  Zoom,
  IconButton,
  withStyles,
  Divider,
  List
} from "@material-ui/core";
import TrendUp from "@material-ui/icons/TrendingUp";
import TrendDown from "@material-ui/icons/TrendingDown";
import ArrowForward from "@material-ui/icons/ArrowForward";
import StatusButtons1 from "./StatusButtons1";

const OutterWrapper = styled.div`
  max-width: 90vw;
`;

const TrendCodeState = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TrendCode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--highlight-color);
`;

const TitleContainer = styled.div`
  width: 95vw;
  color: var(--highlight-color);
  padding-top: 20px;
`;

const ListItem = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--highlight-color);
  padding-bottom: 10px;
`;

const CellRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--dark-grey);
  * {
    padding: 0px 2px;
  }
`;
const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--dark-grey);
  * {
    padding: 2px 0px;
  }
  margin-right: 10px;
`;

const CellTypeLabel = withStyles({
  root: {
    color: "#555",
    fontSize: 9
  }
})(Typography);

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
  margin-right: 10px;
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
  margin-right: 10px;
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

const ItemHeader = ({
  item,
  key,
  isItemSelected,
  candidateType,
  handleCheckClick,
  handleResetValue,
  handleCourseOpen,
  handleValueChange,
  handleStateChange,
  // handleMessageOpen,
  changed
}) => (
  <TableRow key={key}>
    <TitleContainer>
      <TrendCodeState>
        <TrendCode
          onClick={event => handleCourseOpen && handleCourseOpen(event, item)}
        >
          {candidateType === "Addition Candidate" ? (
            <Addition />
          ) : (
            <Reduction />
          )}
          <Typography
            variant="h5"
            color="inherit"
            onClick={event => handleCourseOpen && handleCourseOpen(event, item)}
            noWrap
          >
            <StyledLink to={"/align4/Course/" + item.id}>
              {item.code}
            </StyledLink>
          </Typography>
        </TrendCode>
        <StatusButtons1 item={item} handleStateChange={handleStateChange} />
      </TrendCodeState>
      <Typography
        noWrap
        variant="h6"
        color="inherit"
        onClick={event => handleCourseOpen && handleCourseOpen(event, item)}
      >
        <StyledLink to={"/align4/Course/" + item.id}>{item.name}</StyledLink>
      </Typography>
    </TitleContainer>
    <ListItem>
      <Cell>
        <CellRow>
          <Typography color="inherit">{item.seatAOriginal} </Typography>
          <ArrowForward color="primary" fontSize="small" />
          <Typography color="primary">
            <strong>{item.seatB}</strong>
          </Typography>
        </CellRow>
        <CellTypeLabel variant="label" color="#555">
          Seat Demand
        </CellTypeLabel>
      </Cell>
      <Cell>
        <CellRow>
          <Typography color="inherit">{item.sectionAOriginal} </Typography>
          <ArrowForward color="primary" fontSize="small" />
          <Typography color="primary">
            <strong>{item.sectionB}</strong>
          </Typography>
        </CellRow>
        <CellTypeLabel variant="label" color="#555">
          Section Demand
        </CellTypeLabel>
      </Cell>
      <Spinner
        item={item}
        handleValueChange={handleValueChange}
        changed={changed}
      />
    </ListItem>
    <ListItem />
    <Divider />
  </TableRow>
);

export default ItemHeader;
