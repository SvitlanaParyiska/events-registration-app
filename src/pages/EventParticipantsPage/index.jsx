import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventInfo } from "../../redux/eventsOperations";
import { selectEventInfo } from "../../redux/eventsSelectors";
import Title from "../../components/Title";
import ParticipantsList from "../../components/ParticipantsList";

const EventParticipantsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const eventFullInfo = useSelector(selectEventInfo);

  useEffect(() => {
    if (id) {
      dispatch(getEventInfo(id));
    }
  }, [dispatch, id]);

  return (
    <div className="container">
      {eventFullInfo && (
        <>
          <Title text={`"${eventFullInfo.title}" participants`} />
          {eventFullInfo.participants.length > 0 ? (
            <ParticipantsList listToRender={eventFullInfo.participants} />
          ) : (
            <p>The list of Participants is still empty</p>
          )}
        </>
      )}
    </div>
  );
};

export default EventParticipantsPage;
