export const selectEvents = (state) => state.eventsList;
export const selectError = (state) => state.events.error;
export const selectIsLoading = (state) => state.events.isLoading;
export const selectEventParticipants = (state) =>
  state.events.eventParticipants;
export const selectFavorites = (state) => state.events.favorites;
export const selectFilter = (state) => state.events.filter;
