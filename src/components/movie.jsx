/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

const Movie = ({ title, poster_path, vote_average, id, release_date }) => {
  let vote = (vote_average / 10) * 100;
  let roundedVote = parseFloat(vote.toFixed(1));

  return (
    <div className="row_poster">
      <Link to={`/details/${id}`}>
        <img
          data-testid="movie-poster"
          className="poster"
          src={IMAGE_PATH + poster_path}
          alt={title}
        />
        <p data-testid="movie-release-date">{release_date}</p>
        <p data-testid="movie-title" className="row__title">
          {title}
        </p>
        <div className="row_rating">
          <div className="imdb-rating">
            <img className="imdb" src="/img/imdb.png" alt="imdb" />{" "}
            <p>{roundedVote}/100</p>
          </div>
          <div className="rotenTomato">
            <img src="/img/tomat.png" alt="rotten tomato" className="tomat" />{" "}
            <p>{roundedVote}%</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
