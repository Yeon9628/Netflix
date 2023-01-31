import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';

const MovieRelated = ({ related }) => {
  const { genreList } = useSelector(state => state.movie);
  
  return (
    <div className='related_movies' >
      {related.results && related.results.map((Array, index) => (
        <a
        href={`/movie/${Array.id}`}
          key={index}
          className='card'
          style={{backgroundImage:`url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${Array.backdrop_path})`}}>
          <div className='overlay'>
            <h4>{Array.title}</h4>
            <div>
              {Array.genre_ids.map((id, index) => (
                <Badge bg="danger" className='card_badge' key={index}>
                  {genreList.find(item => item.id == id).name}
                </Badge>
              ))}
            </div>
            <div className='evaluation'>
              <span><FontAwesomeIcon icon={faSquarePollHorizontal} className='movie_average' />{Array.vote_average}</span>
              <span><FontAwesomeIcon icon={faUsers} className='movie_popularity' />{Array.popularity}</span>
              <span className='movie_adult'>{Array.adult ? "청불" : "Under 18"}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default MovieRelated;