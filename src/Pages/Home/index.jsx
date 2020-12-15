import React, { useEffect } from "react";
import ListFilmContainer from "./ListFilmContainer";
import SlideShow from "./SlideShow";
import filmApi from "../../api/filmApi";
function Home(props) {
  const { films } = props;
  useEffect(() => {
    filmApi.getAll({ sort: "date" }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <SlideShow slides={films} />
      <ListFilmContainer title="New Films" />
    </div>
  );
}

export default Home;
