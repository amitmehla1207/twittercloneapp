import { configureStore } from "@reduxjs/toolkit";
import tweetsSlice from "./slices/tweetsSlice";


export const store = configureStore({
    reducer:{
        tweets: tweetsSlice
    }
});
