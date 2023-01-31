let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  loading: true,
  genreList: [],
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch(type) {
    case "GET_MOVIE_REQUEST":
      return {...state, loading: true}
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_MOVIE_FAILURE":
      return {...state, loading: false};
    default:
      return {...state};
  }
}

export default movieReducer;