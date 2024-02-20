import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    urlRes: {},
    genres: {}
}
const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        getApiConfiguration: (state, action) => {
            state.urlRes = action.payload
        },
        getGenres: (state, action) => {
            state.genres = action.payload
        }
    }
})


export default homeSlice.reducer
export const {getApiConfiguration, getGenres }= homeSlice.actions