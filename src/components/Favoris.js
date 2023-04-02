import React from 'react';

const Favoris = ({c}) => {
    
    return (
        <div className='lmj-cart'>
            <h2>Favoris</h2>
            <div>
                Titre : {c.original_title}
                
            </div>
        </div>
    )
};

export default Favoris;