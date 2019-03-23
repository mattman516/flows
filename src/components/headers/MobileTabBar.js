import React from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import { StyledLink } from "../customMaterialComponents/StyledLink";

const StyledTabs = styled(Tabs)`
  background-color: #fff;
  z-index: 11;
  margin-bottom: 10px;
  stroke-linecap: round;
`;
const TabStyle = theme => ({
  /* Styles applied to the root element. */
  indicator: {
    top: 0,
    height: 4,
    borderRadius: 2 
  }
});
const TabsStyled = withStyles(TabStyle)(StyledTabs);

const CenteredTabs = ({ currValue, headers, links }) => (
  <TabsStyled
    value={currValue}
    // onChange={(event, currValue) => handleChange(currValue)}
    indicatorColor="primary"
    centered
  >
    {(headers || []).map((text, index) => (
      <Tab key={text} label={<StyledLink to={links[index]}><strong>{text}</strong></StyledLink>} />
    ))}
  </TabsStyled>
);

export default CenteredTabs;
