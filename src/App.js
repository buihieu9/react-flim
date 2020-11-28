import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/Header";
import Home from './Pages/Home';
import FilterFilm from './Pages/FilterFilm';
import WatchFilm from './Pages/WatchFilm';
import FilmInfo from './Pages/FilmInfo'

import "./App.css";
import "./style/reset.css";



function App() {
  const [data, setData] = useState([]);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch("https://5f8a739718c33c0016b31771.mockapi.io/Film")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilms(res.slice(0, 6));
      });
  }, []);
  return (
   <Router>
      <NavBar />
      <Switch>
        <Route path="/genres">
          <FilterFilm/>
        </Route>
        <Route path="/country">
          <FilterFilm />
        </Route>
        <Route path="/hot-film">
          <FilterFilm />
        </Route>
        <Route path="/new-film">
          <FilterFilm/>
        </Route>
        <Route path="/movie-shown-in-theater">
          <FilterFilm/>
        </Route>
        <Route path="/watch-film">
          <WatchFilm/>
        </Route>
        <Route path="/film-info">
          <FilmInfo/>
        </Route>
        <Route path="/" >
          <Home/>
        </Route>
      </Switch>
   </Router>
  );
}

export default App;
