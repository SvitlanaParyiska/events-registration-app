import { createSlice } from "@reduxjs/toolkit";
import { getEventInfo, getEventsList } from "./eventsOperations";

const initialState = {
  eventsList: {
    events: [],
    totalPages: 1,
  },
  eventFull: null,
  favorites: [],
  filter: { title: "", date: "", organizer: "" },
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
  reducers: {
    addFavorite: (state, { payload }) => {
      const isUserId = state.favorites.findIndex(
        (item) => item.userId === payload.userId
      );
      if (isUserId === -1) {
        state.favorites.push({ userId: payload.userId, list: [payload.item] });
      } else {
        state.favorites[isUserId].list.push(payload.item);
      }
    },
    removeFavorite: (state, { payload }) => {
      const isUserId = state.favorites.findIndex(
        (item) => item.userId === payload.userId
      );
      const index = state.favorites[isUserId].list.findIndex(
        (item) => item.name === payload.itemName
      );
      state.favorites[isUserId].list.splice(index, 1);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getEventsList.fulfilled, (state, { payload }) => {
        state.eventsList.events = payload.events;
        state.eventsList.totalPages = payload.pages;
      })
      .addCase(getEventInfo.fulfilled, (state, { payload }) => {
        state.eventFull = payload;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const { addFavorite, removeFavorite, setFilter } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
