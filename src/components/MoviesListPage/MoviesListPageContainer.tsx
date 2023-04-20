import React, { useEffect } from "react";
import MoviesListPage from "./MoviesListPage";
import useFetchMoviesList from "../../handlers/useFetchMoviesList";
import useMovieVerseStore from "../../store/movieverseStore";
import { sliceMovies, slicePages } from "../../utils/sliceItems";

const MoviesListPageContainer = () => {
  const { moviesData } = useFetchMoviesList();
  const {
    moviesList,
    currentMovies,
    setMoviesList,
    setFilteredMovies,
    setTotalPages,
    setCurrentMovies,
    setRatingFilterOption,
    setTrendingFilterOption,
    setGenreFilterOption
  } = useMovieVerseStore();

  useEffect(() => {
    const { results } = moviesData;
    if (results?.length > 0) {
      setMoviesList(results);
      setFilteredMovies(results);
      setCurrentMovies(sliceMovies(results));
      setTotalPages(slicePages(results));
    }
  }, [moviesData]);

  const clearFilters = () => {
    setRatingFilterOption("");
    setTrendingFilterOption("");
    setGenreFilterOption([]);
    setFilteredMovies(moviesList);
    setCurrentMovies(sliceMovies(moviesList));
    setTotalPages(slicePages(moviesList));
  };

  return (
    <MoviesListPage
      movies={currentMovies || []}
      totalPages={moviesData.total_pages || 0}
      totalResults={moviesData.total_results || 0}
      clearFilters={clearFilters}
    />
  );
};

export default MoviesListPageContainer;
