import React, { useState } from 'react';
import MovieRelated from './TabRelated';
import MovieReviews from './TabReviews';

const MovieDetailTab = ({ reviews, related }) => {
  const [index, setIndex] = useState(0);
  const data = [
    {
      id: 0,
      title: "REVIEWS",
      description: <MovieReviews reviews={reviews} />
    },
    {
      id: 1,
      title: "RELATED MOVIES",
      description: <MovieRelated related={related} />
    }
  ]

  return (
    <div>
      <section>
        <ul className='nav_link'>
          {data.map(item => (
            <li
              key={item.id}
              className={index === item.id ? 'select' : null}
              onClick={() => setIndex(item.id)}>
              {item.title}
              <span> ({item.id === 0 ? reviews.results && reviews.results.length : related.results && related.results.length})</span>
            </li>
          ))}
        </ul>
        {data.filter(item => index === item.id).map((item, index) => (
          <div key={index}>{item.description}</div>
        ))}
      </section>
    </div>
  )
}

export default MovieDetailTab;