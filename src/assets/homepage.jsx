import { useEffect, useState } from "react";
import request from "../components/requests";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Row from "../components/row";
const API_KEY = "bb6fd6bd97e27b173c02b42a096e5fb2";
const fetchTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;
const homepage = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("Featured Movies");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(fetchTopRated);
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
    <div className="homepage">
      <Navbar
        movies={movies}
        setMovies={setMovies}
        title={title}
        setTitle={setTitle}
      />
      <Header fetchUrl={request.fetchTrending} />
      <Row
        movies={movies}
        setMovies={setMovies}
        title={title}
        setTitle={setTitle}
        fetchUrl={request.fetchNetflixOriginals}
      />
    </div>
  );
};

export default homepage;
