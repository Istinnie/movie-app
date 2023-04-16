import React, { useEffect, useState } from "react";

import Movie from "../components/Movie";
import NavBar from "../components/NavBar";
import axios from "axios";

const HomePage = () => {
  // let myquery = ""; // I put this because, setSearchInput don't change searchInput, i don't know why

  // let [movies, setMovies] = useState("");

  // //   let [genderMovies, setGenderMovies] = useState([]);

  // // ----------------------------------------
  // // Click on Search Butonn, don't work
  // // ----------------------------------------
  // //   let [message, setMessage] = useState("");
  // //   let [updated, setUpdated] = useState(message);
  // //   const handleChange = (event) => {
  // //     setMessage(event.target.value);
  // //   };
  // //   const handleClick = () => {
  // //     // "message" stores input field value
  // //     setUpdated(message);
  // //   };

  // // ----------------------------------------
  // // GET DATA FROM API
  // // ----------------------------------------
  // let [query, setQuery] = useState("code");
  // let [data, setData] = useState([]); //for top or flop

  // const fetchData = () => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/550?api_key=6e81bd4c6b9f42f902ea37cc4ff63238&query=" +
  //         query
  //     )
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const searchSubmit = (e) => {
  //   e.preventDefault();
  //   fetchData();
  // };

  // const searchInput = (e) => {
  //   setQuery(e.target.value);
  // };

  // //   const fetchMovies = () => {
  // //     axios
  // //       .get(
  // //         "https://api.themoviedb.org/3/search/movie?api_key=6e81bd4c6b9f42f902ea37cc4ff63238&query=" +
  // //           myquery
  // //       )
  // //       .then((response) => setMovies(response.data.results));
  // //   };
  // // useEffect(fetchMovies,[]);

  // // ----------------------------------------
  // // genre
  // // ----------------------------------------
  // //   const fetchGenderMovies = () => {
  // //     axios
  // //       .get(
  // //         "https://api.themoviedb.org/3/genre/movie/list?api_key=6e81bd4c6b9f42f902ea37cc4ff63238&language=fr-FR"
  // //       )
  // //       .then((response) => setGenderMovies(response.data.genres));
  // //   };

  // //   useEffect(fetchGenderMovies, []);
  // // ----------------------------------------
  // // faire ici le tri par ordre décroissant
  // // ----------------------------------------
  // // source : https://stackoverflow.com/questions/64255008/sort-descending-and-ascending-on-click

  // const [sortDirection, setSortDirection] = useState(false);
  // const sortTable = () => {
  //   setSortDirection(!sortDirection);
  //   const clonedOptions =
  //     data &&
  //     data.sort((a, b) => {
  //       return sortDirection
  //         ? b.vote_average - a.vote_average
  //         : a.vote_average - b.vote_average;
  //     });
  //   setData(clonedOptions);
  // };
  // // ----------------------------------------
  // // for like or dislike
  // // ----------------------------------------
  // //   let [likes, setLikes] = useState([]);
  // //   const [allLikes, setAllLikes] = useState([]);

  // //   if (likes != 0) {
  // //     const exists = allLikes.find((p) => p.id === likes);
  // //     if (!exists) {
  // //       allLikes.push({
  // //         id: likes,
  // //       });
  // //     } else {
  // //       // delete doublon ne marche pas
  // // const newArr = allLikes.filter(object => {
  // //     return object.name !== likes;
  // //   });
  // // allLikes.filter(object =>object.name === likes);
  // // console.log(newArr);
  // //     }
  // //   }

  // //   let l = [];
  // //   if (allLikes != 0) {
  // //     l = allLikes;
  // //   }

  // // ----------------------------------------
  // //  LOCAL STORAGE
  // // ----------------------------------------
  // // localStorage.setItem('favoris', JSON.stringify(allLikes));
  // // const stringifiedMovie = JSON.parse(localStorage.getItem('favoris'));

  // // console.log(stringifiedMovie);
  // // ----------------------------------------

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div>
  //         {/* <NavBar l={l} /> */}
  //         <NavBar />
  //       </div>
  //       <h1>Mes films</h1>
  //       <div>
  //         <form onSubmit={searchSubmit}>
  //           <input
  //             type="text"
  //             id="searchInput"
  //             onInput={searchInput}
  //             placeholder="Tappez le nom du film"
  //           />
  //           {/* <button id="searchButton" onClick={handleClick}> */}
  //           <input type="submit" id="searchButton" value="Rechercher" />
  //         </form>
  //         <button
  //           id="topFlopButton"
  //           onClick={(e) => {
  //             sortTable(e.target.value);
  //           }}
  //         >
  //           Top ou Flop
  //         </button>
  //       </div>
  //       {/* <div>
  //                   ID favoris :
  //                       {allLikes.map(allLike => (
  //                        <span> {allLike.id} - </span>
  //                       ))}

  //               </div> */}
  //     </header>
  //     <section className="movies-container">
  //       {data &&
  //         data
  //           .filter((movie) =>
  //             movie.overview.toLowerCase().includes(searchInput.toLowerCase())
  //           )
  //           .map((movie, index) => (
  //             <Movie
  //               key={index}
  //               c={movie}
  //               genres={JSON.parse(localStorage.getItem("genres"))}
  //               likes={JSON.parse(localStorage.getItem("likes"))}
  //               //   setLikes={setLikes}
  //               //   genderMovies={genderMovies}
  //             />
  //           ))}
  //     </section>
  //   </div>
  // );
  let [query, setQuery] = useState("e");
  let [data, setData] = useState([]);
  let [sortMethod, setSortMethod] = useState("top");

  const fetchData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=6e81bd4c6b9f42f902ea37cc4ff63238&query=" +
          query +
          "&language=fr-FR"
      )
      .then((response) => {
        setData(response.data.results);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const searchInput = (e) => {
    setQuery(e.target.value);
  };

  const topFlopClick = () => {
    if (sortMethod === "top") {
      setSortMethod("flop");
    } else {
      setSortMethod("top");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavBar />
        </div>
        <h1>Mes films</h1>
        <div>
          <form className="formSearch" onSubmit={searchSubmit}>
            <input
              type="text"
              placeholder="Entrez le titre du film"
              onInput={searchInput}
            />
            <input type="submit" value="Rechercher" />
            <button
              onClick={topFlopClick}
              title="Trier les films par ordre de popularité"
            >
              {sortMethod.toUpperCase()}
            </button>
          </form>
        </div>
      </header>
      <section className="movies-container">
        {data &&
          data
            .sort((a, b) => {
              if (sortMethod === "top") {
                return b.vote_average - a.vote_average;
              } else {
                return a.vote_average - b.vote_average;
              }
            })
            .map((movie, index) => {
              return (
                <Movie
                  key={index}
                  c={movie}
                  genres={JSON.parse(localStorage.getItem("genres"))}
                  likes={JSON.parse(localStorage.getItem("likes"))}
                />
              );
            })}
      </section>
    </div>
  );
};

export default HomePage;
