/* eslint-disable react/no-unescaped-entities */
import "./header.css";
import imdb from "../../Images/imdb.png";
import tomat from "../../Images/tomat.png";
import { AiFillPlayCircle } from "react-icons/ai";

const header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">John Wick 3 : Parabellum</h1>
        <div className="header__rating">
          <div className="imdb-R">
            {" "}
            <img className="imdb" src={imdb} alt="imdb" /> <p>86.0/100</p>
          </div>
          <div className="rotenTomato">
            <img src={tomat} alt="rotten tomato" className="tomato" /> <p>97%</p>
          </div>
        </div>
        <h2 className="movie__overview">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </h2>
        <div className="header__buttons">
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
