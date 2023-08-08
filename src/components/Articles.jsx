import React, { useEffect } from 'react'
import ArticleFormat from './ArticleFormat'
import { useDispatch, useSelector } from 'react-redux'
import { loadTweets } from '../redux/slices/tweetsSlice'
import { fetchTweets } from '../redux/slices/tweetsSlice'

const Articles = () => {

  const tweets = useSelector(loadTweets);
  const disptach = useDispatch();


  
  
  return (
    <div className="articles">
        <ArticleFormat/>
        </div>
  )
}

export default Articles