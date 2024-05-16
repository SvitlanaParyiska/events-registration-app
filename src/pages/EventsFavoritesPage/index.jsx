import EventsList from "../../components/EventsList";
import Title from "../../components/Title";
import { useSelector } from "react-redux";

import { selectFavorites } from "../../redux/eventsSelectors";
import { LinkStyled } from "./EventsFavoritesPage.styled";

const EventsFavoritesPage = () => {
  const favArr = useSelector(selectFavorites);

  return (
    <section>
      <div className="container">
        {favArr?.length > 0 ? (
          <>
            <Title text={"Your favorites list"} />
            <EventsList listToRender={favArr} />
          </>
        ) : (
          <>
            <p>Your favorites list is empty.</p>
            <LinkStyled to="/events">View the list of events</LinkStyled>
          </>
        )}
      </div>
    </section>
  );
};

export default EventsFavoritesPage;
