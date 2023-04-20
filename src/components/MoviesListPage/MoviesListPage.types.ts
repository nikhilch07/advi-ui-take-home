import { ResponseTypes } from "../../store/movieverseStore";
export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  movies: ResponseTypes["results"];
  totalPages: number;
  totalResults: number;
  clearFilters: () => void;
}

interface SharedProps {}
