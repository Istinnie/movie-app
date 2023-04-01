
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movie = ({c}) => {

    let [genderMovies, setGenderMovies]=useState([]);
    let urlImg ="https://www.themoviedb.org/t/p/w220_and_h330_face/";

    // genre
    const fetchGenderMovies=()=>{
        axios
        .get("https://api.themoviedb.org/3/genre/movie/list?api_key=6e81bd4c6b9f42f902ea37cc4ff63238&language=fr-FR")
        .then((response)=>setGenderMovies(response.data.genres));
    }

    useEffect(fetchGenderMovies,[]);
    
    // console.log(c);
    // chercher le nom du genre du film
    function search(nameKey, myArray){
        for (let i=0; i < myArray.length; i++) {
            if (myArray[i].id === nameKey) {
                return myArray[i].name;
            }
        }
    }
    let imgMovie;
    
    if(c.poster_path===null){
        imgMovie=process.env.PUBLIC_URL + "/movie-default-img.PNG";
    }else{
        imgMovie=urlImg+c.poster_path;
    }
    
    return (
        <div className='movie'>
            <div className="img-container">
                <img  src={imgMovie}    alt = "Logo-Movie" />
            </div>
            <div className="info-container">
                <h2>{c.original_title}</h2>
                <div className='date-movie'>
                    
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnklEQVR4nO1YP0/CQBy974GjuhktAwbnLvoVUMPFAS7EUY846UeAxIVNmQpBcdCERBwEvoJJ66arTcRFcx3OXKNEAbG/2nAl/l7yljZ57979/jQpIQjE9HHe7m40291HxbPrzrpuHTB805ue9NnuPejWAWNg+kHdOmOxtLs/l8zzusH4S5Jx+ZXDxsPvg7L5i47vneeNldzeAoEe3mDcHWtcKI4aF4rwAAAdg3F3OXeQCBxA3fxPxqmj4xFj9QwaAKpjMG4FDjCubT6ZLtVGjNfKNXAAqI7B+HPwCkwyLluy2rodmFZbHZkuWfAAIXRIFAFUmTMnl76h4ubplVw9DNdCGaBOJAHUoClzdYOKft+GHOIUUCeaABpJMACbkQpQx5NxJMEADlZAxqKFzMrFN0b9nGIABysgY91CFL8DHm6hicAhrsR8iM1Z/5BR3EIebqH/PQMmBvBwC02E7nVJ/zwDtujrPiwdYtYWwX/uUkc0YhigHjjA1t3bInXEU2wO7wh35/51nkCwbctE1haW1nayRV/dPPjwCAQCQaaFd8jmZCShB77bAAAAAElFTkSuQmCC" alt="" />
                    <span>{c.release_date}</span>
                </div>
                <div>
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3ElEQVR4nO1ZS2tTQRQe3wqKiKALF6LgwldVREXc+hey0ZqcuZEsBNcuu5BWQRRcKBQEwUVL47PW98aNS5dtk3OaNqgbFwqCYHLPpBmZmxivbXN7k2aSG8kHB7I6833fzJk750SIHnrowRqcGT5tQnQrJPJrIH4luhGJHB+XyGVJSieRT4puAxC/MORNAPKE6CY45B77435NRJZPiG4BII/7yXuB/Ex0AxLoHl3oflVA2dSFiDqA+Mki8rXgxyLKiM+4BwF5vq4A5HI86/aJqEIip+u7X7uRxkQUIal4IND9vwLmIeMeFlGDJB5djnxNBPGIiBKSWNwfxn3/Ljg591BHyPbn9I5Els846IIkNVg595wPS953I+WrNTNocpmcJndLSJ77pLeZOxtmSjEgvgKkhiWpD4D8o3GiDQZyAVBNeeJQXZfIKYnqrMTC3mWJS1JDQPzdOskmAyrchuoKuEx6g0R+3mmisv7uvIl91psCdyE2qddL4qcdJ0sLg18m8npjqBpIfdTrAPlRZI4O8oQ5HaHI13ZC6zUS+UEEyI8ZQxsi7xcBpO53jDzxyMB7vVasCFqvkqjutN95dW9A69UrI+8TAaRut895Ndw68n4RqG61wfm7Zi1hC5LUVYsCblgj3uzLM3zwqGgXAPlhywUgp9smQJLKWCjc6baQN19EIFatF8Cq4a9t02MTW0WM7hHrAiSV+m0JcKh03roAQHXN2g5QwFu/VbDZLwDyuHUBQGouJJkvlXaQU97vcDfRnFXylyb15iXnnv8EfzN9tL9z8pqkipCvwUXMZSejt1gTIJFPBVyDP00TnprVW4MM8IYEAcOBpM0/QyS5ySUcd83rMTmrd4bNc2Fab69OHH4tNsJ1rAnwv0aBmE3HdjFb2NNsvjjqXeaZDshFn4ibwhYk8juvBpDTkCvua1VeZ0rv9mZPyCVAfitswSxiczwez7p9Zg1b+Xvo4X/Eb8LEsTkqyLdBAAAAAElFTkSuQmCC" alt="" />
                    <span>{c.vote_average} / 10</span>
                    
                </div>
                <div>
                    <div>
                        <img className='movie-logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfElEQVR4nO2YwQ3AMAgDvarX9ip90AUatZ+IpLmTePHBxIAUCQAA4C84V+0QOkKAXsR15oWA8AI13UJeOISA8AKFhZ7otoYZ4vR316zR9HfYHLKsHRrRXZgRkP7uGgulv8NmiMOvRM3M68sdmFkAAkZ0bxcfv4UAAAC0GTdxLsiAIv+P0AAAAABJRU5ErkJggg==" alt="" />
                        Genre  : 
                    </div>
                    <ul>

                        {c.genre_ids.map((genreId)=>( 
                            <li>{search(genreId, genderMovies)} </li>
                        ))}
                    </ul>
                </div>
                <span className='description-movie'>{c.overview}</span>
                
            </div>
        </div>


    );
};

export default Movie;