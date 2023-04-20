import React, { useEffect } from "react";
import MoviesListPage from "./MoviesListPage";
import useFetchMoviesList from "../../handlers/useFetchMoviesList";
import useMovieVerseStore from "../../store/movieverseStore";

const MoviesListPageContainer = () => {
  const { moviesData } = useFetchMoviesList();
  const { currentMovies, setMoviesList, setFilteredMovies, setTotalPages, setCurrentMovies } =
    useMovieVerseStore();

  useEffect(() => {
    const { results } = moviesData;
    if (results?.length > 0) {
      setMoviesList(results);
      setFilteredMovies(results);
      setCurrentMovies(results.slice(0,8))
      setTotalPages( Math.ceil(results.length / 8))
    }
  }, [moviesData]);

  return (
      <MoviesListPage
        movies={ currentMovies || []}
        totalPages={moviesData.total_pages || 0}
        totalResults={moviesData.total_results || 0}
      />
  );
};

export default MoviesListPageContainer;
