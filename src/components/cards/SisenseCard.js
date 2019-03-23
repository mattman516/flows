import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Trend from "react-trend";
import CardTemplate from "./CardTemplate";
var dataVals
const getData = () => {
  dataVals = Array(10);
  for (var i = 0; i < dataVals.length; i++){
    dataVals[i] = Math.floor(Math.random() * 10);
  }
  // console.log(dataVals);
  return dataVals
}
const gradients=[
  ["#3590dc", "#1b77b7", "#125d91"],
  ["#a2d539", "#8ebb42", "#779833"],
  ["#fff61d", "#ffe31d", "#ffd11b"],
  ["#33b9d2", "#1fa2b7", "#308c9e"],
  ["#ff8d22", "#ff7d07", "#f96611"],
  ["#ff5846", "#ef3c29", "#ce2a18"]
]
const getGradient = () => {
  return gradients[Math.floor(Math.random() * 6)]
}

    /* <CardMedia component="iframe" src={sisenseLink} style={style} /> */

const SisenseCardTemplate = ({
  sisenseLink,
  style,
  headerText,
  learnMoreLink
}) => (
  <CardTemplate title={headerText} content={
    <Trend
      smooth
      autoDraw
      autoDrawDuration={3000}
      autoDrawEasing="ease-out"
      data={getData()}
      gradient={getGradient()}
      radius={13.5}
      strokeWidth={3.5}
      strokeLinecap={"round"}
    />
  }
    actions={
      <Button size="small" href={learnMoreLink}>
        Learn More
      </Button>
    }
/>
);

export default SisenseCardTemplate;
