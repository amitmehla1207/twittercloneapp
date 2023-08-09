import { configureStore } from "@reduxjs/toolkit";
import tweetsSlice from "./slices/tweetsSlice";
import globalSlice from "./slices/globalSlice";


export const store = configureStore({
    reducer:{
        tweets: tweetsSlice,
        globalslice: globalSlice
    }
});
