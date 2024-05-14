import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addEventParticipant,
  getAllEvents,
  getEventById,
} from "../api/eventsApi";
import toast from "react-hot-toast";

export const getEventsList = createAsyncThunk(
  "events/getEvents",
  async (page, thunkAPI) => {
    try {
      const data = await getAllEvents(page);
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

// export const getParticipantsList = createAsyncThunk(
//   "events/getParticipants",
//   async (id, thunkAPI) => {
//     try {
//       const data = await getEventParticipants(id);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const addNewParticipant = createAsyncThunk(
  "events/addParticipant",
  async ({ id, body }, thunkAPI) => {
    try {
      const data = await addEventParticipant(id, body);
      toast.success("You have successfully registration!");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
