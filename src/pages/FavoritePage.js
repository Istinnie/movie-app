
import NavBar from '../components/NavBar';
import {useLocation} from 'react-router-dom';
import React from 'react'
const FavoritePage = () => {

    const location = useLocation();

    
    // console.log(location.state);

    let allMovies = location.state;
    // https://api.themoviedb.org/3/movie/76600?api_key=6e81bd4c6b9f42f902ea37cc4ff63238
   

    return (
        <div className="App">
            <header className="App-header">
                <div><NavBar/></div>
                <h1>Coup de coeur</h1>
                <div>
                    ID des films favoris :
                </div>
                
                <section className="movies-container">
                    {allMovies
                        .map((allLike) => (
                            <span>{allLike.id} - </span>
                        ))
                    }
                    
                </section>
            </header>
                
        </div>
    );
};

export default FavoritePage;