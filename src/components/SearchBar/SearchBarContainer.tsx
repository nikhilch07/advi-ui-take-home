import React, { useState } from "react";
import SearchBox from "./SearchBar";
import useMovieVerseStore from "../../store/movieverseStore";
import { slicePages, sliceMovies } from "../../utils/sliceItems";

const SearchBarContainer = () => {
  const [searchText, setSearchText] = useState("");
  const {
    filteredMovies,
    moviesList,
    setFilteredMovies,
    setCurrentPage,
    setTotalPages,
    setCurrentMovies,
  } = useMovieVerseStore();

  const handleChange = (text: string) => {
    setSearchText(text);
  };

  const handleSearch = () => {
    let searchedMovies = moviesList;
    setCurrentPage(1);
    if (searchText !== "") {
      searchedMovies = moviesList.filter((movie) =>
        Object.values(movie).some((value) =>
          value
            .toString()
            .toLowerCase()
            .includes(searchText.toLocaleLowerCase())
        )
      );
    }
    setFilteredMovies(searchedMovies);
    setCurrentMovies(sliceMovies(searchedMovies));
    setTotalPages(slicePages(searchedMovies));
    return searchedMovies;
  };

  const onCancelSearch = () => {
    setCurrentPage(1);
    setCurrentMovies(sliceMovies(moviesList));
    setTotalPages(slicePages(moviesList));
    setFilteredMovies(moviesList);
  };

  return (
    <SearchBox
      searchText={searchText}
      handleChange={handleChange}
      handleSearch={handleSearch}
      onCancelSearchRequest={onCancelSearch}
    />
  );
};

export default SearchBarContainer;
