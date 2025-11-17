import { configureStore } from '@reduxjs/toolkit'
import PlaylistSlice from '../components/features/playlist/playlistSlice'
import FavouriteSlice from '../components/features/favourite/favouriteSlice'
import HistorySlice from '../components/features/history/HistorySlice'

const Store = configureStore({
    reducer: {
        Playlist: PlaylistSlice,
        Favourite: FavouriteSlice,
        History: HistorySlice
    }
})

export default Store