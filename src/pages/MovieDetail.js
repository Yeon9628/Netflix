import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import { detailsAction } from '../redux/actions/detailsAction';
import MovieDetails from '../components/MovieDetails';
import MovieDetailTab from '../components/MovieDetailTab ';

const MovieDetail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const { movieDetails, movieTrailer, movieReviews, movieRelated, loading } = useSelector(state => state.details);
  
  useEffect(() => {
    dispatch(movieAction.getMovie());
    dispatch(detailsAction.getDetails({id}));
  },[]);

  if (loading) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />
  }
  return (
    <div className='detail'>
      <Container>
        <Row>
          <Col>
            <div 
              className='poster_img'
              style={{backgroundImage:`url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieDetails.poster_path})`}}>
            </div>
          </Col>
          <Col className='described'>
            <MovieDetails details={movieDetails} trailer={movieTrailer} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MovieDetailTab reviews={movieReviews} related={movieRelated} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetail;