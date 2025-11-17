import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: {
    playlistId: [],
    videoId: [],
    index: [],
  },
  isError: "",
  isLoading: false,
};

const HistorySlice = createSlice({
  name: "HistoryReducer",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      const { playlistId, videoId } = action.payload;

      if (playlistId && videoId) {
        state.history.playlistId.push(playlistId);
        state.history.videoId.push(videoId);
      } else {
        console.log("PlaylistId or VideoId are Not Found !");
      }
    },
    removeAllHistory: (state, action) => {
      state.history.playlistId = [];
      state.history.videoId = [];
    },
  },
});

export const { addHistory, removeAllHistory, isError, isLoading } =
  HistorySlice.actions;
export default HistorySlice.reducer;
