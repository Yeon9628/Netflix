import api from '../api';

const API_KEY = process.env.REACT_APP_API_KEY;

function getPage(page) {
  return async (dispatch) => {
    try {
      dispatch ({ type: "GET_MOVIES_REQUEST" });
      const moviePageApi = api.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`);
      let [moviePage] = await Promise.all([moviePageApi]);
      dispatch({ type: "GET_PAGE_SUCCESS", payload: { moviePage: moviePage.data }});
    } catch (error) {
      dispatch ({ type: "GET_MOVIES_FAILURE" });
    }
  }
}

function getGenres(id) {
  return async (dispatch) => {
    try {
      dispatch ({ type: "GET_MOVIES_REQUEST" });
      const movieGenresApi = api.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&with_genres=${id}`);
      let [movieGenres] = await Promise.all([movieGenresApi]);
      dispatch({ type: "GET_GENRES_SUCCESS", payload: { movieGenres: movieGenres.data }});
    } catch (error) {
      dispatch ({ type: "GET_MOVIES_FAILURE" });
    }
  }
}

function getSearch(value) {
  return async (dispatch) => {
    try {
      dispatch ({ type: "GET_MOVIES_REQUEST" });
      const searchApi = api.get(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${value}`);
      let [search] = await Promise.all([searchApi]);
      dispatch({ type: "GET_SEARCH_SUCCESS", payload: { search: search.data }});
    } catch (error) {
      dispatch ({ type: "GET_MOVIES_FAILURE" });
    }
  }
}

export const moviesAction = { getPage, getGenres, getSearch };