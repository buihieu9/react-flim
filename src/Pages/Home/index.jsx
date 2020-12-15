import React, { useEffect, useState } from "react";
import ListFilmContainer from "./ListFilmContainer";
import SlideShow from "./SlideShow";
import filmApi from "../../api/filmApi";

function Home(props) {
  const [newFilms,setNewFilms] = useState(null)
  useEffect(()=>{
    filmApi.getAll({
      sort:'date',
      limit:10
    }).then((res)=>{
      console.log(res.data.product);
      setNewFilms(res.data.product)
    })
  },[])
  return (
    <div>
      {newFilms&&<>
        <SlideShow   slides={newFilms} />
        <ListFilmContainer films={newFilms} title="New Films" />
      </>}
    </div>
  );
}

export default Home;
