import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi } from '@reduxjs/toolkit/query'
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const initialState = {
  tweets: [],
  status: "idle",
  error: null,
  test: 1,
};


export const fetchTweets = createAsyncThunk("", async () => {
  const res = await fetch('http://localhost:3000/data/tweets.json')
    .catch((error) => console.log(error));
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
        //state.tweets = action.payload;
      });
  },
});



export const loadTweets = (state) => state.tweets.tweets;
export const loadTest = (state) => state.tweets.test;

export const { testClick } = tweetsSlice.actions;

export default tweetsSlice.reducer;
