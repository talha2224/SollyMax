import { createSlice } from "@reduxjs/toolkit";

const initialState = false


const toogleSidebar = createSlice({
    name:"toogleSidebar",
    initialState,
    reducers:{
        toogle(state){return state= !state}
    }
})

export const {toogle} = toogleSidebar.actions

export default toogleSidebar.reducer