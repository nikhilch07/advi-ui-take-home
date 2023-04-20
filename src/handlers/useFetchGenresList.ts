import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Genres } from "../store/movieverseStore";
import { BASE_URL } from "../constants";

interface UseFetchGenresList {
    genresData: Genres[];
    isErrorFetchingGenresData: boolean;
    isLoadingFetchingGenresData: boolean;
}

const useFetchGenresList = (): UseFetchGenresList => {
    const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
    const { data=[], error, isLoading } = useQuery(["genresList"], async () => {
        const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        return response.data;
    });
    return {
        genresData: data.genres || [],
        isErrorFetchingGenresData: !!error,
        isLoadingFetchingGenresData: isLoading,
    };
}

export default useFetchGenresList;