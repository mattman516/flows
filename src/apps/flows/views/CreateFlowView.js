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
import { createTest } from "../../../graphql/mutations";

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
  handleClose,
  handleAnswerAdd,
  answerText,
  constructAnswer,
  constructNewTest,
  saveAnswer,
  destinationVal,
  destinationOptions,
  destinationChange
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
      <Select value={destinationVal} onChange={event => destinationChange(event.target.value)}>
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
          let newAns = constructAnswer(answerText);
          let newTest = constructNewTest(newAns.id);
          saveAnswer(newAns);
          if(destinationVal==="new"){
            createTest(newTest);
          }
          console.log(constructAnswer(answerText));
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
  state = { answerDialogOpen: false, answerText: "", nextDestination: "new" };

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
    this.setState({nextDestination: val})
  }

  componentDidMount = () => {
    this.props.downloadCurrentTest(this.props.testId);
    this.props.getAllQuestions(this.props.currTest.headid || this.props.testId);
  };

  render() {
    let { currTest, testId, answers, loading } = this.props;

    let constructNewAnswer = ans => {
      return {
        testid: testId,
        destination: Uuid(),
        answer: ans
      };
    };

    let constructNewTest = (id) => {
      return {
        id: id,
        headid: currTest.headid
      }
    }

    return (
      <ContentWrapper>
        {!loading && (
          <div>
            <Typography variant={"h2"}> {currTest.question} </Typography>
            {/* <StyledLink to={"/create/" + ans.destination}> */}
            <StyledButton
              color="primary"
              variant="outlined"
              onClick={event => this.handleClickOpen()}
            >
              Add new Answer
            </StyledButton>
            <AnswerDialog
              open={this.state.answerDialogOpen}
              handleClose={this.handleClose}
              handleAnswerAdd={this.handleAnswerAdd}
              answerText={this.state.answerText}
              saveAnswer={this.props.saveAnswer}
              destinationOptions={this.props.testOptions}
              destinationVal={this.state.nextDestination}
              destinationChange={this.handleDestinationChange}
              constructAnswer={constructNewAnswer}
              constructNewTest={constructNewTest}
            />
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
                </div>
              ))}
          </div>
        )}
      </ContentWrapper>
    );
  }
}

export default CreateFlow;
