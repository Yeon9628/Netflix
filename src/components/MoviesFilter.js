import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const MoviesFilter = ({ genreList, valueProps, filterProps }) => {
  const [select, setSelect] = useState('');
  const [sortClosed, setSortClosed] = useState(false);
  const [filterClosed, setFilterClosed] = useState(false);
  const menuItem = [
    {value: 1, name: 'Popularity(Desc)'},
    {value: 2, name: 'Popularity(Asc)'},
    {value: 3, name: 'Release Day(Desc)'},
    {value: 4, name: 'Release Day(Asc)'},
    {value: 5, name: 'Vote(Desc)'},
    {value: 6, name: 'Vote(Asc)'},
  ]
  
  const handleChange = (e) => {
    setSelect(e.target.value);
    valueProps(e.target.value);
  };
  const genresFilter = (id) => {
    filterProps(id);
  }

  return (
    <div>
      <div>
        <div className={sortClosed ? 'sort_section closed' : 'sort_section'} >
          <div className='name' onClick={() => {setSortClosed(!sortClosed)}}>
            <h5>Sort</h5>
            <span><FontAwesomeIcon icon={faArrowRight} aria-hidden='true' className='icon' /></span>
          </div>
          <div className='filter'>
            <div className='filter_by_dropdown'>
              <h5>Sort Results By</h5>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                <InputLabel id="select_label">Sort By</InputLabel>
                <Select
                  labelId="select_label"
                  id="select_standard"
                  value={select}
                  onChange={handleChange}
                  label="Sort By"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  {menuItem.map(({value, name}, index) => (
                    <MenuItem value={value} key={index}>{name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        <div className={filterClosed ? 'sort_section closed' : 'sort_section'}>
          <div className='name' onClick={() => {setFilterClosed(!filterClosed)}}>
            <h5>Filter</h5>
            <span><FontAwesomeIcon icon={faArrowRight} aria-hidden='true' className='icon' /></span>
          </div>
          <div className='filter'>
            <div className='filter_by_dropdown'>
              <h5>Genres</h5>
              <ul className='genres_filter'>
                {genreList.map(({id, name}, index) => (
                  <li className='genres_btn' onClick={() => genresFilter(id)} key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesFilter;