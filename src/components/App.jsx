import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./../index.css";
// import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import SharedLayout from "./SharedLayout";
const HomePage = lazy(() => import("../pages/HomePage"));
const EventsPage = lazy(() => import("../pages/EventsBoardPage"));
const ParticipantsPage = lazy(() => import("../pages/EventParticipantsPage"));
const RegistrationPage = lazy(() => import("../pages/EventRegistrationPage"));
const FavoritesPage = lazy(() => import("../pages/EventsFavoritesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const App = () => {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="participants" element={<ParticipantsPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
