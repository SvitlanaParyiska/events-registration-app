import PropTypes from "prop-types";
import ParticipantsItem from "../ParticipantsItem";
import { ListStyled } from "./ParticipantsList.styled";

const ParticipantsList = ({ listToRender }) => {
  ParticipantsList.propTypes = {
    listToRender: PropTypes.array,
  };

  return (
    <ListStyled>
      {listToRender.map((item) => (
        <ParticipantsItem item={item} key={item._id} />
      ))}
    </ListStyled>
  );
};

export default ParticipantsList;
