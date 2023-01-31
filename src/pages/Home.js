import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(state => state.movie);
  
  useEffect(() => {
    dispatch(movieAction.getMovie());
  },[]);

  // loading이 true면 loading 스피너를 보여주고 loading이 false면 데이터를 보여준다.
  // true: 데이터 도착 전
  // false: 데이터 도착 후, 에러가 났을 때
  if (loading) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />

      <div className='movie_slide'>
        <h1>Popular Movie</h1>
        <MovieSlide movies={popularMovies} />

        <h1>Top Movie</h1>
        <MovieSlide movies={topRatedMovies} />

        <h1>Upcoming Movie</h1>
        <MovieSlide movies={upcomingMovies} />
      </div>
    </div>
  )
}

export default Home;