import { useEffect, useState } from "react";
import requests from "../../requests";
import Row from "../row/row";
import Header from "../header/header";
import Nav from "../nav/nav";
const API_KEY = "bb6fd6bd97e27b173c02b42a096e5fb2";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

function Home() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("Featured Movies");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="app">
      <Nav
        movies={movies}
        setMovies={setMovies}
        title={title}
        setTitle={setTitle}
      />
      <Header fetchUrl={requests.fetchTrending} />
      <Row
        movies={movies}
        setMovies={setMovies}
        title={title}
        setTitle={setTitle}
        fetchUrl={requests.fetchNetflixOriginals}
      />
    </div>
  );
}

export default Home;
