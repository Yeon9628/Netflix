import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <div>
      <div className='rev_box'>
        {reviews.results && reviews.results.map(({author, content}, index) => (
          <div key={index} className='rev'>
            <h5>{author}</h5>
            <h6>{content}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieReviews;