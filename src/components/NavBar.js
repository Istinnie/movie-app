import React from 'react';
import {useNavigate, Link } from 'react-router-dom'
const NavBar = ({l}) => {
    
    
    const navigate = useNavigate();
    
    const goToFavorite=()=>{
        navigate("/favorite",{
            state:{l}
        });
    }
    // console.log(l);
    return (
        <nav>
            <ul>
                <li><Link to="/movie-app">Accueil</Link></li>
                <li >
                    
                    <Link 
                    to="/favorite"
                    state={l}
                    >
                    Coup de coeur
                    </Link>
                </li>
                
            </ul>
            
            
        </nav>
    );
};

export default NavBar;