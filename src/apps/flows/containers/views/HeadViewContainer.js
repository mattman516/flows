import { connect } from "react-redux";
import FlowView from "../../views/HeadsView";
import {
  downloadCurrentTest,
  getHeads,
  createNewTest
} from "../../actions/flows";

const getId = ownProps => {
  return ownProps.match.params.id || "new";
};

const mapStateToProps = (state, ownProps) => ({
  text: state.flows.currTest.question,
  testId: getId(ownProps),
  answers: state.flows.answerList,
  loading: state.flows.loading,
  heads: state.flows.heads
});

const mapDispatchToProps = dispatch => ({
  downloadCurrentTest: id => dispatch(downloadCurrentTest(id)),
  createTest: test => dispatch(createNewTest(test)),
  getHeads: () => dispatch(getHeads())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlowView);
