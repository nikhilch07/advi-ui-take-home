import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import type { Props } from "./MovieCards.types";
import { Avatar } from "@mui/material";
import { MOVIE_POSTER_PREFIXURL } from "../../constants";

const MovieCards = ({ movie }: Props) => {
  const cardStyle = {
    color: "#2A2F4F",
    fontWeight: "bold",
    fontSize: "0.8125rem",
    lineHeight: "1.25",
    letterSpacing: "normal",
    textTransform: "initial",
  };

  return (
    <Card sx={{ minWidth: 230, maxWidth: 230, height: 1 }}>
      <CardMedia
        sx={{
          height: 345,
          minWidth: 230,
          maxWidth: 230,
          backgroundSize: "contain",
        }}
        image={`${MOVIE_POSTER_PREFIXURL}${movie.poster_path}`}
        title={movie.title}
      />
      <CardActions sx={{ justifyContent: "space-around" }}>
        <Button size="small" sx={cardStyle}>
          {movie.title}
        </Button>
        <Avatar sx={{ bgcolor: "#2A2F4F" }}>
          {Number(movie.vote_average.toFixed(1))}
        </Avatar>
      </CardActions>
    </Card>
  );
};

export default MovieCards;
