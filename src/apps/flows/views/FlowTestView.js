import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { StyledLink } from "../../../components/customMaterialComponents/StyledLink";

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

class SpacesView extends React.Component {
  // state = { loading: true };
  componentDidMount = () => {
    this.props.downloadCurrentTest(this.props.testId);
  };

  render() {
    let { text, testId, answers, loading } = this.props;
    return (
      <ContentWrapper>
        {!loading && (
          <div>
            <Typography variant={"h2"}> {text} </Typography>
            {answers &&
              answers.map((ans, key) => (
                <div key={key}>
                  <StyledLink to={"/" + ans.destination}>
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

export default SpacesView;
