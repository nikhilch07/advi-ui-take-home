import React from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import Filter from "./Filter";
import useMovieVerseStore from "../../store/movieverseStore";
import { ratingFilter, trendingFilter } from "../../utils/applyFilters";
import { slicePages, sliceMovies } from "../../utils/sliceItems";
import type { ContainerProps } from "./Filter.types";

const FilterContainer = ({ filterOptions }: ContainerProps) => {
  const {
    moviesList,
    setFilteredMovies,
    setCurrentPage,
    setTotalPages,
    setCurrentMovies,
    ratingFilterOption,
    trendingFilterOption,
    setRatingFilterOption,
    setTrendingFilterOption,
  } = useMovieVerseStore();

  const handleChange = (event: SelectChangeEvent) => {
    const { type } = filterOptions;
    const {
      target: { value },
    } = event;
    setCurrentPage(1);
    type === "Rating"
      ? setRatingFilterOption(value as string)
      : setTrendingFilterOption(value as string);
    const filterMovies =
      type === "Rating"
        ? ratingFilter(moviesList, value)
        : trendingFilter(moviesList, value);
    setFilteredMovies(filterMovies);
    setCurrentMovies(sliceMovies(filterMovies));
    setTotalPages(slicePages(filterMovies));
  };

  return (
    <Filter
      handleChange={handleChange}
      selectedFilterOption={
        filterOptions.type === "Rating"
          ? ratingFilterOption
          : trendingFilterOption
      }
      filterOptions={filterOptions.options}
      filterType={filterOptions.type}
    />
  );
};

export default FilterContainer;
