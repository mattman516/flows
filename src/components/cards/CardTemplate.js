import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardTemplate = ({ title, content, actions }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        {title}
      </Typography>

      {content}
    </CardContent>
    <CardActions>{actions}</CardActions>
  </Card>
);

export default CardTemplate;
