import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import Filter from './Filter';
import useMovieVerseStore from '../../store/movieverseStore';
import { ratingFilter, trendingFilter } from '../../utils/applyFilters';
import type { ContainerProps } from './Filter.types';

const FilterContainer = ({ filterOptions }: ContainerProps) => {
  const { moviesList, setFilteredMovies, setCurrentPage, setTotalPages, setCurrentMovies } = useMovieVerseStore();
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const { type } = filterOptions;
    const { target: { value } } = event;
    setCurrentPage(1);
    setSelectedOption(value as string);
    const filterMovies = type === 'Rating' ? ratingFilter(moviesList, value) : trendingFilter(moviesList, value);
    setFilteredMovies(filterMovies);
    setCurrentMovies(filterMovies.slice(0, 8));
    setTotalPages(Math.ceil(filterMovies.length / 8))
  };

  return (
    <Filter
      handleChange={handleChange}
      selectedOption={selectedOption}
      filterOptions={filterOptions.options}
      filterType={filterOptions.type}
    />
  )
}

export default FilterContainer