import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import React, { useState } from 'react';
import MovieDetail from './pages/MovieDetail';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. 3개 페이지 필요 -> 홈페이지, movie페이지, movieDetail페이지
// 2. 홈페이지에서 배너를 볼 수 있다.
// 3. 3가지 섹션의 영화를 볼 수 있다. (popular, top rated, upcoming)
// 4. 각 영화에 마우스를 올려두면 영화의 제목과 장르, 평점, 인기도, 청불여부를 볼 수 있다.
// 5. 각각의 영화 리스트는 슬라이드 형태로 넘길 수 있다.

// 6. 영화 카드를 클릭하면 영화의 상세 정보를 볼 수 있다.
// 6-1. 상세 정보에는 포스터, 영화 제목, 평점, 인기도 청불여부, 줄거리 요약, 예산, 날짜, 시간, 리뷰, 예고편, 관련영화 등이 있다.
// 6-2. trailer를 누르면 trailer 볼 수 있다.
// 6-3. 영화 리뷰도 볼 수 있다.
// 6-4. 선택한 영화와 관련된 추천 영화도 볼 수 있다.

// 7. 영화 검색을 할 수 있다.
// 8. 영화를 인기도순으로 정렬할 수 있다.
// 9. 영화 장르별로 필터링 할 수 있다.
// 10. 영화 날짜별로 필터링 할 수 있다.

function App() {
  const [search, setSearch] = useState('');
  const searchProps = (key) => {
    setSearch(key);
  }
  
  return (
    <div className='main'>
      <Navigation searchProps={searchProps} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies value={search} />} />
        <Route path='/movie/:id' element={<MovieDetail/>} />
      </Routes>
    </div>
  );
}

export default App;