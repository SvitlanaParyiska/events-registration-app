import EventsList from "../../components/EventsList";
import Title from "../../components/Title";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectFavorites } from "../../redux/eventsSelectors";

const EventsFavoritesPage = () => {
  const favArr = useSelector(selectFavorites);

  return (
    <div className="container">
      {favArr?.length > 0 ? (
        <>
          <Title text={"Your favorites list"} />
          <EventsList listToRender={favArr} />
        </>
      ) : (
        <>
          <p>Your favorites list is empty.</p>
          <Link to="/events">View the list of events</Link>
        </>
      )}
    </div>
  );
};

export default EventsFavoritesPage;
