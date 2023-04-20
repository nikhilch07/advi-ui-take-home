import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Genres } from "../store/store";
import { BASE_URL } from "../constants";

interface UseFetchGenresList {
    genresData: Genres[];
    isErrorFetchingGenresData: boolean;
    isLoadingFetchingGenresData: boolean;
}

const useFetchGenresList = (): UseFetchGenresList => {
    const { data=[], error, isLoading } = useQuery(["genresList"], async () => {
        const response = await axios.get(`${BASE_URL}/list?api_key=&language=en-US`)
        return response.data;
    });
    return {
        genresData: data.genres || [],
        isErrorFetchingGenresData: !!error,
        isLoadingFetchingGenresData: isLoading,
    };
}

export default useFetchGenresList;