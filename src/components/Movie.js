
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';

const Movie = ({c,setLikes}) => {

    let [genderMovies, setGenderMovies]=useState([]);


    let [favoris,setFavoris]=useState(false);
    

    // -----------------

    let urlImg ="https://www.themoviedb.org/t/p/w220_and_h330_face/";

    // genre
    const fetchGenderMovies=()=>{
        axios
        .get("https://api.themoviedb.org/3/genre/movie/list?api_key=6e81bd4c6b9f42f902ea37cc4ff63238&language=fr-FR")
        .then((response)=>setGenderMovies(response.data.genres));
    }

    useEffect(fetchGenderMovies,[]);
    
    // console.log(c);
    // console.log(allLike);



    // chercher le nom du genre du film
    function search(nameKey, myArray){
        for (let i=0; i < myArray.length; i++) {
            if (myArray[i].id === nameKey) {
                return myArray[i].name;
            }
        }
    }
    // add image to all movies without images
    let imgMovie;
    
    if(c.poster_path===null){
        imgMovie=process.env.PUBLIC_URL + "/movie-default-img.PNG";
    }else{
        imgMovie=urlImg+c.poster_path;
    }
    // like abd dislike
    let like="";
    if(favoris){like="Coup de coeur"}else{like="Ajouter à mes favoris"}
    
    return (
        <div className='movie'>
            <div className="img-container">
                <img  src={imgMovie}    alt = "Logo-Movie" />
            </div>
            <div className="info-container">
                <h2>{c.original_title}</h2>
                <div>
                    <button onClick={()=>{
                        setFavoris(!favoris);
                        setLikes(c.id);
                    }}
                    >
                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsklEQVR4nO1ZPYgTQRQeBUGwEBsV/1DBThsLEbGwF8XOv5z7JheC4C8WWmotNpZyaqfFgY0iZ2NnaaGgZN/bhENEsRH0LpLbN3sZmSyE3O0m2Wx2sxvYD75mWd5838yb2XlvhShQoECB3GOmofdZyDck8jsgZUvipkRuAfEPibwgie9atdb+qPEqdusAEN/z4/FPE8vE7MQ2z5Cvg6P3ji28QnqPRPVMInuSlB5I8w7yi0EDm4kA4pdR4wGqp1dQ744l3rLVOSBeHjrQOgLxEtje+fXxJHoX48YrO+rsSOKB+BYgr446WM/stSXx7W48m+/4z+LFA6MF+Wb0mR9HfI8JsxIWehfGES97TAxdCZPzcZZ5YDoRLyUZr1zTu/qnDqrnSQ2WIuf6nhCRToesieyZTAkYMJskc3EUkTZfCzOwkLkwikp+G5b/TvbCVCSaL3bQQIKnT/oGeDkshf5OjQHkP2Ep9DVrYTIqUX0JW4H56THA8wEDZfIuZy6MotFoDRioNvTWadjIgPzv0je9LWDAP4nUw9wbIPVI9EOprrcneflKnty0FvXOvgb8vcBXsxeqQmnKWjEUWm+QxO+zFiuD/HBf643DDQghZht6ByB/z4FobQjIv0Yu8meRj/ndgqwNsCttPiniAEidAWKV4cyvmpJUjANJXimRGnlUIrclclUkAVPoTzSdkD2w3Uoi4rsmHHXK3AInkPPNMqrTIg2U6+7hNE8nIP4NDp8QacL0QIHU5+TFKxvqK4dSFd81sag3A6nHCabNK3OZnIj4NUYcb6bTqY4768grpo0psgTU3COmQoqVMo57VOQB1Y96k0T1IGLbvA2knpQ+6S0ib7CIj/s/QPqljHJiXwsmuRqd9vya6o5ds+lzOeuDfiNJ5NeA/EZi62DfFwsUKFBATDP+A+J7kqIp0Kx1AAAAAElFTkSuQmCC" alt="" />
                        {like}
                    </button>
                </div>
                <div className='date-movie'>
                    
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnklEQVR4nO1YP0/CQBy974GjuhktAwbnLvoVUMPFAS7EUY846UeAxIVNmQpBcdCERBwEvoJJ66arTcRFcx3OXKNEAbG/2nAl/l7yljZ57979/jQpIQjE9HHe7m40291HxbPrzrpuHTB805ue9NnuPejWAWNg+kHdOmOxtLs/l8zzusH4S5Jx+ZXDxsPvg7L5i47vneeNldzeAoEe3mDcHWtcKI4aF4rwAAAdg3F3OXeQCBxA3fxPxqmj4xFj9QwaAKpjMG4FDjCubT6ZLtVGjNfKNXAAqI7B+HPwCkwyLluy2rodmFZbHZkuWfAAIXRIFAFUmTMnl76h4ubplVw9DNdCGaBOJAHUoClzdYOKft+GHOIUUCeaABpJMACbkQpQx5NxJMEADlZAxqKFzMrFN0b9nGIABysgY91CFL8DHm6hicAhrsR8iM1Z/5BR3EIebqH/PQMmBvBwC02E7nVJ/zwDtujrPiwdYtYWwX/uUkc0YhigHjjA1t3bInXEU2wO7wh35/51nkCwbctE1haW1nayRV/dPPjwCAQCQaaFd8jmZCShB77bAAAAAElFTkSuQmCC" alt="" />
                    <span>{dateFormat(c.release_date, "dd/mm/yyyy")}</span>
                </div>
                <div>
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3ElEQVR4nO1ZS2tTQRQe3wqKiKALF6LgwldVREXc+hey0ZqcuZEsBNcuu5BWQRRcKBQEwUVL47PW98aNS5dtk3OaNqgbFwqCYHLPpBmZmxivbXN7k2aSG8kHB7I6833fzJk750SIHnrowRqcGT5tQnQrJPJrIH4luhGJHB+XyGVJSieRT4puAxC/MORNAPKE6CY45B77435NRJZPiG4BII/7yXuB/Ex0AxLoHl3oflVA2dSFiDqA+Mki8rXgxyLKiM+4BwF5vq4A5HI86/aJqEIip+u7X7uRxkQUIal4IND9vwLmIeMeFlGDJB5djnxNBPGIiBKSWNwfxn3/Ljg591BHyPbn9I5Els846IIkNVg595wPS953I+WrNTNocpmcJndLSJ77pLeZOxtmSjEgvgKkhiWpD4D8o3GiDQZyAVBNeeJQXZfIKYnqrMTC3mWJS1JDQPzdOskmAyrchuoKuEx6g0R+3mmisv7uvIl91psCdyE2qddL4qcdJ0sLg18m8npjqBpIfdTrAPlRZI4O8oQ5HaHI13ZC6zUS+UEEyI8ZQxsi7xcBpO53jDzxyMB7vVasCFqvkqjutN95dW9A69UrI+8TAaRut895Ndw68n4RqG61wfm7Zi1hC5LUVYsCblgj3uzLM3zwqGgXAPlhywUgp9smQJLKWCjc6baQN19EIFatF8Cq4a9t02MTW0WM7hHrAiSV+m0JcKh03roAQHXN2g5QwFu/VbDZLwDyuHUBQGouJJkvlXaQU97vcDfRnFXylyb15iXnnv8EfzN9tL9z8pqkipCvwUXMZSejt1gTIJFPBVyDP00TnprVW4MM8IYEAcOBpM0/QyS5ySUcd83rMTmrd4bNc2Fab69OHH4tNsJ1rAnwv0aBmE3HdjFb2NNsvjjqXeaZDshFn4ibwhYk8juvBpDTkCvua1VeZ0rv9mZPyCVAfitswSxiczwez7p9Zg1b+Xvo4X/Eb8LEsTkqyLdBAAAAAElFTkSuQmCC" alt="" />
                    <span>{Math.round(c.vote_average * 100) / 100}/10</span>
                    
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