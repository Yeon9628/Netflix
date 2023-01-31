import api from '../api';

const API_KEY = process.env.REACT_APP_API_KEY;

function getDetails({ id }) {
  return async (dispatch) => {
    try {
      dispatch ({ type: "GET_DETAILS_REQUEST" });
      const detailsApi = api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
      const trailerApi = api.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
      const reviewsApi = api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
      const relatedApi = api.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);

      // 여러개의 api를 병렬적으로 받아오기위해 Promise.all을 사용
      let [movieDetails, movieTrailer, movieReviews, movieRelated] = await Promise.all([
        detailsApi,
        trailerApi,
        reviewsApi,
        relatedApi,
      ]);
      
      dispatch ({
        type: "GET_DETAILS_SUCCESS",
        payload: {
          movieDetails: movieDetails.data,
          movieTrailer: movieTrailer.data,
          movieReviews: movieReviews.data,
          movieRelated: movieRelated.data,
        },
      });
    } catch (error) {
      dispatch ({ type: "GET_DETAILS_FAILURE" })
    }
  }
}

export const detailsAction = { getDetails };