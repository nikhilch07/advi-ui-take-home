import React, { useState } from "react";
import SearchBox from './SearchBar';
import useMovieVerseStore from '../../store/movieverseStore';

const SearchBarContainer = () => {
    const [searchText, setSearchText] = useState('');
    const { filteredMovies, moviesList, setFilteredMovies, setCurrentPage, setTotalPages, setCurrentMovies } =
useMovieVerseStore();

    const handleChange = (text: string) => {
        setSearchText(text)
      }

      const handleSearch = () => {  
        let searchedMovies = filteredMovies;
        setCurrentPage(1);
        if(searchText !== ''){
            searchedMovies = moviesList.filter((movie) => 
            Object.values(movie).some((value) => 
            value.toString().toLowerCase().includes(searchText.toLocaleLowerCase())))
        }
        setFilteredMovies(searchedMovies);
        setCurrentMovies(searchedMovies.slice(0,8))
        setTotalPages(Math.ceil(searchedMovies.length / 8))
        return searchedMovies;
      }

      const onCancelSearch= () => {
        setCurrentPage(1);
        setCurrentMovies(moviesList.slice(0,8))
        setTotalPages(Math.ceil(moviesList.length / 8))
        setFilteredMovies(moviesList)
      } 

  return (
    <SearchBox 
    searchText={searchText} 
    handleChange={handleChange}
    handleSearch={handleSearch} 
    onCancelSearchRequest={onCancelSearch}
    />
  )
}

export default SearchBarContainer