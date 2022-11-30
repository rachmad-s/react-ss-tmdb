import React from "react";
import Title from "./Title";
import { Row } from "reactstrap";
import MovieCard from "./MovieCard";


function ListMovie(props) {
  return (
    <div className="mb-5">
      <Title>
        {props.filter.search
          ? "Results For: " + props.filter.search
          : props.filter.genre.name
          ? props.filter.genre.name
          : "Recommendation Movies"}
      </Title>
      <Row>
        {props.movies.map((movie) => (
          <div className="col-6 col-md-3 mb-3" key={movie.id}>
            <MovieCard data={movie} />
          </div>
        ))}
      </Row>
    </div>
  );
}

export default ListMovie;
