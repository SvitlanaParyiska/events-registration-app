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
  searchName: "",
  searchEmail: "",
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
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      const index = state.favorites.findIndex((item) => item._id === payload);
      state.favorites.splice(index, 1);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setSearchName(state, { payload }) {
      state.searchName = payload;
    },
    setSearchEmail(state, { payload }) {
      state.searchEmail = payload;
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

export const {
  addFavorite,
  removeFavorite,
  setFilter,
  setSearchName,
  setSearchEmail,
} = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
