import PropTypes from "prop-types";
import EventsItem from "../EventsItem";

const EventsList = ({ listToRender }) => {
  EventsList.propTypes = {
    listToRender: PropTypes.array,
  };

  return (
    <ul>
      {listToRender.map((item) => (
        <EventsItem item={item} key={item._id} />
      ))}
    </ul>
  );
};

export default EventsList;
