import {
  listAnswers,
  getTest
} from "../../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export const doneLoading = () => ({
  type: "DONE_LOADING"
});
export const isLoading = () => ({
  type: "IS_LOADING"
});
export const loadCurrentAnswers = (answer) => ({
  type: "ON_LOAD_CURRENT_ANSWERS",
  answer
});
export const loadCurrentTest = (test) => ({
  type: "ON_LOAD_CURRENT_TEST",
  test
});

export const downloadCurrentTest = id => async dispatch => {
  console.log("STARTING")
  let currTest = null;
  dispatch(isLoading());
  try {
    currTest = await API.graphql(graphqlOperation(getTest, { id: id }));
    currTest = currTest.data.getTest;
    console.log("SUCCESS: LOAD CURRENT TEST ");
    dispatch(loadCurrentTest(currTest));
    if(!currTest.is_solution && currTest.answers)
      dispatch(downloadCurrentAnswers(currTest.id));
    else{
      dispatch(loadCurrentAnswers([]));
      dispatch(doneLoading());
    }
  } catch (error) {
    console.log(error);
  }
};
export const downloadCurrentAnswers = id => async dispatch => {
  dispatch(isLoading());
  console.log("START: LOAD CURRENT ANSWERS ");
  // let answerFilter = answers.map((ans,key) => {return {id: ans};});
  // console.log(answerFilter)
  try {
    let currAnswers = await API.graphql(
      graphqlOperation(listAnswers, {
        filter: { testid: {eq: id }},
        limit: 1000
      })
    );
    currAnswers = currAnswers.data.listAnswers.items;
    console.log("SUCCESS: LOAD CURRENT ANSWERS ");
    console.log(currAnswers);
    dispatch(loadCurrentAnswers(currAnswers));
    dispatch(doneLoading());
  } catch (error) {
    console.log(error);
  }
};

