import { connect } from "react-redux";
import FlowView from "../../views/CreateFlowView";
import {downloadCurrentTest, createNewAnswer, createNewTest,getQuestionOptions} from '../../actions/flows'

const getId = (ownProps) => {
  return ownProps.match.params.id || "new"
}

const mapStateToProps = (state, ownProps) => ({
  currTest: state.flows.currTest,
  testId: getId(ownProps),
  answers: state.flows.answerList,
  testOptions: state.flows.testList,
  loading: state.flows.loading
});

const mapDispatchToProps = dispatch => ({
  downloadCurrentTest: (id) => dispatch(downloadCurrentTest(id)),
  saveAnswer: (answer) => dispatch(createNewAnswer(answer)),
  createTest: (test) => dispatch(createNewTest(test)),
  getAllQuestions: (headid) => dispatch(getQuestionOptions(headid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlowView);
