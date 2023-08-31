import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "./tweetReducer";

const TweetContext = createContext();

const url = '../../data/tweets.json';

const initialState = {
    tweets: [],
    isLoading: true,
}

export const TweetContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const FetchTweets = async (data) => {
        try {
            let res;
            res = await fetch(data)
            .then(resp=> resp.json());
            dispatch({type:"SET_DATA", payload: res})
            dispatch({type: "LAODING"});
        } catch (error) {
            dispatch({type:"ERROR"});
        }
       
        
    }

    const PostTweet = (tweetContent) =>{
        dispatch({type:"NEW_TWEET", payload: tweetContent})
    }

    useEffect(()=>{
        setTimeout(()=>{FetchTweets(url);},2000)
        
    },[])
  return (
   <TweetContext.Provider value={{...state, PostTweet}}>
    {children}
   </TweetContext.Provider>
  )
}



export const useTweetContext = () => {
    return useContext(TweetContext);
  };