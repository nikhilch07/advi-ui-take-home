import { MovieDetails } from "../../store/movieverseStore";

export interface ContainerProps extends SharedProps {
  movies: MovieDetails[];
}

export interface Props extends SharedProps {
  movie: MovieDetails;
}

interface SharedProps {}
