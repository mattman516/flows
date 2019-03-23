import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Print from "@material-ui/icons/Print";

// var linkStyle = { textDecoration: "none", color: "inherit" };

export const ResourceBorder = styled.div`
  border: 3px solid;
  border-color: ${props => (props.selected ? "#3590dc" : "#6c717b")}
  background-color: ${props => (props.selected ? "#3590dc" : "#ffffff")}
  border-radius: 4px;
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ResourceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70px;
  width: 50px;
  margin: auto;
`;

const ResourceCheck = withStyles({
  root: {
    verticalAlign: "middle",
    marginLeft: 30,
    padding: 0
  }
})(Checkbox);

const LabelType = withStyles({
  root: {
    fontSize: "9pt"
  }
})(Typography);

const WhiteType = withStyles({
  root: {
    color: "#fff"
  }
})(Typography);

const GreyType = withStyles({
  root: {
    color: "#6c717b"
  }
})(Typography);

const Resource = ({ resource, updateResources, selected }) => (
  <ResourceWrapper>
    <ResourceBorder selected={selected}>
      <FormControlLabel
        control={
          <ResourceCheck
            icon={
              <GreyType>
                <strong>{resource.charAt(0).toUpperCase()}</strong>
              </GreyType>
            }
            checkedIcon={
              <WhiteType>
                <strong>{resource.charAt(0).toUpperCase()}</strong>
              </WhiteType>
            }
            value="resource"
            onClick={event => {
              updateResources(event.target.checked, resource);
            }}
          />
        }
      />
    </ResourceBorder>
    <LabelType noWrap>{resource}</LabelType>
  </ResourceWrapper>
);

export default Resource;
