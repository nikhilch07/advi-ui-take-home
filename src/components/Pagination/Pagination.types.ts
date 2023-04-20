import { ResponseTypes } from "../../store/movieverseStore";

export interface ContainerProps extends SharedProps {
  movies: ResponseTypes["results"];
  resultsPerPage: number;
}

export interface Props extends SharedProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export interface SharedProps {}
