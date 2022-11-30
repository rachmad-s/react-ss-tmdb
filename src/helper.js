const API_KEY = "05fbe900ddcfa99ae5937c7ea581f18d";
const config = {
  method: "GET",
  mode: "cors",
};

// GET LIST OF MOVIES
export async function getMovies(genre) {
  const params = {
    api_key: API_KEY,
  };
  if (genre) params.with_genres = genre;
  const URLParams = new URLSearchParams(params);
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?" + URLParams,
    config
  );
  return response.json();
}

// GET MOVIES WITH SEARCH QUERY
export async function searchMovie(q) {
  const params = {
    api_key: API_KEY,
    query: q,
  };
  const URLParams = new URLSearchParams(params);
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?" + URLParams,
    config
  );
  return response.json();
}

// GET GENRE LIST
export async function getGenres() {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?" + params,
    config
  );
  return response.json();
}

// GET MOVIE DETAILS
export async function getDetails(movieId) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const response = await fetch(
    `https://api.themoviedb.org/3//movie/${movieId}?` + params,
    config
  );
  return response.json();
}

// GET SIMILAR MOVIE
export async function getSimilarMovie(movieId) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const response = await fetch(
    `https://api.themoviedb.org/3//movie/${movieId}/similar?` + params,
    config
  );
  return response.json();
}

// GET MOVIE VIDEOS
export async function getVideos(movieId) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    append_to_response: "videos",
  });
  const response = await fetch(
    `https://api.themoviedb.org/3//movie/${movieId}/videos?` + params,
    config
  );
  return response.json();
}
