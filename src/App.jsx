import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./assets/homepage"
import MovieDet from "./assets/movieDet"
const App = () => {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details/:id" element={<MovieDet />} />
    </Routes>
  </div>;
};

export default App;
