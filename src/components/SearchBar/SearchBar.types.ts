import { ChangeEvent } from "react";

export interface ContainerProps extends SharedProps {
    //  movies: ResponseTypes["results"]
    //  resultsPerPage: number;
  }

  export interface Props extends SharedProps {
   searchText: string;
   handleChange: (query:string) => void;
   handleSearch: () => void;
   onCancelSearchRequest: () => void;
  }

  export interface SharedProps {}