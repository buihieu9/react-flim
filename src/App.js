import "./App.css";
import "./style/reset.css";
import Header from "./components/Header";
import SlideShow from './Pages/Home/SlideShow'
import ListFilm from './components/ListFilm'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  const [data, setData] = useState([])
  const [films, setFilms] = useState([])
  useEffect(() => {
    fetch('https://5f8a739718c33c0016b31771.mockapi.io/Film')
      .then((res) => res.json())
      .then(res => {
        setData(res)
        setFilms(res.slice(0, 6))
      })

  }, [])
  return (
    <Router>
      
    </Router>
  );
}

export default App;
