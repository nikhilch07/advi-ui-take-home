import React from "react";
import Alert from "@mui/material/Alert";
import { Box, Container, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { MovieCards } from "../MovieCards";
import { Pagination } from "../Pagination";
import { Filter as TrendingFilter } from "../Filters";
import { Filter as RatingFilter } from "../Filters";
import { SearchBar } from "../SearchBar";
import { Filters } from "../MultiFilters";
import useFetchMoviesList from "handlers/useFetchMoviesList";
import {
  RATING_FILTER_OPTIONS,
  TRENDING_FILTER_OPTIONS,
} from "../../constants";
import type { Props } from "./MoviesListPage.types";

const MoviesListPage = ({ movies }: Props) => {
  const {  isLoadingFetchingData, isErrorFetchingData } =
    useFetchMoviesList();
  return (
    <Container>
      <Box px={4} py={4}>
        <Grid container rowSpacing={4} columnSpacing={2} mb={4}>
          <Grid item xs={12} md={12} lg={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <RatingFilter
              filterOptions={RATING_FILTER_OPTIONS}
              movies={movies}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TrendingFilter
              filterOptions={TRENDING_FILTER_OPTIONS}
              movies={movies}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Filters />
          </Grid>
        </Grid>
        {isErrorFetchingData && (
          <Alert severity="error">
            There is an error displaying. Please try again!
          </Alert>
        )}
        {!isErrorFetchingData && movies?.length === 0 && (
          <Alert severity="info">No Records found!</Alert>
        )}
        {(!isLoadingFetchingData && isLoadingFetchingData) && (<CircularProgress />)}
        <MovieCards movies={movies || []} />
        {!isErrorFetchingData && movies?.length !== 0 && (
          <Pagination movies={movies} resultsPerPage={8} />
        )}
      </Box>
    </Container>
  );
};

export default MoviesListPage;
