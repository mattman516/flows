import React from "react";
import styled from "styled-components";
import {
  MobileBarWrapper,
  MobileToolbar,
  StyledMaterialAppBar,
  BreadCrumbs
} from "../customMaterialComponents/StyledMaterialUi";
import { StyledLink } from "../customMaterialComponents/StyledLink";
import logo from "../.././IMG/ad_astra-color.svg";

export const PlatformBrand = styled.img`
  height: 24px;
  width: 96px;
  line-height: 0;
  padding-left: 15px;
`;

export const MobileSignedOutHeader = styled.div`
  // background-color: var(--off-white);
  // border-top: 4px solid var(--highlight-color);
  background-color: #f1f3f4;
  border-top: 4px solid #3590dc;
`;

const AppHeader = ({}) => (
  <MobileSignedOutHeader>
    <MobileBarWrapper>
      <StyledMaterialAppBar position="relative">
        <MobileToolbar>
          <BreadCrumbs>
            <StyledLink to="/">
              <PlatformBrand src={logo} alt="Ad Astra" />
            </StyledLink>
          </BreadCrumbs>
        </MobileToolbar>
      </StyledMaterialAppBar>
    </MobileBarWrapper>
  </MobileSignedOutHeader>
);

export default AppHeader;
