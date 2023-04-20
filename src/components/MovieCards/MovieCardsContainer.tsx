import React from "react";
import MovieCards from "./MovieCards";
import type { ContainerProps } from './MovieCards.types';
import { Grid } from "@mui/material";

const MovieCardsContainer = ({ movies }: ContainerProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4, lg: 6 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
    >
      {movies.map((movie, index) => (
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          sm={4}
          md={4}
          lg={3}
          key={index}
        >
          <MovieCards movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieCardsContainer;
