import React, { useContext, useEffect } from 'react'
import ArticleFormat from './ArticleFormat'

import { useTweetContext } from '../context/tweetContext'
import Loader from './Loader';


const Articles = () => {


  const context = useTweetContext();

  const loading = context.isLoading;


  const mapper = context.tweets.map(elm=><ArticleFormat key={elm.id} payload={elm}/>)
  
  return (
    <div className="articles">
      
       {loading ? <div className="d-flex j-center" style={{marginTop:"12px"}}><Loader/></div> : mapper}
        </div>
  )
}

export default Articles

