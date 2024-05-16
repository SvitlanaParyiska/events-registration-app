import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { LinkStyled } from "./EventsItem.styled";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/eventsSelectors";
import toast from "react-hot-toast";
import { addFavorite, removeFavorite } from "../../redux/eventsSlice";

const EventsItem = ({ item }) => {
  EventsItem.propTypes = {
    item: PropTypes.object,
  };

  const dispatch = useDispatch();
  const favList = useSelector(selectFavorites);

  const favIs = favList.find((favItem) => favItem._id === item._id);
  let fav = false;
  if (favIs) {
    fav = true;
  }

  const handleFav = () => {
    if (fav) {
      dispatch(removeFavorite(item._id));
      toast.success("Notice successful deleted!");
    } else {
      dispatch(addFavorite(item));
      toast.success("Notice successful added!");
    }
  };
  return (
    <li>
      <Card sx={{ maxWidth: 345, height: 500 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={"/static/images/cards/contemplative-reptile.jpg"}
          title="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions sx={{}}>
          <IconButton aria-label="add to favorites" onClick={handleFav}>
            {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <LinkStyled to={`/registration/${item._id}`}>Register</LinkStyled>
          <LinkStyled to={`/participants/${item._id}`}>View</LinkStyled>
        </CardActions>
      </Card>
    </li>
  );
};

export default EventsItem;
