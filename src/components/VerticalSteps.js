import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const buttonStyle = {
  margin: 20
};

const VerticalSteps = ({
  steps,
  activeStep,
  getStepContent,
  handleNext,
  handleBack,
  handleSubmit
}) => (
  <div>
    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
          <StepContent>
            {/* <div>{getStepContent(index)}</div> */}
            <div>
              <div>
                <Button
                  style={buttonStyle}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  style={buttonStyle}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
      ))}
    </Stepper>
    {/* FINISHED */}
    {activeStep === steps.length && (
      <Paper square elevation={0}>
        <Typography>All steps completed - you&apos;re finished</Typography>
        <Button style={buttonStyle} onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    )}
  </div>
);

export default VerticalSteps;
