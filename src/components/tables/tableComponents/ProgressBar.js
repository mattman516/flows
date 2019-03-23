import React from "react";
import AstraProgressBar from "../../customMaterialComponents/AstraProgressBar";
import { Typography } from "@material-ui/core";

// const errorStyle = {color: '#f00', backgroundColor: '#000'}
const ProgressBar = ({ buffer, completed }) => (
  <div>
    {completed === 100 && (
      <div>
        <Typography variant="label" color="inherit">
          Completed
        </Typography>
        <AstraProgressBar
          color="secondary"
          variant="determinate"
          value={completed}
        />
      </div>
    )}
    {completed === 0 && (
      <div>
        <Typography variant="label" color="inherit">
          Not Started
        </Typography>
        <AstraProgressBar variant="determinate" value={completed} />
      </div>
    )}
    {buffer > completed && completed !== 0 && completed !== 100 && (
      <div>
        <Typography variant="label" color="inherit">
          In progress... {completed}%
        </Typography>
        <AstraProgressBar
          variant="buffer"
          value={completed}
          valueBuffer={buffer}
        />
      </div>
    )}
    {buffer === completed && completed !== 0 && completed !== 100 && (
      <div>
        <Typography variant="label" color="inherit">
          Error
        </Typography>
        <AstraProgressBar
          color="error"
          variant="determinate"
          value={completed}
          valueBuffer={buffer}
        />
      </div>
    )}
  </div>
  // //  <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
);

export default ProgressBar;
