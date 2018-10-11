import React from 'react'
import {Link} from 'react-router-dom'
export const CardCarrousel =({id,slug,titulo,imagenportada,key})=>{

    return(
        
        <div className="container-card">
            <Link to={`/detail/${slug}`}>
                <img src={imagenportada} alt="imagen"/>
            </Link>
            <div className="info-container-card" >
                <span>{titulo}</span>
            </div>
             
        </div>
        
    )
}