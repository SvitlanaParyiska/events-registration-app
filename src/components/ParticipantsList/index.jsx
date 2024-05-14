import PropTypes from "prop-types";
import ParticipantsItem from "../ParticipantsItem";

const ParticipantsList = ({ listToRender }) => {
  ParticipantsList.propTypes = {
    listToRender: PropTypes.array,
  };

  return (
    <ul>
      {listToRender.map((item) => (
        <ParticipantsItem item={item} key={item._id} />
      ))}
    </ul>
  );
};

export default ParticipantsList;
