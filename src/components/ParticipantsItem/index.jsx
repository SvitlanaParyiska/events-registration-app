import PropTypes from "prop-types";

const ParticipantsItem = ({ item }) => {
  ParticipantsItem.propTypes = {
    item: PropTypes.object,
  };
  return (
    <li>
      <h3>{item.name}</h3>
      <p>{item.email}</p>
    </li>
  );
};

export default ParticipantsItem;
