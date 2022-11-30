import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, Row, Col, Container, Badge } from "reactstrap";

import { getDetails, getSimilarMovie, getVideos } from "../helper";
import MovieCard from "../components/MovieCard";

function Detail() {
  const { id } = useParams();

  const [detail, setDetail] = useState();
  const [similarMovies, setSimilarMovies] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getDetails(id).then((result) => setDetail(result));
    getSimilarMovie(id).then((result) => setSimilarMovies(result.results));
    getVideos(id).then((result) => setVideos(result.results));
  }, [id]);

  return detail ? (
    <Container className="py-5">
      <Row>
        <Col sm="12">
          <Card color="dark">
            <CardBody>
              <div className="d-flex gap-3">
                <img
                  src={"https://image.tmdb.org/t/p/w300/" + detail.poster_path}
                  alt=""
                />
                <div className="w-100">
                  <h1>{detail.title}</h1>
                  <i className="d-block text-muted mb-3">{detail.tagline}</i>
                  <div className="mb-3">
                    {detail.genres.map((genre) => (
                      <Badge color="secondary" key={genre.id}>
                        {genre.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="w-25 d-flex justify-content-between mb-1 mt-2">
                    <span className="text-muted">Release Date:</span>
                    {detail.release_date}
                  </div>
                  <div className="w-25 d-flex justify-content-between mb-1 mt-2">
                    <span className="text-muted">Rating:</span>
                    {detail.vote_average}
                  </div>
                  <p className="mt-4">{detail.overview}</p>
                </div>
              </div>
              <h4 className="mb-4 mt-5">Related Videos</h4>
              <div className="d-flex gap-3 flex-wrap">
                {videos.length > 0 &&
                  videos.map((video) => (
                    <div className="mr-3">
                      <iframe
                        key={video.id}
                        src={"https://www.youtube.com/embed/" + video.key}
                        title={video.name}
                        frameBorder="0"
                      ></iframe>
                    </div>
                  ))}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="py-5">
          <h4 className="mb-4">Similar Movies</h4>
          <Row>
            {similarMovies.length > 0 &&
              similarMovies.map((movie) => (
                <div className="col-6 col-md-2 mb-3" key={movie.id}>
                  <MovieCard data={movie} withWatchListAction={false} />
                </div>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : (
    ""
  );
}

export default Detail;
