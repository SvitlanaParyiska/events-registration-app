import { createSlice } from "@reduxjs/toolkit";
import { getEventsList } from "./eventsOperations";

const initialState = {
  eventsList: [],
  eventParticipants: [],
  favorites: [],
  filter: "",
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getEventsList.fulfilled, (state, { payload }) => {
        state.eventsList = payload.events;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const eventsReducer = eventsSlice.reducer;
