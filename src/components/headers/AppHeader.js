import React from "react";
import {
  StyledMaterialAppBar,
  StyledToolbarApp,
  BreadCrumbs,
  BreadCrumbItems,
  BarTools,
  AppHeaderWrapper,
  AppBarWrapper
} from "../customMaterialComponents/StyledMaterialUi";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/icons/Menu";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import MoreVert from "@material-ui/icons/MoreVert";

import { StyledLink } from "../customMaterialComponents/StyledLink";

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
  handleApproveSelected,
  handleUnapproveSelected,
  MobileHeader,
  buttonVisible,
  selectedItem
}) => (
  <AppHeaderWrapper>
    <Hidden xsDown>
      <AppBarWrapper>
        <StyledMaterialAppBar position="relative">
          <StyledToolbarApp>
            <BreadCrumbs>
              <IconButton onClick={handleNavToggle}>
                <Menu />
              </IconButton>
              <BreadCrumbItems>
                {breadCrumb2 && (
                  <Typography
                    variant="h5"
                    color="inherit"
                    onClick={handleBreadcrumbNav}
                  >
                    <StyledLink to={breadCrumb2path}>{breadCrumb2}</StyledLink>
                  </Typography>
                )}
                {breadCrumb2 && (
                  <Typography color="inherit">
                    <KeyboardArrowRight />
                  </Typography>
                )}
              </BreadCrumbItems>
              <Typography variant="h5">{title}</Typography>
            </BreadCrumbs>
            <BarTools>
              {numSelections > 0 && unapprove && (
                <Button variant="contained" onClick={handleUnapproveSelected}>
                  {"Unapprove  (" + numSelections + ")"}
                </Button>
              )}
              {(buttonVisible || numSelections > 0) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={event => handleApproveSelected(event, selectedItem)}
                >
                  {numSelections > 0
                    ? buttonText1 + " (" + numSelections + ")"
                    : buttonText1}
                </Button>
              )}
              <IconButton onClick={handlePopupToggle}>
                <MoreVert />
              </IconButton>
            </BarTools>
          </StyledToolbarApp>
        </StyledMaterialAppBar>
      </AppBarWrapper>
    </Hidden>
    <Hidden smUp>
      <MobileHeader
        title={title}
        breadCrumb2={breadCrumb2}
        breadCrumb2path={breadCrumb2path}
        numSelections={numSelections}
        unapprove={unapprove}
        buttonText1={buttonText1}
        handleNavToggle={handleNavToggle}
        handlePopupToggle={handlePopupToggle}
        handleBreadcrumbNav={handleBreadcrumbNav}
        handleApproveSelected={handleApproveSelected}
        handleUnapproveSelected={handleUnapproveSelected}
        selectedItem={selectedItem}
      />
    </Hidden>
  </AppHeaderWrapper>
);

export default AppHeader;
