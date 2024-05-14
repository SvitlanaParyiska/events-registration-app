import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addEventParticipant,
  getAllEvents,
  getEventParticipants,
} from "../api/eventsApi";

export const getEventsList = createAsyncThunk(
  "events/getEvents",
  async (page, thunkAPI) => {
    try {
      const data = await getAllEvents();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getParticipantsList = createAsyncThunk(
  "events/getParticipants",
  async (id, thunkAPI) => {
    try {
      const data = await getEventParticipants(id);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewParticipant = createAsyncThunk(
  "events/addParticipant",
  async ({ id, body }, thunkAPI) => {
    try {
      const data = await addEventParticipant(id, body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
