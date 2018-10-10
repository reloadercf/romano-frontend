import React from 'react'
import {Link} from 'react-router-dom';

export const CardCarrousel =({slug,titulo,imagenportada})=>{
    return(
        <div className="container">
            <a href={`/detail/${slug}`}>
                <img src={imagenportada} alt="imagen" />
            </a>
           
            <div  className="div-gradient">
            <a href={`/detail/${slug}`}>
                <h1 className="bottomleft" >{titulo}</h1>  
            </a>
                 
            </div>
        </div>
        
    )
}