// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTest = `mutation CreateTest($input: CreateTestInput!) {
  createTest(input: $input) {
    id
    question
    answers
    is_solution
  }
}
`;
export const updateTest = `mutation UpdateTest($input: UpdateTestInput!) {
  updateTest(input: $input) {
    id
    question
    answers
    is_solution
  }
}
`;
export const deleteTest = `mutation DeleteTest($input: DeleteTestInput!) {
  deleteTest(input: $input) {
    id
    question
    answers
    is_solution
  }
}
`;
export const createAnswer = `mutation CreateAnswer($input: CreateAnswerInput!) {
  createAnswer(input: $input) {
    id
    testid
    answer
    destination
  }
}
`;
export const updateAnswer = `mutation UpdateAnswer($input: UpdateAnswerInput!) {
  updateAnswer(input: $input) {
    id
    testid
    answer
    destination
  }
}
`;
export const deleteAnswer = `mutation DeleteAnswer($input: DeleteAnswerInput!) {
  deleteAnswer(input: $input) {
    id
    testid
    answer
    destination
  }
}
`;
