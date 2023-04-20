export interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  moviesList: MovieDetails[] | undefined;
}

export interface Genres {
  id: number;
  name: string;
}

export interface ResponseTypes {
  page?: number;
  results: MovieDetails[];
  total_pages?: number;
  total_results?: number;
}

export interface InitialState {
  moviesList: MovieDetails[];
  genres: Genres[];
  selectedGenres: ResponseTypes["results"];
  selectedGenresIds: number[];
}

export const initialState: InitialState = {
  moviesList: [],
  genres: [],
  selectedGenres: [],
  selectedGenresIds: [],
};

export type Action =
  | { type: "SET_MOVIES_LIST"; payload: MovieDetails[] }
  | { type: "SET_GENRES"; payload: Genres[] }
  | { type: "SET_SELECTED_GENRES"; payload: ResponseTypes["results"] }
  | { type: "SET_SELECTED_GENRES_IDS"; payload: number[] };

export function movieListReducer(
  state: InitialState,
  action: Action
): InitialState {
  switch (action.type) {
    case "SET_MOVIES_LIST":
      state.moviesList = [];
      const updatedMoviesList = [...state.moviesList, ...action.payload];
      return { ...state, moviesList: updatedMoviesList };
    case "SET_GENRES":
      const setGenres = [...state.genres, ...action.payload];
      return { ...state, genres: setGenres };
    case "SET_SELECTED_GENRES":
      const selectedGenres = [...state.selectedGenres, ...action.payload];
      return { ...state, selectedGenres: selectedGenres };
    case "SET_SELECTED_GENRES_IDS":
      state.selectedGenresIds = [];
      const selectedGenresIds = [...state.selectedGenresIds, ...action.payload];
      return { ...state, selectedGenresIds: selectedGenresIds };
    default:
      return state;
  }
}
