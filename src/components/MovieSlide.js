import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
  desktop: {
    breakpoint: {max: 4000, min: 1530},
    items: 5
  },
  desktop2: {
    breakpoint: {max: 1530, min: 1220},
    items: 4
  },
  desktop3: {
    breakpoint: {max: 1220, min: 1024},
    items: 3
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1
  }
};

const MovieSlide = ({ movies }) => {
  return (
    <div>
      <Carousel className='sid' responsive={responsive}>
        {movies.results.map((item, index) => (<MovieCard item={item} key={index} />))}
      </Carousel>
    </div>
  )
}

export default MovieSlide;