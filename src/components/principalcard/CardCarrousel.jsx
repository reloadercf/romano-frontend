import React from 'react'
import {Link} from 'react-router-dom'

export const CardCarrousel =({slug,titulo,imagenportada})=>{
    return(
        <div className="container">
            <Link to={`/detail/${slug}`}>
                <img src={imagenportada} alt="imagen" />
            </Link>
           
            <div  className="div-gradient">
            <Link to={`/detail/${slug}`}>
                <h1 className="bottomleft" >{titulo}</h1>  
            </Link>
                 
            </div>
        </div>
        
    )
}