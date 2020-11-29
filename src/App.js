import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Header";
import Home from "./Pages/Home/index";
import SlideShow from "./Pages/Home/SlideShow/index";
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
    <>
      <NavBar />
      {/* {films.length !== 0 && <SlideShow slides={films} />} */}
      <Home films={films} />
    </>
  );
}

export default App;
