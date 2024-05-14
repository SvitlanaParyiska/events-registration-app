import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EventsItem = ({ item }) => {
  EventsItem.propTypes = {
    item: PropTypes.object,
  };

  return (
    <li>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div>
        <Link to={`/registration/${item._id}`}>Register</Link>
        <Link to={`/participants/${item._id}`}>View</Link>
      </div>
    </li>
  );
};

export default EventsItem;
