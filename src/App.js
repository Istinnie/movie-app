import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritePage from "./pages/FavoritePage";
import HomePage from "./pages/HomePage";
import React, { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=c08c164078b4818c695608834f121e17&language=fr-FR"
      )
      .then((response) => {
        localStorage.setItem("genres", JSON.stringify(response.data.genres));
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie-app" element={<HomePage />}></Route>
        <Route path="/favorite" element={<FavoritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
