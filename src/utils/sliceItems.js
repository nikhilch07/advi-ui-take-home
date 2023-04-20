import { ITEMS_PER_PAGE } from '../constants';

const sliceMovies = (movies) => movies.slice(0, ITEMS_PER_PAGE);

const slicePages = (movies) => Math.ceil(movies.length / ITEMS_PER_PAGE)

 export { sliceMovies, slicePages }