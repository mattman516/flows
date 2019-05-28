import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DividerZ from "@material-ui/core/Divider";
import TextField from "@material-ui/core/OutlinedInput";
// import { Link } from "react-router-dom";
import { StyledLink } from "../../../components/customMaterialComponents/StyledLink";
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

const Divider = withStyles({
  root: {
    margin: "20px 0"
  }
})(DividerZ);

const SearchField = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 5,
    borderWidth: 5,
    width: 300,
    color: "#fff"
  },
  input: { borderWidth: 5 }
}))(TextField);

let constructNewTest = () => {
  let newid = Uuid();
  return {
    id: newid,
    question: "Edit Your Question",
    headid: newid,
    answers: []
  };
};

class SpacesView extends React.Component {
  // state = { loading: true };
  componentDidMount = () => {
    this.props.getHeads();
  };

  createNew = async () => {
    let newTest = constructNewTest();
    await this.props.createTest(newTest);
    window.location.href = "/create/" + newTest.id;
  };

  render() {
    let { text, createTest, heads, loading } = this.props;
    return (
      <ContentWrapper>
        <SearchField
          variant="filled"
          placeholder="Search"
          margin="dense"
          color="primary"
        />
        <StyledButton
          color="primary"
          variant="outlined"
          onClick={this.createNew}
        >
          Create New
        </StyledButton>
        {!loading && (
          <div>
            <Divider />
            {heads &&
              heads.map((head, key) => (
                <div key={key}>
                  <StyledLink to={"/" + head.id}>
                    <StyledButton
                      color="primary"
                      variant="contained"
                      onClick={event => this.props.downloadCurrentTest(head.id)}
                    >
                      {head.question}
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

export default SpacesView;
