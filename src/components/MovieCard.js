import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons'

const MovieCard = ({ item }) => {
  const { genreList } = useSelector(state => state.movie);
  const navigate = useNavigate();
  const movieDetailPage = () => {
    navigate(`/movie/${item.id}`);
  }

  return (
    <div
      className='card'
      style={{
        backgroundImage:
          `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${ item.poster_path })`
      }}
      onClick={movieDetailPage}
    >
      <div className='overlay'>
        <h4>{item.title}</h4>
        <div>
          {item.genre_ids.map((id, index) => (
            <Badge bg="danger" className='card_badge' key={index}>
              {genreList.find(item => item.id == id).name}
            </Badge>
          ))}
        </div>
        <div className='evaluation'>
          <span><FontAwesomeIcon icon={faSquarePollHorizontal} className='movie_average' />{item.vote_average}</span>
          <span><FontAwesomeIcon icon={faUsers} className='movie_popularity' />{item.popularity}</span>
          <span className='movie_adult'>{item.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;