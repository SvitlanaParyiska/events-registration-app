import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { LinkStyled, DivStyled, BoxStyled } from "./EventsItem.styled";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/eventsSelectors";
import toast from "react-hot-toast";
import { addFavorite, removeFavorite } from "../../redux/eventsSlice";
import defaultPicture from "/images/placeholder.webp";
import { useLocation } from "react-router-dom";

const EventsItem = ({ item }) => {
  EventsItem.propTypes = {
    item: PropTypes.object,
  };

  const location = useLocation();
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
      <Card
        sx={{
          maxWidth: 320,
          height: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div>
          <CardMedia
            sx={{ height: 140 }}
            image={item.imgUrl ? item.imgUrl : defaultPicture}
            title="event logo"
            component="img"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </div>

        <CardActions
          sx={{
            display: "flex",
            paddingTop: "0px",
            paddingLeft: "0px",
            justifyContent: "center",
          }}
        >
          <IconButton aria-label="add to favorites" onClick={handleFav}>
            {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <LinkStyled
            to={`/registration/${item._id}`}
            state={{ from: location }}
          >
            Register
          </LinkStyled>
          <LinkStyled
            to={`/participants/${item._id}`}
            state={{ from: location }}
          >
            View
          </LinkStyled>
        </CardActions>
        <DivStyled>
          <p>{item.eventDate.slice(0, 10)}</p>
        </DivStyled>
        <BoxStyled>
          <p>{item.organizer}</p>
        </BoxStyled>
      </Card>
    </li>
  );
};

export default EventsItem;
