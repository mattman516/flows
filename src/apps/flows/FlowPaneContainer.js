import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import { Route, Link } from "react-router-dom";
import FlowTest from "./containers/views/FlowTestViewContainer";
import CreateFlow from "./containers/views/CreateFlowViewContainer";
import HeadView from "./containers/views/HeadViewContainer";
import { Typography } from "@material-ui/core";
const ContentWrapper = styled.div`
  max-width: 1180px;
  // minheight: 2000px;
  margin: 0 auto;
`;

class AppPane extends Component {
  async componentDidMount() {}

  render() {
    return (
      <ContentWrapper>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="primary"
            onClick={e => {
              window.location.href = "/";
            }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" color="primary">
            FlowChoice
          </Typography>
        </div>
        <Route exact path="/:id" component={FlowTest} />
        <Route path="/create/:id" component={CreateFlow} />
        <Route exact path="/" component={HeadView} />
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
