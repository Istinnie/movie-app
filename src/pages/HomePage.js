import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import NavBar from '../components/NavBar';

const HomePage = () => {
    let myquery="";// I put this because, setSearchInput don't change searchInput, i don't know why

    let [movies, setMovies]=useState([]);
    
    const [data, setData] = useState([]);//for top or flop

    let [searchInput, setSearchInput] = useState("");
    
    let [message, setMessage] = useState("");
    let [updated, setUpdated] = useState(message);
    const handleChange = (event) => {
        setMessage(event.target.value);
      };
    const handleClick = () => {
        // "message" stores input field value
        setUpdated(message);
      };
        
    const fetchMovies=()=>{
        axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=6e81bd4c6b9f42f902ea37cc4ff63238&query="+myquery)
        .then((response)=>setMovies(response.data.results));
        
    }
    
    // useEffect(fetchMovies,[]);
    // faire ici le tri par ordre décroissant
    // source : https://stackoverflow.com/questions/64255008/sort-descending-and-ascending-on-click

    const [sortDirection, setSortDirection] = useState(false);
    const sortTable = () => {
        setSortDirection(!sortDirection);
        const clonedOptions = movies.sort((a, b) => {
            return sortDirection ? b.vote_average - a.vote_average : a.vote_average - b.vote_average;
        })
        setData(clonedOptions);
    }

    // for like or dislike
    let [likes, setLikes] = useState([]);
    const [allLikes, setAllLikes] = useState([]);

    
    if(likes!=0){
        const exists = allLikes.find(p => p.id === likes);
        if (!exists){
            allLikes.push({
                id: likes
            });
        }else{
            // delete doublon ne marche pas
            
            // const newArr = allLikes.filter(object => {
            //     return object.name !== likes;
            //   });
            // allLikes.filter(object =>object.name === likes);
            
            // console.log(newArr);
        }
    }

    let l=[];
    if(allLikes!=0){
        l=allLikes;
    }

    
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    
                    <NavBar l={l}/>
                </div>
                <h1>Mes films</h1>
                <div>
                    <input 
                    type="text" 
                    id="searchInput" 
                    onChange={(e)=>{myquery= e.target.value;fetchMovies();}}
                    //onChange={(e)=>{setSearchInput(e.target.value)}}
                    
                    // onChange={handleChange}
                    // value={message}
                    placeholder="Tappez le nom du film"
                    />
                    <button id="searchButton" onClick={handleClick}>Rechercher</button>
                    <button id="topFlopButton" onClick={(e) =>{sortTable(e.target.value);} }>Top ou Flop</button>
                </div>
                {/* <div>
                    ID favoris : 
                        {allLikes.map(allLike => (
                         <span> {allLike.id} - </span>
                        ))}
            
                    
                </div> */}
                        
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
                        <Movie key={index} c={movie} likes={likes} setLikes={setLikes} />
                    ))
                }
            </section>
        </div>
    );
};

export default HomePage;