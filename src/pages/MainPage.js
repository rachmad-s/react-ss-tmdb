import React, { useState, useEffect } from "react";
import { Container, Input } from "reactstrap";

import ListMovie from "./../components/ListMovie";
import GenreList from "./../components/GenreList";
import { getMovies, searchMovie } from "./../helper";

function MainPage(props) {
  const [filter, setFilter] = useState({
    search: "",
    genre: "",
  });
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!filter.search) {
      getMovies(filter.genre.id).then((res) => setMovies(res.results));
    }
  }, [filter.genre, filter.search]);

  useEffect(() => {
    if (filter.search)
      searchMovie(filter.search).then((res) => setMovies(res.results));
  }, [filter.search]);

  const inheritedProps = {
    filter,
    setFilter,
    movies,
    watchLists: props.watchLists,
  };

  return (
      <Container className="py-5">
        <Input
          placeholder="Search movie title..."
          size="sm"
          className="mb-4 search-box"
          onChange={(e) => setFilter((s) => ({ ...s, search: e.target.value }))}
        />
        {!filter.search && <GenreList {...inheritedProps} />}
        <ListMovie {...inheritedProps} />
      </Container>
  );
}

export default MainPage;
