import React from "react";
import Card from "@material-ui/core/Card";
import RoundedButton from "../customMaterialComponents/RoundedButton";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import BarGraph from "../tables/tableComponents/BarGraph";
import Divider from "@material-ui/core/Divider";

const CustomCard = props => (
  <Card class="trello-card">
    <CardContent>
      <Typography variant="h5">{props.code}</Typography>
      <Typography variant="label">{props.name}</Typography>
      <Divider class="trello-divider" />
      <Typography color="inherit">SECTIONS</Typography>
      <BarGraph
        offered={props.sectionA}
        needed={props.sectionB}
        registered={props.sectionB * 0.1}
        name="Sections"
      />

      {/* <RoundedButton  variant={false ? "contained" : "outlined"}
                    color="primary"
                >
                    <a color="inherit" ><i class="material-icons ">chevron_left</i></a>
                        
                        <span class="button-lbl">{props.sectionA} Sections</span>
                    <a color="inherit"><i class="material-icons ">chevron_right</i></a>
                </RoundedButton> */}
    </CardContent>
  </Card>
);

export default CustomCard;
