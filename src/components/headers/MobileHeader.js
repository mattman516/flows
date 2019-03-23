import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {
  MobileHeaderWrapper,
  MobileBarWrapper,
  MobileToolbar,
  StyledMaterialAppBar,
  BreadCrumbs,
  BreadCrumbItems,
  BarTools
} from "../customMaterialComponents/StyledMaterialUi";
import { Badge } from "@material-ui/core";
import { StyledLink } from "../customMaterialComponents/StyledLink";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
// var linkStyle = { textDecoration: "none", color: "inherit" };

const AppHeader = ({
  title,
  breadCrumb2,
  breadCrumb2path,
  numSelections,
  unapprove,
  buttonText1,
  handleNavToggle,
  handlePopupToggle,
  handleBreadcrumbNav,
  handleUnapproveSelected,
  handleApproveSelected,
  selectedItem,

  count
}) => (
  <MobileHeaderWrapper>
    <MobileBarWrapper>
      <StyledMaterialAppBar position="relative">
        <MobileToolbar>
          {breadCrumb2 ? (
            <IconButton onClick={handleBreadcrumbNav}>
              <StyledLink to={breadCrumb2path}>
                <KeyboardArrowLeftIcon />
              </StyledLink>
            </IconButton>
          ) : (
            <IconButton onClick={handleNavToggle}>
              <Badge invisible={count === 0} variant="dot" color="secondary">
                <MenuIcon />
              </Badge>
            </IconButton>
           )}
          {numSelections === 0 && (
            <BreadCrumbs>
              <BreadCrumbItems>
                {/* {breadCrumb2 && (
                  <Typography
                    variant="h5"
                    color="inherit"
                    onClick={handleBreadcrumbNav}
                  >
                    <StyledLink to={breadCrumb2path}>{breadCrumb2}</StyledLink>
                  </Typography>
                )}
                {breadCrumb2 && <KeyboardArrowRightIcon color="inhert" />} */}
              </BreadCrumbItems>
              <Typography noWrap={true} variant="h5">
                {title}
              </Typography>
            </BreadCrumbs>
          )}
          <BarTools>
            {numSelections > 0 && unapprove && (
              <Button variant="contained" onClick={handleUnapproveSelected}>
                {"UnApprove  (" + numSelections + ")"}
              </Button>
            )}
            {numSelections > 0 && (
              <Button
                style={{ marginLeft: 5 }}
                variant="contained"
                color="primary"
                onClick={handleApproveSelected}
              >
                {buttonText1 + " (" + numSelections + ")"}
              </Button>
            )}
            <IconButton
              onClick={event => handleApproveSelected(event, selectedItem)}
            >
              <MoreVertIcon />
            </IconButton>
          </BarTools>
        </MobileToolbar>
      </StyledMaterialAppBar>
    </MobileBarWrapper>
  </MobileHeaderWrapper>
);

export default AppHeader;
