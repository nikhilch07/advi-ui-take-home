const ITEMS_PER_PAGE = 8;
const BASE_URL = "https://api.themoviedb.org/3";
const MOVIE_POSTER_PREFIXURL = "https://image.tmdb.org/t/p/w500";
const RATING_FILTER_OPTIONS = {
  type: "Rating",
  options: [
    { label: "Poor", value: "6" },
    {
      label: "Average",
      value: "7",
    },
    {
      label: "Good",
      value: "8",
    },
    {
      label: "Very Good",
      value: "9",
    },
    {
      label: "Excellent",
      value: "10",
    },
  ],
};

const TRENDING_FILTER_OPTIONS = {
  type: "Trending",
  options: [
    { label: "This Month", value: 30 },
    {
      label: "This Week",
      value: 7,
    },
    { label: "Today", value: 1 },
    { label: "All Time", value: "" },
  ],
};

export {
  ITEMS_PER_PAGE,
  BASE_URL,
  MOVIE_POSTER_PREFIXURL,
  RATING_FILTER_OPTIONS,
  TRENDING_FILTER_OPTIONS,
};
