import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

const HomePage = () => {
    let myquery="";
    let [movies, setMovies]=useState([]);
    let [searchInput, setSearchInput]=useState("");
    const [data, setData] = useState([]);

    
    let [message, setMessage] = useState("");
    let [updated, setUpdated] = useState(message);
    const handleChange = (event) => {
        setMessage(event.target.value);
      };
    const handleClick = () => {
        // "message" stores input field value
        setUpdated(message);
      };
        
    
    function fetchMovies(){
        axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=6e81bd4c6b9f42f902ea37cc4ff63238&query="+myquery)
        .then((response)=>setMovies(response.data.results));
        
    }
    
    // useEffect(fetchMovies,[]);
    // faire ici le tri par ordre décroissant
    // source : https://dev.to/ramonak/react-how-to-dynamically-sort-an-array-of-objects-using-the-dropdown-with-react-hooks-195p
    const sortArray = () => {
        const sorted = movies.sort((a, b) =>  b.vote_average- a.vote_average);
        console.log(sorted);
        setData(sorted);
      };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Movies App</h1>
                <div>
                    <input 
                    type="text" 
                    id="searchInput" 
                    onChange={(e)=>{setSearchInput(e.target.value);myquery= e.target.value;fetchMovies();}}
                    // onChange={(e)=>{setSearchInput(e.target.value)}}
                    
                    // onChange={handleChange}
                    // value={message}
                    placeholder="Tappez le nom du film"
                    />
                    <button id="searchButton" onClick={handleClick}>Rechercher</button>
                    <button id="topFlopButton" onClick={(e) => sortArray(e.target.value)}>Trier par note</button>
                </div>
                
                        
            </header>
            <section className="movies-container">
                {
                    movies
                    .filter((movie)=>
                        movie.overview
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                    )
                    .map((movie,index)=>(
                        <Movie key={index} c={movie}/>
                    ))
                }
                    
                
                
                
                
            </section>
        </div>
    );
};

export default HomePage;