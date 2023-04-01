import React from 'react';
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/movie-app">Accueil</Link></li>
                <li><Link to="/favorite">Coup de coeur</Link></li>
                
            </ul>
            
            
        </nav>
    );
};

export default NavBar;