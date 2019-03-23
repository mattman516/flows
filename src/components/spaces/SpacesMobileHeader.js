import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import { StyledLink } from "../customMaterialComponents/StyledLink";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import LinearProgress from "@material-ui/core/LinearProgress";

// var linkStyle = { textDecoration: "none", color: "inherit" };

export const BarTools = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;
export const BreadCrumbs = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  align-items: center;
  max-width: 80%;
  color: #6c717b;
`;
export const StyledMaterialAppBar = withStyles({
  root: {
    boxShadow: "none",
    background: "transparent"
  }
})(AppBar);

export const MobileToolbar = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.background};
  color: #fff;
`;
export const MobileHeaderWrapper = styled.div`
  border-bottom: 1px solid var(--dark-gray);
  background: transparent;
`;

export const LoadWrap = styled.div`
  // position: fixed;
  bottom: 0;
`;

const compStyle = {
  root: {
    color: "#fff"
  }
};

const WhiteKeyboardArrowLeftIcon = withStyles(compStyle)(KeyboardArrowLeftIcon);
const WhiteMenuIcon = withStyles(compStyle)(MenuIcon);
const WhiteAddIcon = withStyles(compStyle)(AddIcon);
const WhiteDeleteIcon = withStyles(compStyle)(DeleteIcon);
const WhiteType = withStyles(compStyle)(Typography);

const StyledLinearProgress = withStyles({
  root: {
    zIndex: 100
  }
})(LinearProgress);

const DeleteConfirm = ({ open, toggleOpen, onDelete, item, backPath }) => (
  <div>
    <Dialog open={open} onClose={toggleOpen}>
      <DialogContent>
        <DialogContentText>
          {"You are about to delete " + (item ? item.name : "")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <StyledLink to={backPath}>
          <Button onClick={event => onDelete(item)} color="primary">
            Continue
          </Button>
        </StyledLink>
        <Button onClick={toggleOpen}>Cancel</Button>
      </DialogActions>
    </Dialog>
  </div>
);

const AppHeader = ({
  loading,
  title,
  parentid,
  handleNavToggle,
  backPath,
  addPath,
  count,
  transparent,
  whiteHeader,
  updateData,
  deleteCurrItem,
  currItem,
  openDelete,
  toggleOpenDelete
}) => (
  <div>
    <MobileHeaderWrapper>
      <StyledMaterialAppBar position="relative">
        <MobileToolbar
          theme={{
            background: transparent
              ? "rgba(0, 0, 0, 0.4)"
              : whiteHeader
              ? "#fff"
              : "#1b77b7"
          }}
        >
          <BreadCrumbs>
            {backPath ? (
              <StyledLink to={backPath}>
                <IconButton onClick={() => updateData(parentid)}>
                  {whiteHeader ? (
                    <KeyboardArrowLeftIcon color="inherit" />
                  ) : (
                    <WhiteKeyboardArrowLeftIcon />
                  )}
                </IconButton>
              </StyledLink>
            ) : (
              <IconButton onClick={handleNavToggle}>
                <Badge invisible={count === 0} variant="dot" color="secondary">
                  {whiteHeader ? <MenuIcon /> : <WhiteMenuIcon />}
                </Badge>
              </IconButton>
            )}
            {whiteHeader ? (
              <Typography noWrap={true} variant="h6" color="inherit">
                {title}
              </Typography>
            ) : (
              <WhiteType noWrap={true} variant="h6">
                {title}
              </WhiteType>
            )}
          </BreadCrumbs>
          <BarTools>
            {!title && (
              // <StyledLink to={backPath}>
              <IconButton onClick={event => toggleOpenDelete()}>
                {whiteHeader ? <DeleteIcon /> : <WhiteDeleteIcon />}
              </IconButton>
              // </StyledLink>
            )}
            {addPath && (
              <StyledLink to={addPath}>
                <IconButton>
                  {whiteHeader ? <AddIcon /> : <WhiteAddIcon />}
                </IconButton>
              </StyledLink>
            )}
          </BarTools>
        </MobileToolbar>
      </StyledMaterialAppBar>
      <DeleteConfirm
        open={openDelete}
        toggleOpen={toggleOpenDelete}
        onDelete={deleteCurrItem}
        item={currItem}
        backPath={backPath}
      />
    </MobileHeaderWrapper>
  </div>
);

export default AppHeader;
