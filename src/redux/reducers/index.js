import { combineReducers } from "redux";
import movieReducer from './movieReducer';
import moviesReducer from './moviesReducer';
import detailsReducer from './detailsReducer';

export default combineReducers({
  movie: movieReducer,
  movies: moviesReducer,
  details: detailsReducer,
});