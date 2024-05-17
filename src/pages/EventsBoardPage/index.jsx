import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import { getEventsList } from "../../redux/eventsOperations";
import {
  selectEvents,
  selectFilter,
  selectIsLoading,
} from "../../redux/eventsSelectors";
import EventsList from "../../components/EventsList";
import PaginationList from "../../components/PaginationList";
import FiltersEvents from "../../components/FiltersEvents";
import { BoxStyled } from "./EventsBoardPage.styled";

const EventsBoardPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const eventsData = useSelector(selectEvents);
  const filterSearch = useSelector(selectFilter);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getEventsList({ page, ...filterSearch }));
  }, [dispatch, filterSearch, page]);

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <section>
      <div className="container">
        <Title text={"Events"} />
        <FiltersEvents />
        {eventsData.events?.length > 0 && (
          <>
            <EventsList listToRender={eventsData.events} />
            <BoxStyled>
              <PaginationList
                page={page}
                handlePage={handlePage}
                totalPages={eventsData?.totalPages}
              />
            </BoxStyled>
          </>
        )}
        {loading && eventsData.events?.length > 0 && (
          <p>
            There are no events to this filters. Try to change filters params...
          </p>
        )}
      </div>
    </section>
  );
};

export default EventsBoardPage;
