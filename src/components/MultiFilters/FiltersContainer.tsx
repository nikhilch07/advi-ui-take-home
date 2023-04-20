import React from "react";
import { useTheme } from "@mui/material/styles";
import { SelectChangeEvent } from "@mui/material/Select";
import Filters from "./Filters";
import useFetchGenresList from "../../handlers/useFetchGenresList";
import useMovieVerseStore from "../../store/movieverseStore";
import { slicePages, sliceMovies } from "../../utils/sliceItems";
import { genreFilter } from "../../utils/applyFilters";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FiltersContainter = () => {
  const theme = useTheme();
  const {
    moviesList,
    setFilteredMovies,
    genreFilterOption,
    setGenreFilterOption,
    setCurrentPage,
    setTotalPages,
    setCurrentMovies,
  } = useMovieVerseStore();
  const { genresData } = useFetchGenresList();

  const handleChange = (event: SelectChangeEvent<typeof genresNames>) => {
    setCurrentPage(1);
    const {
      target: { value },
    } = event;
    setGenreFilterOption(typeof value === "string" ? value.split(",") : value);
    const getSelectedGenreId = genresData
      .filter((genre) => value.includes(genre.name))
      .map((genre) => genre.id);
    const filterBasedOnGenre = genreFilter(moviesList, getSelectedGenreId);
    setFilteredMovies(filterBasedOnGenre);
    setCurrentMovies(sliceMovies(filterBasedOnGenre));
    setTotalPages(slicePages(filterBasedOnGenre));
  };

  return (
    <Filters
      genres={genresData}
      genresNames={genreFilterOption}
      changeSelection={handleChange}
      theme={theme}
      MenuProps={MenuProps}
    />
  );
};

export default FiltersContainter;
