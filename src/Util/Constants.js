import Keys from '../Keys.json'
const { movieKey } = Keys
export const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${movieKey}&language=en-US&page=1`
export const popularMoviesUrl2 = `https://api.themoviedb.org/3/movie/popular?api_key=${movieKey}&language=en-US&page=2`
export const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${movieKey}&language=en-US&page=1`
export const popularTvsShows = `https://api.themoviedb.org/3/tv/popular?api_key=${movieKey}&language=en-US&page=1`
export const topRatedTvShows = `https://api.themoviedb.org/3/tv/top_rated?api_key=${movieKey}&language=en-US&page=1`

// skapa todo pagination
