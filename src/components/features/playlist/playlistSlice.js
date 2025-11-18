import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPlaylist from "../../API";
import Storage from "../../LocalStore";

export const fetchPlaylist = createAsyncThunk(
  "playlist/fetchPlaylist",
  async (playlistId) => {
    const allPlaylist = await getPlaylist(playlistId);
    return allPlaylist;
  }
);

const initialState = {
  playlists: [],
  isError: "",
  isLoading: false,
};

const PlaylistSlice = createSlice({
  name: "PlaylistReducer",
  initialState,
  reducers: {
    removePlaylist: (state, action) => {
      const playlist = state.playlists.filter(item => item.playlistId !== action.payload);
      state.playlists = playlist
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylist.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(fetchPlaylist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = "";

        const id = action.payload.playlistId;
        const exist = state.playlists.some(item => item.playlistId === id);

        if (!exist) {
          state.playlists.push(action.payload)
          Storage.setItem('Playlists', action.payload)
        };
        if (exist) console.log("Exist !");
      })
      .addCase(fetchPlaylist.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { removePlaylist, isError, isLoading, playlists } = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
