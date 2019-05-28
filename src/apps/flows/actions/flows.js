import { listAnswers, getTest, listTests } from "../../../graphql/queries";
import {
  createAnswer,
  createTest,
  updateTest,
  deleteAnswer
} from "../../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

export const doneLoading = () => ({
  type: "DONE_LOADING"
});
export const isLoading = () => ({
  type: "IS_LOADING"
});
export const loadCurrentAnswers = answer => ({
  type: "ON_LOAD_CURRENT_ANSWERS",
  answer
});
export const loadCurrentTest = test => ({
  type: "ON_LOAD_CURRENT_TEST",
  test
});
export const loadAllTests = testList => ({
  type: "ON_LOAD_ALL_TESTS",
  testList
});
export const loadHeads = heads => ({
  type: "ON_LOAD_HEADS",
  heads
});

export const downloadCurrentTest = id => async dispatch => {
  console.log("STARTING");
  let currTest = null;
  dispatch(isLoading());
  try {
    currTest = await API.graphql(graphqlOperation(getTest, { id: id }));

    currTest = currTest.data.getTest;
    console.log("SUCCESS: LOAD CURRENT TEST ");
    console.log(currTest);
    dispatch(loadCurrentTest(currTest));
    if (currTest.answers) dispatch(downloadCurrentAnswers(currTest.id));
    else {
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
        filter: { testid: { eq: id } },
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

export const createNewAnswer = answer => async dispatch => {
  dispatch(isLoading());
  console.log("START: CREATE ANSWER");
  try {
    await API.graphql(graphqlOperation(createAnswer, { input: answer }));
  } catch (e) {
    console.log(e);
  }
  // dispatch(createNewTest())
  // window.location.href = "/create/" + answer.destination;
  dispatch(doneLoading());
};

export const createNewTest = newTest => async dispatch => {
  dispatch(isLoading());
  console.log("START: CREATE TEST");
  console.log(newTest);
  try {
    await API.graphql(graphqlOperation(createTest, { input: newTest }));
  } catch (e) {
    console.log(e);
  }
  dispatch(doneLoading());
};

export const updateExistingTest = updatedTest => async dispatch => {
  dispatch(isLoading());
  try {
    await API.graphql(graphqlOperation(updateTest, { input: updatedTest }));
    dispatch(downloadCurrentTest(updatedTest.id));
  } catch (e) {
    console.log(e);
  }
  dispatch(doneLoading());
};

export const getQuestionOptions = theheadid => async dispatch => {
  dispatch(isLoading());
  console.log("START: GET ALL QUESTIONS " + theheadid);
  console.log(theheadid);
  let testList = await API.graphql(
    graphqlOperation(listTests, { filter: { headid: { eq: theheadid } } })
  );
  console.log("TESTLSIT");
  console.log(testList.data.listTests.items);
  dispatch(loadAllTests(testList.data.listTests.items));
  dispatch(doneLoading());
};

export const onDeleteAnswer = ansId => async dispatch => {
  dispatch(isLoading());
  console.log("Delete answer " + ansId);
  try {
    await API.graphql(graphqlOperation(deleteAnswer, { input: { id: ansId } }));
  } catch (e) {
    console.log(e);
  }
};

export const getHeads = () => async dispatch => {
  dispatch(isLoading());
  // console.log("START: GET ALL QUESTIONS " + theheadid);
  // console.log(theheadid);
  let testList = await API.graphql(
    graphqlOperation(listTests, { limit: 10000 })
  );
  console.log("TESTLSIT");
  console.log(testList.data.listTests.items);
  let heads = testList.data.listTests.items.filter(i => i.headid === i.id);
  dispatch(loadHeads(heads));
  dispatch(doneLoading());
};
