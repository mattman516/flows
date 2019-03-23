import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


export const StyledMaterialAppBar = styled(AppBar)`
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
`;
export const StyledToolbarPlatform = styled(Toolbar)`
  // background-color: var(--off-white);
  // border-top: 4px solid var(--highlight-color);
  background-color: #f1f3f4;
  border-top: 4px solid #3590dc;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledToolbarApp = styled(Toolbar)`
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  // background-color: var(--white);
  // color: var(--white);
  background-color: #fff;
  color: #fff;
`;


//DIVS

export const MobileHeaderWrapper = styled.div`
  // background-color: var(--off-white);
  // border-bottom: 1px solid var(--dark-gray);
  background-color: #f1f3f4;
  border-bottom: 1px solid var(--dark-gray);
`;
export const MobileBarWrapper = styled.div`
  padding: 5px 0;
  background-color: #f1f3f4;
  color: #e9eef2;
  // color: var(--light-gray);
`;
export const MobileToolbar = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: row;
  // background-color: var(--off-white);
  background-color: #f1f3f4;
  // color: var(--light-gray);
  color: #e9eef2;
`;
export const BreadCrumbs = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  align-items: center;
  max-width: 80%;
`;
export const BreadCrumbItems = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  align-items: center;
  color: var(--gray);
`;
export const BarTools = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;
export const AppBarWrapper = styled.div`
  margin: 0 30px;
  border-bottom: 1px solid #e9eef2;
  // border-bottom: 1px solid var(--light-gray);
`;
export const AppHeaderWrapper = styled.div`
  z-index: 10;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  background-color: #fff;
  // background-color: var(--white);
`;

export const PlatformBrand = styled.img`
  height: 24px;
  width: 96px;
  line-height: 0;
  padding: 30px;
`;

export const PlatformTools = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
`;

export const PlatformToolsWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
`;
