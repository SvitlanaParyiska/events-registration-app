import { createSelector } from "@reduxjs/toolkit";

export const selectEvents = (state) => state.events.eventsList;
export const selectError = (state) => state.events.error;
export const selectIsLoading = (state) => state.events.isLoading;
export const selectEventInfo = (state) => state.events.eventFull;
export const selectFavorites = (state) => state.events.favorites;
export const selectFilter = (state) => state.events.filter;
export const selectSearchName = (state) => state.events.searchName;
export const selectSearchEmail = (state) => state.events.searchEmail;

export const selectVisibleParticipants = createSelector(
  [selectEventInfo, selectSearchName, selectSearchEmail],
  (list, searchName, searchEmail) => {
    return list.participants.filter(
      (item) =>
        item.name.toLowerCase().includes(searchName) &&
        item.email.toLowerCase().includes(searchEmail)
    );
  }
);
