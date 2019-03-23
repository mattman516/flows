import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route, Redirect } from "react-router-dom";
import FlowTest from "./containers/views/FlowTestViewContainer";
const ContentWrapper = styled.div`
  max-width: 1180px;
  minheight: 2000px;
  margin: 0 auto;
`;

class AppPane extends Component {
  async componentDidMount() {}

  render() {
    return (
      <ContentWrapper>
        <Route path="/:id" component={FlowTest} />
        {/* <LoadingContainer/> */}
      </ContentWrapper>
    );
  }
}

const mapStateToProps = state => ({
  // loading: state.spaces.loading
});

const mapDispatchToProps = dispatch => ({
  // loadData: () => dispatch(loadDataList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPane);
