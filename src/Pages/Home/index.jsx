import React from "react";
import ListFilmContainer from "./ListFilmContainer";
import SlideShow from "./SlideShow";

function Home(props) {
  const { films } = props;
  return (
    <div>
      <SlideShow slides={films} />
      <ListFilmContainer />
    </div>
  );
}

export default Home;
