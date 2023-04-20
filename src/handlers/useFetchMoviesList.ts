import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ResponseTypes } from "../store/movieverseStore";
import { BASE_URL } from '../constants';

interface UseFetchMoviesList {
    moviesData: ResponseTypes;
    isErrorFetchingData: boolean;
    isLoadingFetchingData: boolean;
}

const useFetchMoviesList = (): UseFetchMoviesList => {
    const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
    const { data=[], error, isLoading } = useQuery(["moviesList"], async () => {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
        return response.data;
    });
        return {
        moviesData: data || {},
        isErrorFetchingData: !!error,
        isLoadingFetchingData: isLoading,
      };;
};

export default useFetchMoviesList;