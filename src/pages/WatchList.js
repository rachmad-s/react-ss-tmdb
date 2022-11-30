import Title from "./../components/Title";
import { Row } from "reactstrap";
import { useContext } from "react";
import WatchListContext from "../contexts/WatchList.context";
import MovieCard from "./../components/MovieCard";

function WatchList(props) {

  const { watchLists } = useContext(WatchListContext);

  return (
    <div className="container py-3">
      <Title>My Watch List</Title>
      <Row>
        {watchLists.length > 0 ? (
          watchLists.map((movie) => (
            <div className="col-6 col-md-3 mb-3" key={movie.id}>
              <MovieCard data={movie} />
              
            </div>
          ))
        ) : (
          <div className="text-center">
            <i className="text-muted">Your watch list is empty</i>
          </div>
        )}
      </Row>
    </div>
  );
}

export default WatchList;
