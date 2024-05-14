import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import { getEventsList } from "../../redux/eventsOperations";
import { selectEvents } from "../../redux/eventsSelectors";
import EventsList from "../../components/EventsList";
import PaginationList from "../../components/PaginationList";

const EventsBoardPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const eventsData = useSelector(selectEvents);

  useEffect(() => {
    dispatch(getEventsList(page));
  }, [dispatch, page]);

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container">
      <Title text={"Events"} />
      {eventsData.events?.length > 0 && (
        <EventsList listToRender={eventsData.events} />
      )}
      <div>
        <PaginationList
          page={page}
          handlePage={handlePage}
          totalPages={eventsData?.totalPages}
        />
      </div>
    </div>
  );
};

export default EventsBoardPage;
