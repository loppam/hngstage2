/* eslint-disable react/prop-types */
/* eslint-disable-next-line no-unused-vars */
import React from "react";

import Movie from "./movie";

const Row = ({ title, movies }) => {
  // console.log(movies);

  const movieGroups = [];

  for (let i = 0; i < movies.length; i += 10) {
    const movieGroup = movies.slice(i, i + 5);
    movieGroups.push(movieGroup);
  }

  return (
    <div className="Featured">
      <div className="item">
        <h2>{title}</h2>
        <p>See more</p>
      </div>

      <div className="row__posters" data-testid="movie-card">
        {movieGroups.map((group, index) => (
          <div key={index} className="group">
            {group.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
