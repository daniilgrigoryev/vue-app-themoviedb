export default {
  SET_GENRES(state, genres) {
    // eslint-disable-next-line no-param-reassign
    state.genres = genres.genres
  },
  SET_MOVIE(state, movie) {
    // eslint-disable-next-line no-param-reassign
    state.movie = movie
  },
  // SET_CAST(state, cast) {
  //   state.cast = cast.cast.slice(0, 5)
  // },
  SET_TRAILER(state, trailer) {
    // eslint-disable-next-line no-param-reassign
    state.trailer = trailer.results
  },
  SET_MOVIES(state, movies) {
    // eslint-disable-next-line no-param-reassign
    state.movies = state.movies.concat(movies.results)
  },
}
