import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
  movies : [],
  pending: false
}

// Define Async Thunk
export const fetchMoviesAsync = createAsyncThunk(
  'movies/fetch',
  async () => {
    const response = await fetch("https://dfs-movies-func-cs.azurewebsites.net/api/getList?code=qMXULFw5hZmqKZjPoKUzaOpG3zp1erlMfuEePJKXUexnWqc9Ev4W8g==")
    const movies = await response.json()
    return movies
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  // Actions
  reducers: {
    deleteMovie(state, action) {
      // copie locale du state
      const movies = state.movies
      // Index de movie à supprimer
      const movieToDelete = state.movies.findIndex(i => i.id === action.payload.id)
      // splice de movie à supprimer
      movies.splice(movieToDelete, 1)
      // nouveau state
      state.movies = movies
    }
  },
  // ExtraReducers (Asynchrone)
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        console.log("Loading movies...");
        state.pending = true
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.pending = false
        state.movies = action.payload;
      });
    // Il faudrait gérer l'erreur dans le cas d'une vraie requête !
  },
})

// movies selector
export const selectMovies = (state) => {
  // state . slice . key de l'initialState
  return state.movies.movies
}
// pending selector
export const selectPending = (state) => state.movies.pending

export const { deleteMovie } = moviesSlice.actions

export default moviesSlice.reducer
