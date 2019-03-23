import { connect } from "react-redux";
import FlowView from "../../views/FlowTestView";
import {downloadCurrentTest} from '../../actions/flows'

const getId = (ownProps) => {
  return ownProps.match.params.id || "new"
}

const mapStateToProps = (state, ownProps) => ({
  text: state.flows.currTest.question,
  testId: getId(ownProps),
  answers: state.flows.answerList,
  loading: state.flows.loading
});

const mapDispatchToProps = dispatch => ({
  downloadCurrentTest: (id) => dispatch(downloadCurrentTest(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlowView);
