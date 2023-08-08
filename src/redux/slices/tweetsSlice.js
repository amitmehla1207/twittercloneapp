import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tweets: [],
  status: "idle",
  error: null,
  test: 1,
};

const DATA_API = "https://www.jsonkeeper.com/b/O96W";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
};

export const fetchTweets = createAsyncThunk("data/tweets.json", async () => {
  const res = await axios
    .get(DATA_API, config)
    .catch((error) => console.log(error));
  //console.log(res);
  return res;
});

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    testClick: (state, action) => {
      state.test++;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTweets.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.status = "success";
        state.tweets = action.payload;
      });
  },
});

export const loadTweets = (state) => state.tweets.tweets;
export const loadTest = (state) => state.tweets.test;

export const { testClick } = tweetsSlice.actions;

export default tweetsSlice.reducer;
