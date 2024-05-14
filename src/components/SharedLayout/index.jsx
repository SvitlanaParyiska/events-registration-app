import Header from "../Header";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectIsLoading } from "../../redux/eventsSelectors";
import Loader from "../Loader";

const SharedLayout = () => {
  const loading = useSelector(selectIsLoading);

  return (
    <>
      <Header />
      <main>
        {loading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
