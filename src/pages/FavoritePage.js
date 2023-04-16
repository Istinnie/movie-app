import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import NavBar from "../components/NavBar";

const FavoritePage = () => {
  let [data, setData] = useState(JSON.parse(localStorage.getItem("likes")));

  // const location = useLocation();

  // console.log(location.state);

  //   let favorisData = localStorage.getItem("favoris");
  //   const movieAsObjectAgain = JSON.parse(favorisData);
  //   console.log(movieAsObjectAgain);

  // let allMovies = location.state;
  //   let allMovies = movieAsObjectAgain;
  // https://api.themoviedb.org/3/movie/76600?api_key=6e81bd4c6b9f42f902ea37cc4ff63238

  // return (
  //     <div className="App">
  //         <header className="App-header">
  //             <div><NavBar/></div>
  //             <h1>Coup de coeur</h1>
  //             <div>
  //                 ID des films favoris :
  //             </div>

  //             <section className="movies-container">
  //                 {allMovies &&
  //                     allMovies.map((allLike) => (
  //                         <span>{allLike.id} - </span>
  //                     ))
  //                 }

  //             </section>
  //         </header>

  //     </div>
  // );
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavBar />
        </div>
        <h1>Coup de coeur</h1>
      </header>
      <section className="movies-container">
        {data &&
          data.map((movie, index) => {
            return (
              <Movie
                key={index}
                c={movie}
                likes={JSON.parse(localStorage.getItem("likes"))}
              />
            );
          })}
      </section>
    </div>
  );
};

export default FavoritePage;
