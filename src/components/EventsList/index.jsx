import PropTypes from "prop-types";
import EventsItem from "../EventsItem";
import { ListStyled } from "./EventsList.styled";

const EventsList = ({ listToRender }) => {
  EventsList.propTypes = {
    listToRender: PropTypes.array,
  };

  return (
    <ListStyled>
      {listToRender.map((item) => (
        <EventsItem item={item} key={item._id} />
      ))}
    </ListStyled>
  );
};

export default EventsList;
