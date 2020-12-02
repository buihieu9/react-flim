import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/Header";
import Home from "./Pages/Home";
import FilterFilm from "./Pages/FilterFilm";
import WatchFilm from "./Pages/WatchFilm";
import FilmInfo from "./Pages/FilmInfo";
import LeftComponent from "./components/LeftComponent";
import Auth from "./Pages/Auth/index";
import { useLocation } from "react-router-dom";

import "./App.css";
import "./style/reset.css";

function App() {
  const [data, setData] = useState([]);
  const [films, setFilms] = useState([]);
  const [unRight, setUnRight] = useState(false);

  const his = useLocation();

  useEffect(() => {
    fetch("https://5f8a739718c33c0016b31771.mockapi.io/Film")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilms(res.slice(0, 6));
      });
  }, []);
  useEffect(() => {
    if (his.pathname === "/auth/sign-in" || his.pathname === "/auth/sign-up") {
      setUnRight(true);
      return;
    }
    setUnRight(false);
  }, [his]);
  return (
    <div className="app">
      <NavBar className="nav-bar" />
      <div className="app__container">
        <div
          className="app__container__left"
          style={{ width: unRight && "100%" }}
        >
          <Switch>
            <Route path="/auth" component={Auth} />
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
            <Route path="/watch-film">
              <WatchFilm />
            </Route>
            <Route path="/film-info">
              <FilmInfo />
            </Route>
            <Route exact path="/">
              <Home films={films} />
            </Route>
          </Switch>
        </div>
        {!unRight && (
          <div className="app__container__right">
            <LeftComponent films={films} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
