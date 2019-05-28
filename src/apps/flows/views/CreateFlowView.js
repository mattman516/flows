import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { StyledLink } from "../../../components/customMaterialComponents/StyledLink";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
// import { createTest } from "../../../graphql/mutations";

const Uuid = require("uuid/v4");

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = withStyles({
  root: {
    margin: 5,
    width: 300
  }
})(Button);

const AnswerDialog = ({
  open,
  currTest,
  handleClose,
  handleAnswerAdd,
  answerText,
  constructAnswer,
  constructNewTest,
  saveAnswer,
  destinationVal,
  destinationOptions,
  destinationChange,
  createTest,
  updateTest
}) => (
  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Answer</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Enter this question's answer, fill out the destination on the next page.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="answer"
        label="Answer"
        type="text"
        fullWidth
        onChange={event => handleAnswerAdd(event.target.value)}
        value={answerText}
      />
      <Select
        value={destinationVal}
        onChange={event => destinationChange(event.target.value)}
      >
        <MenuItem value="new">New Question</MenuItem>
        {destinationOptions.map((val, key) => (
          <MenuItem value={val.id}>{val.question}</MenuItem>
        ))}
      </Select>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button
        onClick={event => {
          handleClose();
          if (destinationVal === "new") {
            let newTest = constructNewTest()
            let newAns = constructAnswer(answerText, newTest.id);
            saveAnswer(newAns);
            createTest(newTest);
            updateTest({...currTest, answers: (currTest.answers ? currTest.answers : []).push(newAns.id)});
          }else{
            let newAns = constructAnswer(answerText, destinationVal);
            saveAnswer(newAns);
            updateTest({...currTest, answers: (currTest.answers ? currTest.answers : []).push(newAns.id)});
          }
          // console.log(newTest);
        }}
        color="primary"
        variant="outlined"
      >
        Add Answer
      </Button>
    </DialogActions>
  </Dialog>
);

class CreateFlow extends React.Component {
  state = {
    test: null,
    answerDialogOpen: false,
    answerText: "",
    nextDestination: "new",
    newQuestion: ""
  };

  handleClickOpen = () => {
    this.setState({ answerDialogOpen: true });
  };

  handleClose = () => {
    this.setState({ answerDialogOpen: false });
  };

  handleAnswerAdd = val => {
    this.setState({ answerText: val });
  };

  handleDestinationChange = val => {
    console.log(val);
    this.setState({ nextDestination: val });
  };

  handleQuestionChange = val => {
    this.setState({newQuestion: val});
  }

  componentDidUpdate = prevProps => {
    if (this.props.testId !== prevProps.testId) {
      this.props.downloadCurrentTest(this.props.testId);
    }
    if(this.props.currTest && this.props.currTest !== prevProps.currTest){
      this.setState({newQuestion: this.props.currTest.question});
      this.props.getAllQuestions(this.props.currTest.headid || this.props.testId);
    }
  };

  componentDidMount = () => {
    this.props.downloadCurrentTest(this.props.testId);
    this.props.getAllQuestions(this.props.currTest.headid || this.props.testId);
  };

  render() {
    let { currTest, testId, answers, loading } = this.props;

    let constructNewAnswer = (ans,dest) => {
      dest = (dest === "new") ? null : dest;
      return {
        id: Uuid(),
        testid: testId,
        destination: dest || Uuid(),
        answer: ans
      };
    };

    let constructNewTest = () => {
      return {
        id: Uuid(),
        question: "Edit Your Question",
        headid: currTest.headid,
        answers: []
      };
    };

    return (
      <div>
        {!loading && (
          <ContentWrapper>
            <div>
              <TextField fullWidth value={this.state.newQuestion} onChange={e => this.handleQuestionChange(e.target.value)} />
              <IconButton
                onClick={e =>{
                  let updatedTest = {
                    ...this.props.currTest,
                    question: this.state.newQuestion
                  };
                  console.log(updatedTest);
                  this.props.updateTest(updatedTest);
                }
                }
              >
                <SaveIcon />
              </IconButton>
            </div>
            {/* <StyledLink to={"/create/" + ans.destination}> */}
            <StyledButton
              color="primary"
              variant="outlined"
              onClick={event => this.handleClickOpen()}
            >
              Add new Answer
            </StyledButton>
            {/* </StyledLink> */}
            {answers &&
              answers.map((ans, key) => (
                <div key={key}>
                  <StyledLink to={"/create/" + ans.destination}>
                    <StyledButton
                      color="primary"
                      variant="contained"
                      onClick={event =>
                        this.props.downloadCurrentTest(ans.destination)
                      }
                    >
                      {ans.answer}
                    </StyledButton>
                  </StyledLink>
              <IconButton
                onClick={e =>{
                  this.props.deleteAnswer(ans.id);
                }
                }
              >
                <DeleteIcon />
              </IconButton>
                </div>
              ))}
          </ContentWrapper>
        )}
        <AnswerDialog
          open={this.state.answerDialogOpen}
          currTest={this.props.currTest}
          handleClose={this.handleClose}
          handleAnswerAdd={this.handleAnswerAdd}
          answerText={this.state.answerText}
          saveAnswer={this.props.saveAnswer}
          updateTest={this.props.updateTest}
          destinationOptions={this.props.testOptions}
          destinationVal={this.state.nextDestination}
          destinationChange={this.handleDestinationChange}
          constructAnswer={constructNewAnswer}
          constructNewTest={constructNewTest}
          createTest={this.props.createTest}
        />
      </div>
    );
  }
}

export default CreateFlow;
