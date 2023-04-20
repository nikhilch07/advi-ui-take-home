import React from "react";
import Pagination from "./Pagination";
import useMovieVerseStore from "../../store/movieverseStore";

import type { ContainerProps } from "./Pagination.types";

const PaginationContainer = ({ movies, resultsPerPage }: ContainerProps) => {
  const {
    setCurrentMovies,
    filteredMovies,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useMovieVerseStore();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    const getPageItems = filteredMovies.slice((value - 1) * 8, value * 8);
    setCurrentMovies(getPageItems);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
    />
  );
};

export default PaginationContainer;
