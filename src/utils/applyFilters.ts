interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids?: number[];
}

const ratingFilter = (
  moviesList: MovieDetails[],
  filterOption: string | number
): MovieDetails[] => {
  let filteredMovies = moviesList;
  filteredMovies = moviesList.filter((movie) => {
    let ratingFilter;
    if (filterOption === 6) {
      ratingFilter = Math.round(movie.vote_average) <= Number(filterOption);
    } else {
      ratingFilter = Math.round(movie.vote_average) === Number(filterOption);
    }
    return ratingFilter;
  });
  return filteredMovies;
};

const trendingFilter = (
  moviesList: MovieDetails[],
  filterOption: string | number
): MovieDetails[] => {
  let filteredMovies = moviesList;
  const today = new Date();
  switch (filterOption) {
    case 30:
      const last30Days = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 30
      );
      filteredMovies = moviesList.filter(
        (movie) => new Date(movie.release_date) >= last30Days
      );
      break;
    case 7:
      const last7Days = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      );
      filteredMovies = moviesList.filter(
        (movie) => new Date(movie.release_date) >= last7Days
      );
      break;
    case 1:
      const last1Day = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 1
      );
      filteredMovies = moviesList.filter(
        (movie) => new Date(movie.release_date) >= last1Day
      );
      break;
    default:
      filteredMovies = moviesList;
  }
  return filteredMovies;
};

const genreFilter = ( moviesList: MovieDetails[], selectedGenresIds: number[] ): MovieDetails[] => {
  if(selectedGenresIds.length === 0 ) return moviesList
    return moviesList.filter((item) => {
      return item.genre_ids?.some((id) => selectedGenresIds.includes(id));
      });
    }

export { ratingFilter, trendingFilter, genreFilter };
