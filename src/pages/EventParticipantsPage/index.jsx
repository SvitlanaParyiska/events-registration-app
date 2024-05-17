import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventInfo } from "../../redux/eventsOperations";
import { selectEventInfo } from "../../redux/eventsSelectors";
import Title from "../../components/Title";
import ParticipantsList from "../../components/ParticipantsList";
import Search from "../../components/Search";
import { LinkStyled } from "./EventParticipantsPage.styled";

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
            <>
              <Search />
              <ParticipantsList />
            </>
          ) : (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              {" "}
              The list of Participants is still empty
            </p>
          )}
        </>
      )}
      <LinkStyled to="/events">Back</LinkStyled>
    </div>
  );
};

export default EventParticipantsPage;
