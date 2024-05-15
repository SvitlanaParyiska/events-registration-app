import axios from "axios";

axios.defaults.baseURL = "https://events-registration-app-back.onrender.com/";

export const getAllEvents = async (
  page,
  title = "",
  date = "",
  organizer = ""
) => {
  const { data } = await axios.get("events", {
    params: {
      page,
      title,
      date,
      organizer,
    },
  });
  return data;
};

export const getEventById = async (id) => {
  const { data } = await axios.get(`events/${id}`);
  return data;
};

export const addEventParticipant = async (id, newItem) => {
  const { data } = await axios.post(`events/participants/${id}`, newItem);
  return data;
};
