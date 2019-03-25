// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTest = `query GetTest($id: ID!) {
  getTest(id: $id) {
    id
    question
    headid
    answers
  }
}
`;
export const listTests = `query ListTests(
  $filter: ModelTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question
      headid
      answers
    }
    nextToken
  }
}
`;
export const getAnswer = `query GetAnswer($id: ID!) {
  getAnswer(id: $id) {
    id
    testid
    answer
    destination
  }
}
`;
export const listAnswers = `query ListAnswers(
  $filter: ModelAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      testid
      answer
      destination
    }
    nextToken
  }
}
`;
