import { create } from 'zustand'

export interface ResponseTypes {
    page?: number;
    results: MovieDetails[];
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
    moviesList: MovieDetails[];
    setMoviesList: (movieList: MovieDetails[]) => void;
    genres: Genres[];
    setGenres: (genres: Genres[]) => void;
    currentMovies: MovieDetails[];
    setCurrentMovies: (currentMovies: MovieDetails[]) => void;
    filteredMovies: MovieDetails[];
    setFilteredMovies: (filteredMovies: MovieDetails[]) => void;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
    totalPages: number;
    setTotalPages: (totalPage: number) => void;
}

const useMovieVerseStore = create<MovieVersetore>((set) => ({
    moviesList: [],
    setMoviesList: (moviesList: MovieDetails[]) => set({ moviesList }),
    genres: [],
    setGenres: (genres: Genres[]) => set({ genres }),
    currentMovies: [],
    setCurrentMovies: (currentMovies: MovieDetails[]) => set({ currentMovies }),
    filteredMovies: [],
    setFilteredMovies: (filteredMovies: MovieDetails[]) => set({ filteredMovies }),
    currentPage: 1,
    setCurrentPage : (currentPage: number) => set({ currentPage }),
    totalPages: 0,
    setTotalPages: (totalPages: number) => set({ totalPages })
}))

export default useMovieVerseStore;