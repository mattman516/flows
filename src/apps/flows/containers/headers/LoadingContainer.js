import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";

const LoadWrap = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
`;

const LoadingBar = ({ loading }) => (
  <LoadWrap>{loading && <LinearProgress color="secondary" />}</LoadWrap>
);

const mapStateToProps = state => ({
  loading: state.spaces.loading
});

export default connect(mapStateToProps)(LoadingBar);
