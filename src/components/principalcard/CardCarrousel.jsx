import React from 'react'

export const CardCarrousel =({title,subtitle,imagen})=>{

    return(
   
        <div className="container">
            <img src={imagen} alt="imagen" />
            <div  className="div-gradient">
                <h1 className="bottomleft" >{title}</h1>
            </div>
        </div>
        
    )
}