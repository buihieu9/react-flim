import React from "react";
import SlideShow from "./SlideShow/index";
import ListFilm from "./ListFilmContainer/index";
import "./style.scss";

function Home(props) {
  const { films } = props;
  return (
    <div className="container Home">
      <div className="col-slide">
        <SlideShow slides={films} />
      </div>
      {/* <ListFilm /> */}
    </div>
  );
}

export default Home;
