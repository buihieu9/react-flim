import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/Header";
import Home from './Pages/Home';
import FilterFilm from './Pages/FilterFilm';
import WatchFilm from './Pages/WatchFilm';
import LeftComponent from './components/LeftComponent'

import "./App.css";
import "./style/reset.css";



function App() {
  const [data, setData] = useState([]);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/film")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilms(res.slice(0, 6));
      });
  }, []);
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="app__container">
          <div className="app__container__left">
            <Switch>
              <Route path="/genres">
                <FilterFilm />
              </Route>
              <Route path="/country">
                <FilterFilm />
              </Route>
              <Route path="/hot-films">
                <FilterFilm />
              </Route>
              <Route path="/new-films">
                <FilterFilm />
              </Route>
              <Route path="/movies-shown-in-theater">
                <FilterFilm />
              </Route>
              <Route path="/watch-film/:id">
                <WatchFilm />
              </Route>
              <Route path="/" >
                <Home />
              </Route>
            </Switch>
          </div>
          <div className="app__container__right">
            <LeftComponent/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
