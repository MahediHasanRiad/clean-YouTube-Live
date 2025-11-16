import { configureStore } from '@reduxjs/toolkit'
import PlaylistSlice from '../components/features/playlist/playlistSlice'
import FavouriteSlice from '../components/features/favourite/favouriteSlice'

const Store = configureStore({
    reducer: {
        Playlist: PlaylistSlice,
        Favourite: FavouriteSlice
    }
})

export default Store