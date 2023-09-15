/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css"
const API_KEY = "bb6fd6bd97e27b173c02b42a096e5fb2";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        alert("There is an error fetching the Movies please reload the page");
      });
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  let UTCDate = new Date(movieDetails.release_date)
  return (
    <div className="movie__details">
      <div className="middle">
        <div className="play">
          <img
            src={IMAGE_PATH + movieDetails.poster_path}
            alt={movieDetails.title}
          />
        </div>
        <div className="page_info">
          <div className="info">
            <div className="movie_det_left">
              <div className="movie_det_title">
                <h3 className="name" data-testid="movie-title">
                  {movieDetails.title}
                </h3>
                <div className="point">•</div>
                <h3 data-testid="movie-release-date">
                  {UTCDate.toDateString()}
                </h3>
                <div className="point">•</div>
                <h3 data-testid="movie-title">73min</h3>
                <div className="point">•</div>
                <h3> {movieDetails.vote_average}</h3>
              </div>
            </div>
            <img src="/img/rating.png" alt="rate" className="movie_det_right" />
          </div>
          <div className="movie_info">
            <div className="movie_info_left">
              <p data-testid="movie-overview">{movieDetails.overview}</p>
              <img src="/img/topRated.png" alt="" />
            </div>
            <div className="movie_info_right">
              <button className="show">
                <img src="/img/ticket.png" alt="" />
                See Showtimes
              </button>
              <button className="more">
                <img src="/img/list.png" alt="" />
                See Showtimes
              </button>

              <img className="extra" src="/img/extra.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
