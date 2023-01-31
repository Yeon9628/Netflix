import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import MoviesFilter from '../components/MoviesFilter';
import { ClipLoader } from 'react-spinners';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import { moviesAction } from '../redux/actions/moviesAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';

const Movies = ({ value }) => {
  const dispatch = useDispatch();
  const { loading, genreList } = useSelector(state => state.movie);
  const { moviePage, movieGenres, search } = useSelector(state => state.movies);
  const [id, setId] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const handlePageChange = (page) => {
    setPage(page);
  }
  const filterProps = (id) => {
    setId(id);
  }
  
  const valueProps = (num) => {
    const result_data = moviePage.results;
    if (num == '' || 1) {
      setData(() => ({...moviePage, results: result_data.sort((a, b) => b.popularity - a.popularity)}));
    } if (num == 2) {
      setData(() => ({...moviePage, results: result_data.sort((a, b) => a.popularity - b.popularity)}));
    } if (num == 3) {
      setData(() => ({...moviePage, results: result_data.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))}));
    } if (num == 4) {
      setData(() => ({...moviePage, results: result_data.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))}));
    } if (num == 5) {
      setData(() => ({...moviePage, results: result_data.sort((a, b) => b.vote_average - a.vote_average)}));
    } if (num == 6) {
      setData(() => ({...moviePage, results: result_data.sort((a, b) => a.vote_average - b.vote_average)}));
    }
  }

  useEffect(() => {
    setData(moviePage);
  }, [moviePage]);
  
  useEffect(() => {
    setData(search);
  }, [search]);

  useEffect(() => {
    setData(movieGenres);
  }, [movieGenres]);

  useEffect(() => {
    dispatch(movieAction.getMovie());
    dispatch(moviesAction.getPage(page));
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    if (value !== '') {
      dispatch(moviesAction.getSearch(value));
    } if (value === '') {
      dispatch(moviesAction.getPage(page));
    }
  }, [value]);

  useEffect(() => {
    dispatch(moviesAction.getGenres(id));
  }, [id]);

  if (loading && page == 1) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />
  }
  return (
    <div>
      <Container>
        <Row>
          <Col className='col-lg-4'>
            <MoviesFilter data={moviePage} genreList={genreList} valueProps={valueProps} filterProps={filterProps} />
          </Col>
          <Col className='col-lg-8'>
            <div className='movie_section_wrapper'>
              <div>
                <Row className='row'>
                  {data.results && data.results.map((data, index) => (
                  <Col className='col-lg-6' key={index}>
                    <a className='movie_card' id='bright' href={`/movie/${data.id}`} style={{backgroundImage:`url(https://image.tmdb.org/t/p/original//${data.backdrop_path})`}}>
                      <div className='info_section'>
                        <div className='movie_header'>
                          <img style={{backgroundImage:`url(https://image.tmdb.org/t/p/original//${data.poster_path})`}}/>
                          <h4>{data.title}</h4>
                          <h6>{data.release_date}</h6>
                          {data.genre_ids.map((id, index) => (
                            <Badge bg="danger" className='card_badge' key={index}>
                              {genreList.find(item => item.id == id).name}
                            </Badge>
                          ))}
                        </div>
                        <div className='movie_desc'>
                          <p>{data.overview}</p>
                        </div>
                        <div className='movie_social'>
                          <span><FontAwesomeIcon icon={faSquarePollHorizontal} className='movie_average' />{data.vote_average}</span>
                          <span><FontAwesomeIcon icon={faUsers} className='movie_popularity' />{data.popularity}</span>
                          <span className='movie_adult'>{data.adult ? "청불" : "Under 18"}</span>
                        </div>
                      </div>
                    </a>
                  </Col>
                  ))}
                  <div className='pagination'>
                    <Pagination
                      activePage={page}
                      itemsCountPerPage={20}
                      totalItemsCount={moviePage.total_results}
                      pageRangeDisplayed={5}
                      onChange={handlePageChange}
                    />
                  </div>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Movies;