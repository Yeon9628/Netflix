let initialState = {
  moviePage: {},
  movieGenres: {},
  search: {},
  loading: true,
};

function moviesReducer(state = initialState, action) {
  let { type, payload } = action;
  switch(type) {
    case "GET_MOVIES_REQUEST":
      return {...state, loading: true};
    case "GET_PAGE_SUCCESS":
      return {
        ...state,
        moviePage: payload.moviePage,
        loading: false,
      };
    case "GET_GENRES_SUCCESS":
      return {
        ...state,
        movieGenres: payload.movieGenres,
        loading: false,
      };
    case "GET_SEARCH_SUCCESS":
      return {
        ...state,
        search: payload.search,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return {...state, loading: false};
    default:
      return {...state};
  }
}

export default moviesReducer;