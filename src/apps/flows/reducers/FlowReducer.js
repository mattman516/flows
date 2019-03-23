
import Uuid from "uuid/v4";

const startingState = {
  currTest: {},
  answerList: [],
  loading: true,
};

const flows = (state = startingState, action) => {
  switch (action.type) {
    case "ON_LOAD_CURRENT_TEST":{
      return {
        ...state,
        currTest: action.test
      }
    }
    
    case "ON_LOAD_CURRENT_ANSWERS":{
      return {
        ...state,
        answerList: action.answer
      }
    }

    case "IS_LOADING": {
      return {
        ...state,
        loading: true
      }
    }

    case "DONE_LOADING": {
      return {
        ...state,
        loading: false
      }
    }

    default:
      return state;
  }
};

export default flows;
