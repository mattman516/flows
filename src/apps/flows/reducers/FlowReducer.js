import Uuid from "uuid/v4";
import { bindActionCreators } from "../../../../../../Users/mattm/AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux";

const startingState = {
  currTest: {},
  answerList: [],
  testList: [],
  loading: true
};

const flows = (state = startingState, action) => {
  switch (action.type) {
    case "ON_LOAD_CURRENT_TEST": {
      return {
        ...state,
        currTest: action.test
      };
    }

    case "ON_LOAD_CURRENT_ANSWERS": {
      return {
        ...state,
        answerList: action.answer
      };
    }

    case "IS_LOADING": {
      return {
        ...state,
        loading: true
      };
    }

    case "DONE_LOADING": {
      return {
        ...state,
        loading: false
      };
    }

    case "ON_LOAD_ALL_TESTS": {
      return {
        ...state,
        testList: action.testList
      };
    }

    case "ON_LOAD_HEADS": {
      return {
        ...state,
        heads: action.heads
      };
    }

    default:
      return state;
  }
};

export default flows;
