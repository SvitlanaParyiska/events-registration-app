import { Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ParticipantsItem = ({ item }) => {
  ParticipantsItem.propTypes = {
    item: PropTypes.object,
  };
  return (
    <li>
      <Card sx={{ width: 270, height: 180 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.email}
          </Typography>
        </CardContent>
      </Card>
    </li>
  );
};

export default ParticipantsItem;
