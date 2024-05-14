import axios from "axios";

axios.defaults.baseURL = "https://events-registration-app-back.onrender.com/";

export const getAllEvents = async () => {
  const { data } = await axios.get("events");
  return data;
};

export const getEventParticipants = async (id) => {
  const { data } = await axios.get(`events/participants/${id}`);
  return data;
};

export const addEventParticipant = async (id, newItem) => {
  const { data } = await axios.post(`events/participants/${id}`, newItem);
  return data;
};
