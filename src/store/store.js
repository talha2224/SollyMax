import { configureStore } from "@reduxjs/toolkit";
import toogleSidebar from "./sidebar.slice";


export const store = configureStore({
    reducer:
    {
        toogleSidebar:toogleSidebar
    }
})

