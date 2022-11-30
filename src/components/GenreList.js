import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { getGenres } from "./../helper";

function GenreList(props) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((result) => setGenres(result.genres));
  }, []);

  return genres.length > 0 ? (
    <div className="mb-4">
      {genres.map((genre) => (
        <Button
          key={genre.id}
          outline={genre.id !== props.filter.genre.id}
          size="sm"
          color="secondary"
          className="mx-1 mb-2"
          onClick={() => props.setFilter((s) => ({ ...s, genre: genre }))}
        >
          {genre.name}
        </Button>
      ))}
    </div>
  ) : (
    ""
  );
}

export default GenreList;
