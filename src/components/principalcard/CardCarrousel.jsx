import React from 'react'
import {Link} from 'react-router-dom';

export const CardCarrousel =({slug,title,subtitle,imagen_uno})=>{
    return(
        <div className="container">
            <Link to={`/detail/${slug}`}>
                <img src={imagen_uno} alt="imagen" />
            </Link>
           
            <div  className="div-gradient">
                <h1 className="bottomleft" >{title}</h1>       
            </div>
        </div>
        
    )
}