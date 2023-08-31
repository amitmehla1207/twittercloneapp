const tweetReducer = (action, state) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: false };

    case "SET_DATA":
      return { ...state, tweets: action.payload };

      case "NEW_TWEET":
        console.log('click done');
      return { ...state };


    default:
      return { ...state };
  }
};

export default tweetReducer;
