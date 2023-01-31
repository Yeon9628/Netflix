let initialState = {
  movieDetails: {},
  movieTrailer: {},
  movieReviews: {},
  movieRelated: {},
  loading: true,
};

function detailsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch(type) {
    case "GET_DETAILS_REQUEST":
      return {...state, loading: true}
    case "GET_DETAILS_SUCCESS":
      return {
        ...state,
        movieDetails: payload.movieDetails,
        movieTrailer: payload.movieTrailer,
        movieReviews: payload.movieReviews,
        movieRelated: payload.movieRelated,
        loading: false,
      };
    case "GET_DETAILS_FAILURE":
      return {...state, loading: false};
    default:
      return {...state};
  }
}

export default detailsReducer;