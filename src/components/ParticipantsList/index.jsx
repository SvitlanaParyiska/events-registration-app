import PropTypes from "prop-types";
import ParticipantsItem from "../ParticipantsItem";
import { ListStyled } from "./ParticipantsList.styled";
import { useSelector } from "react-redux";
import { selectVisibleParticipants } from "../../redux/eventsSelectors";

const ParticipantsList = () => {
  ParticipantsList.propTypes = {
    listToRender: PropTypes.array,
  };

  const visibleParticipants = useSelector(selectVisibleParticipants);

  return (
    <ListStyled>
      {visibleParticipants.map((item) => (
        <ParticipantsItem item={item} key={item._id} />
      ))}
    </ListStyled>
  );
};

export default ParticipantsList;
