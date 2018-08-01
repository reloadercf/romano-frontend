import React from 'react'

export const CardCarrousel =({title,subtitle,imagen_uno})=>{

    return(
   
        <div className="container">
            <img src={imagen_uno} alt="imagen" />
            <div  className="div-gradient">
                <h1 className="bottomleft" >{title}</h1>
            </div>
        </div>
        
    )
}