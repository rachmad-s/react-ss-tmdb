import React, { useContext } from "react";
import { Card, CardBody, CardFooter, Button } from "reactstrap";
import { Check, Star, Heart, ChevronRight } from "react-feather";
import { useNavigate } from "react-router-dom";

import WatchListContext from "../contexts/WatchList.context";

function getYear(date) {
  return date.split("-")[0];
}

function MovieCard(props) {
  const { watchLists, addWatchList } = useContext(WatchListContext);
  const navigate = useNavigate();
  const movie = props.data;

  return (
    <Card color="dark" className="h-100">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <CardBody>
        <h6 className="text-ellipsis">{movie.original_title}</h6>
        <div className="d-flex justify-content-between">
          <small className="text-muted text-small">
            {getYear(movie.release_date)}
            {movie.adult ? <span className="badge badge-dark">18+</span> : ""}
          </small>
          <small className="text-warning">
            <Star size={12} alignmentBaseline="inherit" />
            {movie.vote_average}
          </small>
        </div>
      </CardBody>
      <CardFooter className="border-0 d-flex justify-content-between">
        {props.withWatchListAction && (
          <Button
            outline={!watchLists.find((wl) => wl.id === movie.id)}
            color="info"
            onClick={() => addWatchList({ ...movie })}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              {watchLists.find((wl) => wl.id === movie.id) ? (
                <>
                  <Check size={16} />
                  <small>Added to Watch List</small>
                </>
              ) : (
                <>
                  <Heart size={16} />
                  <small>Add to Watch List</small>
                </>
              )}
            </div>
          </Button>
        )}
        <Button
          outline
          color="secondary"
          onClick={() => navigate("/" + movie.id)}
        >
          <div className="d-flex justify-content-between align-items-center gap-1">
            <ChevronRight size={16} />
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}

MovieCard.defaultProps = {
  withWatchListAction: true,
};

export default MovieCard;
