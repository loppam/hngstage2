/* eslint-disable react/no-unescaped-entities */
import '../App.css'
import { AiFillPlayCircle } from "react-icons/ai";

const header = () => {
  return (
    <div className="header">
      <div className="header_content">
        <h1 className="header_title">John Wick 3 : Parabellum</h1>
        <div className="header_rating">
          <div className="imdb_rating">
            <img className="imdb" src="/img/imdb.png" alt="imdb" />{" "}
            <p>86.0/100</p>
          </div>
          <div className="rotenTomato">
            <img src="/img/tomat.png" alt="rotten tomato" className="tomato" />{" "}
            <p>97%</p>
          </div>
        </div>
        <h2 className="movie_overview">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </h2>
        <div className="header_buttons">
          <button className="btn_watch">
            <AiFillPlayCircle />
            WATCH TRAILER
          </button>
        </div>
      </div>
    </div>
  );
};

export default header;
