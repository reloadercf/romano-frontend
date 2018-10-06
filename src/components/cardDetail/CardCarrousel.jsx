import React from 'react'
import {Link} from 'react-router-dom';
export const CardCarrousel =({id,slug,titulo,imagenportada})=>{

    return(
        
        <div className="container-card">
            <a href={`/detail/${slug}`}>
                <img src={imagenportada} alt="imagen"/>
            </a>
       
            <div className="info-container-card" >
                <span>{id}</span>
                <p className="card-title" >{titulo}</p>   
            </div>
             
        </div>
        
    )
}