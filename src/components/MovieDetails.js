import YouTube from 'react-youtube';
import React, { useState } from 'react';
import { Badge, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faSquarePollHorizontal, faUsers, faXmark } from '@fortawesome/free-solid-svg-icons'

const MovieDetails = ({ details, trailer}) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const onPlayerReady = (e) => {e.target.pauseVideo();}
  const opts = {
    width: '100%',
    height: '750',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div>
      <div>
        {details.genres && details.genres.map((data, index) => (
          <Badge pill bg="danger" className='genre_badge' key={index}>
            {data.name}
          </Badge>
        ))}
      </div>
      <h1 className='movie_title'>{details.title}</h1>
      <h5>{details.tagline}</h5>
      <div className='movie_evaluation'>
        <span><FontAwesomeIcon icon={faSquarePollHorizontal} className='movie_average' />{details.vote_average}</span>
        <span><FontAwesomeIcon icon={faUsers} className='movie_popularity' />{details.popularity}</span>
        <span className='movie_adult'>{details.adult ? "청불" : "Under 18"}</span>
      </div>
      <hr/>
      <span>{details.overview}</span>
      <hr/>
      <div className='etc'>
        <span><Badge pill bg="danger" className='badge'>Budget</Badge> ${details.budget}</span>
        <span><Badge pill bg="danger" className='badge'>Revenue</Badge> ${details.revenue}</span>
        <span><Badge pill bg="danger" className='badge'>Release Day</Badge> {details.release_date}</span>
        <span><Badge pill bg="danger" className='badge'>Time</Badge> {details.runtime}</span>
      </div>
      <hr/>
      <button className='btn theme_btn' onClick={() => setShowTrailer(true)}><FontAwesomeIcon icon={faFilm} /> Watch Trailer</button>
      <Modal size='xl' show={showTrailer} onHide={() => setShowTrailer(false)}>
        <Modal.Body bsPrefix='modal-body'>
          <FontAwesomeIcon icon={faXmark} className='modal_close' onClick={() => setShowTrailer(false)} />
          <YouTube videoId={trailer.results && trailer.results[0].key} opts={opts} onPlayerReady={onPlayerReady} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MovieDetails;