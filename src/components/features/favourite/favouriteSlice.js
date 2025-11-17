import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: []
}

const FavouriteSlice = createSlice({
    name: 'FavouriteReducer',
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            const exist = state.favourites.includes(action.payload)

            if(exist) state.favourites.pop(action.payload)
            if(!exist) state.favourites.push(action.payload)
        },
        removeFavourite: (state, action) => {
            const remove = state.favourites.filter(item => item !== action.payload)
            state.favourites = remove
        }
    }
})

export const { addFavourite, removeFavourite } = FavouriteSlice.actions
export default FavouriteSlice.reducer