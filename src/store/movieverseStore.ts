import { create } from 'zustand'

export interface ResponseTypes {
    page?: number;
    results?: MovieDetails[];
    total_pages?: number;
    total_results?: number;
}

export interface MovieDetails {
    id: number;
    title: string;  
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    genre_ids?: number[];
}

export interface Genres {
    id: number;
    name: string;
}

export interface SelectedGenres {
    page?: number;
    results: MovieDetails[];
    total_pages?: number;
    total_results?: number;
}

export interface MovieVersetore {
    movieDataResponse: ResponseTypes;
    moviesList: MovieDetails[];
    setMoviesList: (movieList: MovieDetails[]) => void;
    genres: Genres[];
    setGenres: (genres: Genres[]) => void;
    selectedGenres: SelectedGenres["results"];
    setSelectedGenres: (selectedGenres: SelectedGenres["results"]) => void;
    selectedGenresIds: number[];
    currentMovies: MovieDetails[];
    setCurrentMovies: (currentMovies: MovieDetails[]) => void;
    setSelectedGenresIds: (selectedGenresIds: number[]) => void;
    filteredMovies: MovieDetails[];
    setFilteredMovies: (filteredMovies: MovieDetails[]) => void;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
    totalPages: number;
    setTotalPages: (totalPage: number) => void;
}

const useMovieVerseStore = create<MovieVersetore>((set) => ({
    movieDataResponse: {
        results: [],
    },
    moviesList: [],
    setMoviesList: (moviesList: MovieDetails[]) => set({ moviesList }),
    genres: [],
    setGenres: (genres: Genres[]) => set({ genres }),
    selectedGenres: [],
    setSelectedGenres: (selectedGenres: SelectedGenres["results"]) => set({ selectedGenres }),
    currentMovies: [],
    setCurrentMovies: (currentMovies: MovieDetails[]) => set({ currentMovies }),
    selectedGenresIds: [],
    setSelectedGenresIds: (selectedGenresIds: number[]) => set({ selectedGenresIds }),
    filteredMovies: [],
    setFilteredMovies: (filteredMovies: MovieDetails[]) => set({ filteredMovies }),
    currentPage: 1,
    setCurrentPage : (currentPage: number) => set({ currentPage }),
    totalPages: 0,
    setTotalPages: (totalPages: number) => set({ totalPages })
}))

export default useMovieVerseStore;