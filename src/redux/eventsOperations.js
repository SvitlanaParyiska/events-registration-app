import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addEventParticipant,
  getAllEvents,
  getEventById,
} from "../api/eventsApi";

export const getEventsList = createAsyncThunk(
  "events/getEvents",
  async ({ page, title, date, organizer }, thunkAPI) => {
    try {
      const data = await getAllEvents(page, title, date, organizer);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getEventInfo = createAsyncThunk(
  "events/eventById",
  async (id, thunkAPI) => {
    try {
      const data = await getEventById(id);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewParticipant = createAsyncThunk(
  "events/addParticipant",
  async ({ id, body }, thunkAPI) => {
    console.log(id, body);
    try {
      const data = await addEventParticipant(id, body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
